// -- PLUGINS --
const merge = require('broccoli-merge-trees');
const compileSass = require('broccoli-sass-source-maps');
const funnel = require('broccoli-funnel');
const babel = require('broccoli-babel-transpiler');
const LiveReload = require('broccoli-livereload');

const appRoot = 'app';

const html = funnel(appRoot, {
    files : ['index.html'],
    destDir : '/'
  });

let js = funnel(appRoot, {
    files : ['main.js'],
    destDir : '/assets'
  });

js = babel(js, { 
    browserPolyfill: true,
    sourceMap: 'inline',
});

const css = compileSass(
  [appRoot],
  'scss/app.scss',
  'assets/app.css',
  {}
);

let tree = merge([html, js, css]);

tree = new LiveReload(tree, {
    target: 'index.html',
  });

module.exports = tree;