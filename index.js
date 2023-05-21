require("dotenv").config();

const { MY_NAME, MY_CITY, MY_LANGUAGE } = process.env;

console.log(`I am ${MY_NAME}, wilder in ${MY_CITY}, and I love ${MY_LANGUAGE}`);
