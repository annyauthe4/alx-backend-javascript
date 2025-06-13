<h1> Unittests in JS </h1>
Mocha, a Javascript test framework that runs in node.js is used here to write:
<ul>
  <li>Test suites (groups of related tests)</li>
  <li>Test cases (individual unit tests)</li>
</ul>

## Procedure
<h1> Install Mocha (locally as a development dependency)</h1>
<code>npm install --save-dev mocha</code>

<h1> Install Chai (assertion library)</h1>
<code>npm install --save-dev chai</code>

<h1> Create a test file (in a test folder)</h1>
Suppose we have a file <i> math.js</i> with the functions
<code>
// math.js
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

module.exports = { add, subtract };
</code>

Create a folder test/ and a file test/math.test.js
<code>
// test/math.test.js
const { expect } = require('chai');
const { add, subtract } = require('../math');

describe('Math Utility', function () {
  describe('add()', function () {
    it('should return 5 for add(2, 3)', function () {
      expect(add(2, 3)).to.equal(5);
    });

    it('should return -1 for add(-2, 1)', function () {
      expect(add(-2, 1)).to.equal(-1);
    });
  });

  describe('subtract()', function () {
    it('should return 1 for subtract(3, 2)', function () {
      expect(subtract(3, 2)).to.equal(1);
    });

    it('should return -3 for subtract(1, 4)', function () {
      expect(subtract(1, 4)).to.equal(-3);
    });
  });
});
</code>

<h1> Let's break the above down </h1>
<ul>

  <li>describe('Math Utility', ...): A test suite (groups tests for math.js)</li>

  <li>describe('add()', ...): A sub-suite for add()</li>

  <li>it('should return 5...', ...): An individual test case</li>

  <li>expect(...): From Chai — used to make assertions about your code</li>
</ul>

<h1> Update package.json to run tests </h1>
In package.json, update the scripts section:
<code>
 "scripts": {
  "test": "mocha"
}
</code>

<h1>Run the tests</h1>
<code> npm test </h1>
