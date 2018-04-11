const funnel = require('broccoli-funnel')
const html = funnel('app', {
  files: ['index.html'],
  destDir: '/'
})

const Rollup = require('broccoli-rollup')
const alias = require('rollup-plugin-alias')
//paths
const path = require('path');
const rootPath = process.cwd()
const _core = path.resolve(rootPath, 'app/core');
const _components = path.resolve(rootPath, 'app/components');
const _reducers = path.resolve(rootPath, 'app/reducers');

let js = new Rollup('app', {
  rollup: {
    input: 'app.js',
    output: {
      file: 'app.js',
      format: 'iife',
      sourcemap: 'inline',
      globals: {
        firebase: 'firebase',
      }
    },
    external: [
      'firebase'
    ],
    plugins: [
      alias({
        _core,
        _components,
        _reducers,
      })
    ],
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