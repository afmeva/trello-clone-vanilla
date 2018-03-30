// -- PLUGINS --
var compileSass = require('broccoli-sass');
var mergeTrees = require('broccoli-merge-trees');

var sassDir = 'app/scss';
var styles = compileSass([sassDir], 'app.scss', 'app.css');

module.exports = mergeTrees([styles]);