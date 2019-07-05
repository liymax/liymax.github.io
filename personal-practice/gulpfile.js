const fs = require('fs')
const path = require('path')
const util = require('util')
const { exec } = require('child_process')
const asyncExec = util.promisify(exec)
const gulp = require('gulp')
const archiver = require('archiver')

const { version } = require('./package.json')

function newVersion () {
  return version.split('.').map((e, idx) => {
    return idx === 2 ? (e * 1 + 1) : e
  }).join('.')
}

function updateVersion () {
  const newVer = newVersion()
  const cmd = `yarn version --new-version ${newVer}`
  return asyncExec(cmd)
}

function getEnvSet (options = {}) {
  return Object.entries(options).reduce((rst, item) => {
    const [key, val] = item
    rst += `set ${key}=${val} & `
    return rst
  }, '')
}

async function build () {
  const envSet = getEnvSet({ WALL: 'Hello' })
  const cmd = `${envSet}yarn build`
  // console.log('cmd:', cmd)
  const { stdout, stderr } = await asyncExec(cmd.trim())
  console.log(stdout, stderr)
}

function packZip (done) {
  const newVer = newVersion()
  const output = fs.createWriteStream(path.resolve(__dirname) + `/release/bop-${newVer}.zip`)
  const archive = archiver('zip', { zlib: { level: 9 } })

  output.on('close', function () {
    console.log(archive.pointer() + ' total bytes, finished!')
    done()
  })
  archive.on('error', function (err) {
    throw err
  })
  archive.pipe(output)
  archive.directory('dist/', '', (data) => data)
  archive.finalize()
}

exports.default = gulp.series(updateVersion, build, packZip)
