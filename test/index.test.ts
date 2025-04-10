import { describe, it, expect } from 'vitest';
import { convert } from '../src';

import fs from 'fs';
import path from 'path';

const tableHtml = fs.readFileSync(
  path.resolve(process.cwd(), './test/table.html'),
  {
    encoding: 'utf-8',
  }
);

const twoTableHtml = fs.readFileSync(
  path.resolve(process.cwd(), './test/twoTable.html'),
  {
    encoding: 'utf-8',
  }
);

describe('tabletomd', () => {
  it('convert', () => {
    expect(convert(tableHtml))
      .equal(`| Company                    | Contact         | Country |
| -------------------------- | --------------- | ------- |
| Alfreds Futterkiste        | Maria Anders    | Germany |
| Centro comercial Moctezuma | Francisco Chang | Mexico  |`);
  });
  it('convert two table', () => {
    expect(convert(twoTableHtml))
      .equal(`| Company                    | Contact         | Country |
| -------------------------- | --------------- | ------- |
| Alfreds Futterkiste        | Maria Anders    | Germany |
| Centro comercial Moctezuma | Francisco Chang | Mexico  |

| Emil | Tobias | Linus |
| ---- | ------ | ----- |
| 16   | 14     | 10    |`);
  });
});
