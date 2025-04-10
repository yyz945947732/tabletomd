import './fetch-polyfill';
import { Tabletojson } from 'tabletojson';
import { markdownTable } from 'markdown-table';

/**
 * @private
 *
 * transform Table Json data to Markdown string
 */
function transformJson(data: unknown[]): string {
  /* istanbul ignore if -- @preserve */
  if (!Array.isArray(data)) {
    return '';
  }
  const result = [];
  data.forEach((arr) => {
    if (Array.isArray(arr) && arr.length) {
      const rows = [];
      const example = arr[0];
      const header = Object.keys(example);
      rows.push(header);
      arr.forEach((item) => {
        const row = Object.values(item).map((item: string) =>
          item.replace(/\|/g, '\\|')
        );
        rows.push(row);
      });
      const md = markdownTable(rows);
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
/* istanbul ignore next -- @preserve */
export async function convertUrl(url: string) {
  try {
    const json = await Tabletojson.convertUrl(url);
    return transformJson(json);
  } catch (e) {
    console.error(e);
    return '';
  }
}
