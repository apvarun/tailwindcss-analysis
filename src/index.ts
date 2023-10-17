import { resolve, join } from 'path';
import { writeFileSync } from 'fs';
import cac from 'cac';
import { execFileSync } from 'child_process';
import { version } from '../package.json';
import { readModule } from './helpers/readModule';
import { analyze } from './analyzer';
import { readFileSync } from 'fs';
import parseCSS from './parse';
import { startServer } from './helpers/server';

const cli = cac('tailwindcss-analysis');

cli
  .help()
  .version(version)
  .option('--open', 'Open in browser', { default: true })
  .option('--json [filepath]', 'Output analysis result file in JSON');

const parsed = cli.parse();

async function run() {
  const root = resolve(process.cwd());

  if (parsed.options.help) {
    return;
  }

  try {
    const tailwindConfig = readModule(join(root, '/tailwind.config.js'));
    if (
      !tailwindConfig ||
      !tailwindConfig.purge ||
      tailwindConfig.purge.length === 0
    ) {
      console.log(
        'Ensure that files to `purge` are configured in your tailwind config file'
      );
      return;
    }
  } catch {
    console.log('tailwind.config.js file does not exist in the project');
    return;
  }

  execFileSync(
    'npx',
    ['tailwindcss', '--minify', '-o', 'tailwind-output.css'],
    {
      env: { ...process.env, NODE_ENV: 'production' },
      stdio: 'ignore',
    }
  );

  let tailwindCSSFile = '';

  try {
    tailwindCSSFile = readFileSync(join(root, 'tailwind-output.css'), {
      encoding: 'utf-8',
    });
  } catch {
    console.log('Failed to parse and generate the tailwind css output');
    return;
  }

  const metrics = await analyze(tailwindCSSFile);

  const categories = parseCSS(tailwindCSSFile);

  const output = {
    metrics,
    categories,
  };

  console.log(output);

  if (parsed.options.json) {
    let jsonPath = join(root, parsed.options.json);
    if (!jsonPath.endsWith('.json')) {
      jsonPath = join(jsonPath, 'tailwindcss-analysis-report.json');
    }

    // generate JSON
    await writeFileSync(jsonPath, JSON.stringify(output), 'utf-8');
  }

  if (parsed.options.open) {
    startServer(output);
  }
}

run();
