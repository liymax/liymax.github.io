const util = require("util");
const { exec } = require("child_process");
const asyncExec = util.promisify(exec);

async function showStatus() {
  let cmd = `git status`;
  const { stdout, stderr } = await asyncExec(cmd);
  console.log(`STATUS: ${stdout}`);
  if (stderr) console.error(`stderr: ${stderr}`);
}

async function commit() {
  let time = new Date().toISOString();
  let cmd = `git commit -a -m "time:${time.slice(0, -5)},fix"`;
  const { stdout, stderr } = await asyncExec(cmd);
  console.log(`COMMIT: ${stdout}`);
  if (stderr) console.error(`stderr: ${stderr}`);
}

(async function() {
  try {
    await showStatus();
    await commit();
  } catch (e) {
    if (e) {
      return console.error(`exec error: ${e}`);
    }
  }
})();
