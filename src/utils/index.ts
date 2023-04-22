import CryptoJS from 'crypto-js';

import dataModel1 from '../model/dataModel1.json';
import dataModel2 from '../model/dataModel2.json';
import {DataModel} from '../types';

const parseNumbers = (values: string[]): number[] => {
  return values.map((val: string) => parseInt(val, 10) || 0);
};

const mean = (values: string[]): string => {
  // parse the string inputs into number
  const numbers: number[] = parseNumbers(values);

  // calculate summation and average
  const sum = numbers.reduce((partialSum, a) => partialSum + a, 0);
  return `${sum / values.length}`;
};

const median = (values: string[]): string => {
  // parse the string inputs into number
  const numbers: number[] = parseNumbers(values);

  // sort the numbers to pick the median
  const sorted: number[] = numbers.sort((a: number, b: number) => a - b);

  // pick the middle if size is odd or
  // pick average of the two middles if size is even
  const len = sorted.length;
  let res: number = sorted[len / 2];

  if (len % 2 === 0) {
    res = (sorted[len / 2 - 1] + sorted[len / 2]) / 2;
  }

  return res.toString();
};

const standardDeviation = (values: string[]) => {
  // parse the string inputs into number
  const numbers: number[] = parseNumbers(values);
  // get the mean value
  const meanVal: number = parseFloat(mean(values));
  // subtracting mean from each number then squaring it
  const meanDiff: number[] = numbers.map((num: number) =>
    Math.pow(num - meanVal, 2),
  );
  // summation of meanDiff
  const summation: number = meanDiff.reduce(
    (partialSum, a) => partialSum + a,
    0,
  );

  // calculating standard deviation
  const res: number = Math.sqrt(summation / values.length);
  return res.toString();
};

export const dataModels: DataModel[] = [dataModel1, dataModel2];

export const functions: object = {
  sha256: (values: string[]) => {
    // create a secret key for unique hash
    const secretKey: string = '-key-';
    return CryptoJS.SHA256(values.join(secretKey)).toString();
  },
  mean,
  median,
  sd: standardDeviation,
};
