// @ts-ignore
import analyzer from 'analyze-css';

export interface Metrics {
  colors: number;
  mediaQueries: number;
  selectors: number;
  selectorsByAttribute: number;
  selectorsByClass: number;
  selectorsById: number;
  selectorsByPseudo: number;
  selectorsByTag: number;
  rules: number; // CSS Rules
  declarations: number; // Properties
}
interface AnalyzerResult {
  metrics: Metrics;
}

const opts = {
  noOffenders: true,
};

export async function analyze(css: string) {
  return new Promise<Metrics>((res, rej) => {
    new analyzer(css, opts, function(err: Error, results: AnalyzerResult) {
      if (err) {
        rej(err);
      }

      const {
        metrics: {
          colors,
          mediaQueries,
          selectors,
          selectorsByAttribute,
          selectorsByClass,
          selectorsById,
          selectorsByPseudo,
          selectorsByTag,
          rules,
          declarations,
        },
      } = results;

      res({
        colors,
        mediaQueries,
        selectors,
        selectorsByAttribute,
        selectorsByClass,
        selectorsById,
        selectorsByPseudo,
        selectorsByTag,
        rules,
        declarations,
      });
    });
  });
}
