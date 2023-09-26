import { convert, convertUrl } from '../dist/index.js';

import fs from 'fs';
import path from 'path';

const html = fs.readFileSync(
  path.resolve(process.cwd(), './test/table.html'),
  {
    encoding: 'utf-8',
  }
);

const convertOutput = convert(html);
fs.writeFileSync(
  path.resolve(process.cwd(), './example/convertOutput.md'),
  convertOutput,
  'utf-8'
);

const convertUrlOutput = await convertUrl('https://www.npmjs.com/package/rc-table');
fs.writeFileSync(
  path.resolve(process.cwd(), './example/convertUrlOutput.md'),
  convertUrlOutput,
  'utf-8'
);
