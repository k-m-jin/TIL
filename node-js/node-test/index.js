// require()
// module.exports
const fs = require('fs')

if (!fs.existsSync(`${__dirname}/test`)) {
  fs.mkdirSync(`${__dirname}/test`)
  if (!fs.existsSync(`${__dirname}/test/abc.json`)) {
    fs.writeFileSync(`${__dirname}/test/abc.json`, '{"a":1}')
  }
}

// async ()=>{
//   await fs.promises.mkdir(`${__dirname}/test`)
//   await fs.promises.writeFile(`${__dirname}/test/abc.json`, '{"a":1}')
// }

const file = fs.readFileSync(`${__dirname}/test/abc.json`, { encoding: 'utf8' })
console.log(file)
