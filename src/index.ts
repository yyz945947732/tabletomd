import './fetch-polyfill';
import { Tabletojson } from 'tabletojson/dist/lib/Tabletojson.js';
import mdtable from 'mdtable';

/**
 * @private
 *
 * json use by mdtable
 */
interface MdJson {
  header: string[];
  alignment: string[];
  rows: string[][];
}

/**
 * @private
 *
 * get json use by mdtable
 */
function getMdJson(header: string[], rows: string[][]): MdJson {
  const lens = header.length;
  return {
    header,
    alignment: new Array(lens).fill('L'),
    rows,
  };
}

/**
 * @private
 *
 * transform Table Json data to Markdown string
 */
function transformJson(data: unknown[]): string {
  if (!Array.isArray(data)) {
    return '';
  }
  const result = [];
  data.forEach((arr) => {
    if (Array.isArray(arr) && arr.length) {
      const rows = [];
      const example = arr[0];
      const header = Object.keys(example);
      arr.forEach((item) => {
        const row = Object.values(item);
        rows.push(row);
      });
      const mdJson = getMdJson(header, rows);
      const md = mdtable(mdJson, {
        borders: true,
        padding: 1,
      });
      result.push(md);
    }
  });

  return result.join('\n\n');
}

/**
 * Generate markdown tables by html string
 * @param {string} html string
 * @returns {string} string
 */
export function convert(html: string) {
  try {
    const json = Tabletojson.convert(html);
    return transformJson(json);
  } catch (e) {
    console.error(e);
    return '';
  }
}

/**
 * Generate markdown tables by a given URL
 * @param {string} html string
 * @returns {string} string
 */
/* istanbul ignore next */
export async function convertUrl(url: string) {
  try {
    const json = await Tabletojson.convertUrl(url);
    return transformJson(json);
  } catch (e) {
    console.error(e);
    return '';
  }
}
