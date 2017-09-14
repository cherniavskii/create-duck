const program = require("commander");
const path = require("path");
const fs = require("fs");
const duckContent = require("./duck-content");

const script = (duckName) => {
	const filename = path.resolve(duckName + ".js");
	fs.writeSync(fs.openSync(filename, "w"), duckContent(duckName));
	console.log(`Created ${duckName} duck`);
};

program
	.version('0.1.0')
	.arguments('<name>')
	.action(script)
	.parse(process.argv);
