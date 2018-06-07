#!/usr/bin/env node

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const duckTemplate = require("./duck.template");
const generateDuckNames = require("./util").generateDuckNames;

const questions = [
	{
		type: 'input',
		name: 'name',
    message: 'Duck name (kebab-case)',
		default: 'default',
	},
	{
    type: 'input',
    name: 'destination',
    message: 'Duck destination path',
		default: './',
	},
];

inquirer.prompt(questions).then(answers => {
  const { name, destination } = answers;
  const duckNames = generateDuckNames(name);
  const filePath = path.resolve(destination, name + ".js");
  fs.writeSync(fs.openSync(filePath, "w"), duckTemplate(duckNames));
  console.log(`Created duck ${filePath}`);
});