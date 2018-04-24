module.exports = (function store() {
  'use strict';

  function nope() { /* Fallback for when no store is supported */ }

  try {
    sessionStorage.setItem('foo', 'bar');
    if (sessionStorage.getItem('foo') !== 'bar') throw 1;
    sessionStorage.removeItem('foo');
  } catch (e) {
    var objstorage = require('objstorage')
      , storage = require('window.name')
      , koekje = require('koekje');

    return storage.supported ? storage : (koekje.supported ? koekje : objstorage);
  }

  return sessionStorage;
}());
