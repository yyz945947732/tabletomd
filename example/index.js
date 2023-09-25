import { convert } from '../dist/index.js';

import fs from 'fs';
import path from 'path';

const html = fs.readFileSync(
  path.resolve(process.cwd(), './test/twoTable.html'),
  {
    encoding: 'utf-8',
  }
);

console.log(convert(html));
