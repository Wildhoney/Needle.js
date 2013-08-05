Needle.js
============
<img src="https://travis-ci.org/Wildhoney/Needle.js.png?branch=master" />

Isolated concept of <a href="http://docs.angularjs.org/api/AUTO.$injector" target="_blank">Angular's $invoke</a> using <a href="http://en.wikipedia.org/wiki/Dependency_injection" target="_blank">dependency injection</a> and <a href="http://en.wikipedia.org/wiki/Reflection_(computer_programming)" target="_blank">reflection</a> for JavaScript constructors.

<img src="http://iconbug.com/data/91/256/c4e9a2d4c146770b45da77bdf0152db3.png" />

Usage
------------

```javascript
needle.registerInjector('decorator', Decorator);
var name = needle.invoke(NameService);
console.log(name.myMethod());
```

In addition to the `needle.invoke` way, if you invoke `needle.applyPrototypes` then you will have access to the `invoke` method on each one of your functions. Therefore the following would be possible:

```javascript
needle.registerInjector('decorator', Decorator);
var name = NameService.invoke();
console.log(name.myMethod());
```

Arguments
------------

If the `constructor` method exists on your invoked constructor, then Needle will automatically invoke that method for you upon instantiation. Any arguments which you supply to the `invoke` method will also be served to your constructor method as individual arguments:

```javascript
var NameService = function() {
    constructor: function(firstName, secondName, thirdName) { };
}
NameService.invoke('Bob', 'Jack', 'Alan');
```

Getting Started
------------

To install Needle.js you need <a href="http://gruntjs.com/">Grunt</a>: `npm install -g grunt`. You'll also need <a href="https://npmjs.org/">npm</a>.

Installing all of the Needle's dependencies is then quite simple: `npm install`.

Once you've installed the dependencies and Grunt you can:

 * Run all tests with `grunt tests`;
 * Create a build with `grunt`;

Tests
------------

All tests are written in <a href="http://pivotal.github.io/jasmine/">Jasmine</a> and can be run with `grunt tests`.