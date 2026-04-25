/*
Assignments #1 - Create a cli

Create a `command line interface` that lets the user specify a file path and the nodejs process counts the number of words inside it.

Input - node index.js /Users/kirat/file.txt
Output - You have 10 words in this file

Command - `node index.js count_words filePath`
*/


const fs = require("fs");

const { Command } = require('commander');
const program = new Command();

program
  .name('counter')
  .description('CLI to do file based tasks')
  .version('0.8.0');

program.command('count')
  .description('Count the number of the word')
  .argument('<file>', 'file path')
  .option('-w, --words', 'count words')
  .option('-l, --lines', 'count lines')
  .option('-c, --chars', 'count characters')
  .action((file , option) => {
   
    const data = fs.readFileSync(file, 'utf-8');
     if (options.lines) {
      console.log(`Lines: ${data.split('\n').length}`);
    } else if (options.chars) {
      console.log(`Characters: ${data.length}`);
    } else {
      const words = data.trim().split(/\s+/);
      console.log(`Words: ${words.length}`);
    }
  });

program.parse();