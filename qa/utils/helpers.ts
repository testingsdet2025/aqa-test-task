import { readTestData, generateRandomEmail } from '../utils/helpers';

const data = readTestData('users.json');

console.log(data.validUser);
console.log(generateRandomEmail());
