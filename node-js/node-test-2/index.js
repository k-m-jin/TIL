const fs = require('fs')
const marked = require('marked')
//얌 파일 분석
const yaml = require('js-yaml')
// 가상으로 돔을 만들어주는 패키지
const jsdom = require('jsdom')
const { JSDOM } = jsdom

const mdDir = `${__dirname}/markdowns`
const htmlDir = `${__dirname}/dist`
const indexHTML = fs.readFileSync(`${__dirname}/index.html`, { encoding: 'utf8' })

if (fs.existsSync(htmlDir)) {
  fs.rmdirSync(htmlDir, { recursive: true })
}
fs.mkdirSync(htmlDir)

const mds = fs.readdirSync(mdDir)
// md => ['abc.md' ,'xyz.md']
mds.forEach((file) => {
  let md = fs.readFileSync(`${mdDir}/${file}`, { encoding: 'utf8' })
  const headers = getHeaders(md)
  md = removeHeaders(md, headers)
  const { title } = yaml.load(headers)
  const dom = new JSDOM(indexHTML)

  const html = marked.parse(md)
  dom.window.document.querySelector('title').innerHTML = title
  dom.window.document.body.innerHTML = html
  //위와 같음
  // const data = indexHtml.replace('<body>', `${html}</body>`)

  const filename = file.replace('.md', '')
  fs.mkdirSync(`${htmlDir}/${filename}`)
  // fs.writeFileSync(경로, 데이터)
  fs.writeFileSync(`${htmlDir}/${filename}/index.html`, dom.serialize())
})

function getHeaders(md) {
  return md.split('---').filter((s) => s)[0]
}
function removeHeaders(md, headers) {
  return md.replace('---' + headers + '---', '')
}
