const Funnel = require('broccoli-funnel')
const esTranspiler = require('broccoli-babel-transpiler')
const mergeTrees = require('broccoli-merge-trees')

const tree = new Funnel('app', {
  destDir: ''
})

module.exports =  tree;
