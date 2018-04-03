const funnel = require('broccoli-funnel')
const html = funnel('app', {
  files: ['index.html'],
  destDir: '/'
})

const Rollup = require('broccoli-rollup')
let js = new Rollup('app', {
  rollup: {
    input: 'app.js',
    output: {
      file: 'app.js',
      format: 'es',
    }
  }
})

var compileSass = require('broccoli-sass')
const css = compileSass(
  ['app'],
  '/app.scss',
  '/app.css'
)

const mergeTrees = require('broccoli-merge-trees')
const tree = mergeTrees([html, js, css])

const LiveReload = require('broccoli-livereload')
const isAlive = new LiveReload(tree, {
  target: 'index.html'
})

module.exports = isAlive