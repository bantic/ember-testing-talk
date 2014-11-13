QUnit.module('all the things');
import {
  test
} from 'ember-qunit';

var testName = 'it tests all the things';
for (var i = 0; i < 100; i++) {
  testName = ' . . ' + testName;
  /*jshint:ignore loopfunc */
  test(testName, function(){
    ok(true);
    stop();
    setTimeout(start, 100);
  });
}
