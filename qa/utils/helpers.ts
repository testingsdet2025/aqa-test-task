import * as fs from 'fs';
import * as path from 'path';

export function readTestData(fileName: string) {
  const filePath = path.resolve(__dirname, `../test-data/${fileName}`);
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
}
