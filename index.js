module.exports = (function store() {
  'use strict';

  function nope() { /* Fallback for when no store is supported */ }

  try {
    return sessionStorage;
  } catch (e) {
    var storage = require('window.name')
      , koekje = require('koekje');

    return storage.supported ? storage : (koekje.supported ? koekje : {
      length: 0,
      getItem: nope, setItem: nope, removeItem: nope, clear: nope
    });
  }
}());
