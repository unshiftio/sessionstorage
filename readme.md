sessionstorage

Made by unshiftVersion npmBuild StatusDependenciesCoverage StatusIRC channel

The sessionStorage API is amazing and super useful when you need to store data temporarily in the browser. We used to abuse cookies for this, but not all the data that you want to store needs to be synced with the server. The sessionStorage API filled that gap, but unfortunately we cannot expect this API to be available and enabled in every browser context. This module provides various of fallbacks which follow the same API as sessionStorage for when it's not enabled. The following fallback's are supported:

window.name - Storing data in the name property of the window.
cookies - This doesn't really need an explanation.
Install

It's build for browserify but it should work with Node.js as well as we provide a fallback API. The module is released in the public npm registry and can be installed using:

npm install --save sessionstorage
Usage

The API is exactly the same as the DOM storage API so you can use the following methods:

getItem(key)
setItem(key, value)
removeItem(key)
clear()
So all you need to do is require the module and you're ready to go:

'use strict';

var sessionstorage = require('sessionstorage');
