# Unittests in JS

This project focuses on implementing unit tests in JavaScript using various testing frameworks and libraries such as Mocha, Chai, and Sinon.

## Project Structure

- `0-calcul.js` & `0-calcul.test.js`: Basic test with Mocha and Node assertion library
- `1-calcul.js` & `1-calcul.test.js`: Combining descriptions
- `2-calcul_chai.js` & `2-calcul_chai.test.js`: Basic test using Chai assertion library
- `utils.js`, `3-payment.js` & `3-payment.test.js`: Spies
- `4-payment.js` & `4-payment.test.js`: Stubs
- `5-payment.js` & `5-payment.test.js`: Hooks
- `6-payment_token.js` & `6-payment_token.test.js`: Async tests with done
- `7-skip.test.js`: Skip
- `8-api/`: Basic Integration testing
- `9-api/`: Regex integration testing
- `10-api/`: Deep equality & Post integration testing

## Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Run tests:
   ```
   npm test
   ```

## Requirements

- All files will be executed on Ubuntu 18.04 using Node 12.x.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All files should end with a new line
- Code should use the `.js` extension
- Tests should be run using `npm run test *.test.js`
