describe('sessionStorage', function () {
  'use strict';

  var assume = require('assume')
    , sessionStorage = require('./');

  it('is exported as object', function () {
    assume(sessionStorage).is.a('object');
  });

  it('as the API methods', function () {
    assume(sessionStorage.getItem).is.a('function');
    assume(sessionStorage.setItem).is.a('function');
    assume(sessionStorage.removeItem).is.a('function');
    assume(sessionStorage.clear).is.a('function');
    assume(sessionStorage.length).is.a('number');
  });

  it('works as intended', function () {
    sessionStorage.setItem('foo', 'bar');
    assume(sessionStorage.length).equals(1);
    assume(sessionStorage.getItem('foo')).equals('bar');

    sessionStorage.setItem('hello', 'world');
    assume(sessionStorage.length).equals(2);
    assume(sessionStorage.getItem('hello')).equals('world');

    sessionStorage.removeItem('hello');
    assume(sessionStorage.length).equals(1);
    assume(sessionStorage.getItem('hello')).is.a('null');
    assume(sessionStorage.getItem('foo')).equals('bar');

    sessionStorage.clear();
    assume(sessionStorage.length).equals(0);
  });
});
