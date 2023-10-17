// @ts-ignore
import analyzer from 'analyze-css';
import { Metrics } from './types/metrics';

const opts = {
  noOffenders: true,
};

export async function analyze(css: string) {
  return new Promise<Metrics>(async (res, rej) => {
    try {
      const results = await analyzer(css, opts)

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
    } catch (err) {

      rej(err)
    }
  });
}