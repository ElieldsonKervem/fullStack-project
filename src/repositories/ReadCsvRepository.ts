import fs from 'fs';
import {parse} from 'csv-parse'
import { CsvModel } from '../models/CsvModel';




export function readCSV(filePath: string): Promise<CsvModel[]> {
    return new Promise((resolve, reject) => {
      const results: CsvModel[] = [];
      fs.createReadStream(filePath)
        .pipe(parse({ columns: true, delimiter: ',' }))
        .on('data', (data) => results.push(data))
        .on('end', () => resolve(results))
        .on('error', (error) => reject(error));
    });
  }