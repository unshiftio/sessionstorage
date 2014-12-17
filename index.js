module.exports = (function store() {
  'use strict';

  try {
    sessionStorage.setItem('foo', 'bar');
    if (sessionStorage.getItem('foo') !== 'bar') throw 1;
  } catch (e) {
    var storage = require('window.name')
      , koekje = require('koekje');

    function nope() { /* Fallback for when no store is supported */ }

    return storage.support ? storage : (koekje.supported ? koekje : {
      length: 0,
      getItem: nope, setItem: nope, removeItem: nope, clear: nope
    });
  }

  return sessionStorage;
}());
