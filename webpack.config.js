const webp = require("webpack");
const path = require('path');
const glob = require("glob");

// Add NeuroBlock code
let entries = {
	BCIDevice: path.resolve(__dirname, "dest", "BCIDevice.js")
};

module.exports = {
	entry: entries,
	output: {
		path: path.resolve(__dirname, "dest"),
		filename: '[name].pack.js',
		libraryTarget: "this"
	},
	mode: "production"
};
