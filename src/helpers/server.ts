import { resolve } from 'path';
import http from 'http';
import connect from 'connect';
import sirv from 'sirv';
import { version } from '../../package.json';
import { Metrics } from '../types/metrics';
import ClassnameInfo from '../types/classnameInfo';

export async function startServer(output: {
  metrics: Metrics;
  categories: ClassnameInfo[];
}) {
  const getPort = await import('get-port');
  const port = await getPort.default();
  const app = connect();
  const url = `http://localhost:${port}`;

  app.use('/api', async function fooMiddleware(_, res) {
    res.write(JSON.stringify(output));
    res.statusCode = 500;
    return res.end();
  });

  app.use(sirv(resolve(__dirname, '../app/dist'), { dev: true, single: true }));

  http.createServer(app).listen(port);

  const openUrl = await import('open')
  openUrl.default(url);

  console.log(`TailwindCSS Analysis ${version} report open at ${url}`);

  return app;
}
