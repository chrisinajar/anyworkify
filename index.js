var window = require('global/window');

if (window.location) {
  module.exports = require('webworkify');
} else {
  module.exports = require('fakeworkify');
}
