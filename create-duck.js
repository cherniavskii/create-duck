const prompt = require("prompt");
const path = require("path");
const fs = require("fs");
const duckContent = require("./duck-content");

const schema = {
	properties: {
		name: {
			description: 'Duck name',
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
	const { name } = result;
	const filename = path.resolve(name + ".js");
	fs.writeSync(fs.openSync(filename, "w"), duckContent(name));
	console.log(`Created ${name} duck`);
});