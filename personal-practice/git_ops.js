const util = require('util');
const chalk = require('chalk');
const readline = require("readline");
const { exec } = require('child_process');
const asyncExec = util.promisify(exec);

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

function prompt(q) {
	return new Promise((resolve)=>{
		rl.question(q,answer=>resolve(answer))
	})
}

async function showStatus() {
  let cmd = `git status`;
  const { stdout, stderr } = await asyncExec(cmd);
  console.log(chalk.blue(stdout));
  if (stderr) console.error(`stderr:\n ${chalk.keyword('orange')(stderr)}`);
}

async function commit() {
  let comment = await prompt("please comment: ");
  if(!comment) comment="some bugs fix;";
  let time = new Date().toISOString();
  let cmd = `git commit -a -m "time:${time.slice(0, -5)},${comment}"`;
  const { stdout, stderr } = await asyncExec(cmd);
  console.log(chalk.blue(stdout));
	if (stderr) console.error(`stderr:\n ${chalk.keyword('orange')(stderr)}`);
}


(async function() {
  try {
    await showStatus();
    let option = await prompt("want to commit(y/N)? ");
	  if (option === "y") {
		  await commit();
	  }
	  rl.close();
  } catch (e) {
	  rl.close();
	  return console.error(`exec error: ${e}`);
  }
})();
