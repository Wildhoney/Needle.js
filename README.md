Needle.js
============

Isolated concept of <a href="http://docs.angularjs.org/api/AUTO.$injector" target="_blank">Angular's $invoke</a>.

Usage
------------

```javascript
needle.registerInjector('decorator', Decorator);
var name = needle.invoke(NameService);
console.log(name.myMethod());
```