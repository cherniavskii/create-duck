const generateImports = require('./imports');
const generateName = require('./name');
const generateTypes = require('./types');
const generateActions = require('./actions');
const generateSelectors = require('./selectors');
const generateLogic = require('./logic');
const generateReducer = require('./reducer');

module.exports = (config) => {
  return (
    generateImports(config)
    + '\n' +
    generateName(config)
    + '\n' +
    generateTypes(config)
    + '\n' +
    generateActions(config)
    + '\n' +
    generateSelectors(config)
    + '\n' +
    generateLogic(config)
    + '\n' +
    generateReducer(config)
    + '\n'
  );
};