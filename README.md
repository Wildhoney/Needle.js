Needle.js
============
<img src="https://travis-ci.org/Wildhoney/Needle.js.png?branch=master" />

Isolated concept of <a href="http://docs.angularjs.org/api/AUTO.$injector" target="_blank">Angular's $invoke</a> using <a href="http://en.wikipedia.org/wiki/Dependency_injection" target="_blank">dependency injection</a> using <a href="http://en.wikipedia.org/wiki/Reflection_(computer_programming)" target="_blank">reflection</a> for JavaScript constructors.

Usage
------------

```javascript
needle.registerInjector('decorator', Decorator);
var name = needle.invoke(NameService);
console.log(name.myMethod());
```