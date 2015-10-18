var uniqueRandomArray = require("unique-random-array");
var frequency = require('./word-frequency.json');

module.exports = {
	all: frequency,
	random: uniqueRandomArray(frequency)
};