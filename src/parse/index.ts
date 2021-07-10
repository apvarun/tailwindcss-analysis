// @ts-ignore
import { toJSON, toCSS } from 'cssjson';
import { dynamicUtilities, staticUtilities } from '../helpers/categories';
import ClassnameInfo from '../types/classnameInfo';

export default function parseCSS(cssString: string) {
  const json = toJSON(cssString) as Record<string, any>;

  const categorizedCSS: ClassnameInfo[] = [];

  Object.entries(json?.children || {}).forEach(([className]) => {
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
      if (name.includes('[') && name.includes(']')) {
        info.category = 'variable';
      } else if (name in staticUtilities) {
        info.category = staticUtilities[name];
      } else if (type in dynamicUtilities) {
        info.category = dynamicUtilities[type];
      }
    }

    info.category = info.category || 'unknown';

    categorizedCSS.push(info as ClassnameInfo);
  });

  return categorizedCSS;
}
