#!/usr/bin/env node

const inquirer = require("inquirer");
const { PathPrompt } = require('inquirer-path');
const path = require("path");
const fs = require("fs");
const generateDuck = require("./templates/fetch");
const generateDuckNames = require("./util").generateDuckNames;

inquirer.prompt.registerPrompt('path', PathPrompt);

const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'Duck name (kebab-case)',
    default: 'data',
  },
  {
    type: 'path',
    name: 'destination',
    message: 'Duck destination path',
    directoryOnly: true,
  },
  {
    name: 'reselect',
    type: 'confirm',
    default: false,
    message: 'Use reselect for selectors?',
  },
  {
    name: 'cancellable',
    type: 'confirm',
    default: false,
    message: 'Make httpClient request cancellable?',
  },
];

inquirer.prompt(questions).then(answers => {
  const { name, destination, ...other } = answers;
  const duckNames = generateDuckNames(name);
  const filePath = path.resolve(destination, name + ".js");
  const templateConfig = {
    names: duckNames,
    ...other,
  };
  fs.writeSync(fs.openSync(filePath, "w"), generateDuck(templateConfig));
  console.log(`Created duck ${filePath}`);
});
