#!/usr/bin/env node

const inquirer = require("inquirer");
const { PathPrompt } = require('inquirer-path');
const path = require("path");
const fs = require("fs");
const duckTemplate = require("./duck.template");
const generateDuckNames = require("./util").generateDuckNames;

inquirer.prompt.registerPrompt('path', PathPrompt);

const questions = [
	{
		type: 'input',
		name: 'name',
    message: 'Duck name (kebab-case)',
		default: 'default',
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
  }
];

inquirer.prompt(questions).then(answers => {
  const { name, destination, reselect } = answers;
  const duckNames = generateDuckNames(name);
  const filePath = path.resolve(destination, name + ".js");
  fs.writeSync(fs.openSync(filePath, "w"), duckTemplate(duckNames, reselect));
  console.log(`Created duck ${filePath}`);
});