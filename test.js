var proxy = require('proxyquire');
var webwork = require('webworkify');
var fakework = require('fakeworkify');
var test = require('tape');

test(function (t) {
  var shouldBeFake = proxy('./', {
    'global/window': {}
  });
  var shouldBeWeb = proxy('./', {
    'global/window': { location: {} }
  });

  t.deepEqual(shouldBeWeb, webwork);
  t.deepEqual(shouldBeFake, fakework);
  t.end();
});
