#!/usr/bin/env node

const prompt = require("prompt");
const path = require("path");
const fs = require("fs");
const duckTemplate = require("./duck.template");
const generateDuckNames = require("./util").generateDuckNames;

const schema = {
	properties: {
		name: {
			description: 'Duck name (kebab-case)',
			type: 'string',
			message: 'Duck name is required',
			required: true,
			default: 'default',
		}
	}
};

prompt.message = " ";
prompt.delimiter = ">";

prompt.get(schema, (err, result) => {
	if (err !== null) return console.log();
	const { name } = result;
	const duckNames = generateDuckNames(name);
	const filename = path.resolve(name + ".js");
	fs.writeSync(fs.openSync(filename, "w"), duckTemplate(duckNames));
	console.log(`Created ${name} duck`);
});
