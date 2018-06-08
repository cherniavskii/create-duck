const generateImports = require('./imports');
const generateName = require('./name');
const generateTypes = require('./types');
const generateActions = require('./actions');
const generateSelectors = require('./selectors');
const generateLogic = require('./logic');
const generateReducer = require('./reducer');

module.exports = (names, useReselect, cancellable) => {
  return (
    generateImports(names, useReselect, cancellable)
    + '\n' +
    generateName(names, useReselect, cancellable)
    + '\n' +
    generateTypes(names, useReselect, cancellable)
    + '\n' +
    generateActions(names, useReselect, cancellable)
    + '\n' +
    generateSelectors(names, useReselect, cancellable)
    + '\n' +
    generateLogic(names, useReselect, cancellable)
    + '\n' +
    generateReducer(names, useReselect, cancellable)
    + '\n'
  );
};