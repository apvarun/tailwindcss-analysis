// @ts-ignore
import { toJSON } from 'cssjson';
import { dynamicUtilities, staticUtilities } from '../helpers/categories';
import ClassnameInfo from '../types/classnameInfo';
import camelToTitleCase from '../helpers/camelToTitleCase';

export default function parseCSS(cssString: string) {
  const json = toJSON(cssString) as Record<string, any>;

  const categorizedCSS: ClassnameInfo[] = [];

  Object.entries(json?.children || {}).forEach(([classNames]) => {

    classNames.split(',').forEach(className => {

      const info: Partial<ClassnameInfo> = {};

      let name = className.startsWith('.') ? className.slice(1) : className;

      if (name[0] === '!') {
        info.important = true;
        name = name.slice(1);
      }
      if (name.startsWith('@media')) {
        info.category = '@media';
      } else if (name.includes(':')) {
        const variants = name.split(/:/g);
        info.prefixes = variants.slice(0, -1);
        name = variants.slice(-1)[0];
      }

      info.name = name;

      const [type] = (name.startsWith('-') ? name.slice(1) : name).split('-');

      if (!info.category) {
        if (name in staticUtilities) {
          info.category = staticUtilities[name];
        } else if (type in dynamicUtilities && type !== name) {
          info.category = dynamicUtilities[type];
        } else if (name.includes('[') && name.includes(']')) {
          info.category = 'variable';
        }
      }

      info.category = info.category || 'unknown';

      info.category = camelToTitleCase(info.category);

      categorizedCSS.push(info as ClassnameInfo);

    })
  });

  return categorizedCSS;
}
