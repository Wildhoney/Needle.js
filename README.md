Needle.js
============
<img src="https://travis-ci.org/Wildhoney/Needle.js.png?branch=master" />
&nbsp;
<img src="https://badge.fury.io/js/needle-js.png" />

Isolated concept of <a href="http://docs.angularjs.org/api/AUTO.$injector" target="_blank">Angular's $injector</a> using <a href="http://en.wikipedia.org/wiki/Dependency_injection" target="_blank">dependency injection</a> and <a href="http://en.wikipedia.org/wiki/Reflection_(computer_programming)" target="_blank">reflection</a> for JavaScript constructors.

Needle is <strong>perfect</strong> for testing because dependencies aren't hard-coded. You can easily create mocks of your object's dependencies and pass them in on instantiation.

Flow
------------

<img src="http://i.imgur.com/6BktN5T.png" alt="Needle.js Flow" />

 * Any `constructor` method on the <i>class</i> will be invoked, passing the args as individual args (not an array);
 * Any `prototype` property defined on the <i>class</i> will be instantiated and set to `__proto__` to configure the prototype chain;

Usage
------------

```javascript
needle.registerInjector('decorator', Decorator);
var name = needle.new(NameService);
console.log(name.myMethod());
```

In addition to the `needle.new` way, if you invoke `needle.applyPrototypes` then you will have access to the `new` method on each one of your functions. Therefore the following would be possible:

```javascript
needle.registerInjector('decorator', Decorator);
var name = NameService.new();
console.log(name.myMethod());
```

Steps
------------

 * Create your object, specifying its dependencies:

 ```javascript
 var Cats = function($dogs, $mice) { }
 ```

 * Create the two dependencies (`$dogs` and `$mice` -- the back-tick should be omitted when registering dependencies):

 ```javascript
 needle.registerInjection('dogs', function() {});
 needle.registerInjection('mice', function() {});
 ```

 * Instantiate the `Cats` object:

 ```javascript
 var cats = Cats.new();
 ```

 Voila! `cats` now has access to its dependencies -- `$dogs` and `$mice`!

Arguments
------------

If the `constructor` method exists on your invoked constructor, then Needle will automatically invoke that method for you upon instantiation. Any arguments which you supply to the `new` method will also be served to your constructor method as individual arguments:

```javascript
var NameService = function() {
    constructor: function(firstName, secondName, thirdName) { };
}
NameService.new('Bob', 'Jack', 'Alan');
```

Bundled Injectors
------------

Needle.js also provides a handful of bundled injectors which you can use straight away without even registering them! Libraries/frameworks that we support must be included before the loading of Needle.

<table>
    <tr>
        <th>Name</th>
        <th>Injector Reference</th>
    <tr>
        <td>jQuery</td>
        <td>$j</td>
    </tr>
    <tr>
        <td>Underscore</td>
        <td>$u</td>
    </tr>
</table>

Getting Started
------------

To install Needle.js you need <a href="http://gruntjs.com/">Grunt</a>: `npm install -g grunt`. You'll also need <a href="https://npmjs.org/">npm</a>.

Installing all of the Needle's dependencies is then quite simple: `npm install`.

Once you've installed the dependencies and Grunt you can:

 * Run all tests with `grunt test`;
 * Create a build with `grunt`;

Tests
------------

All tests are written in <a href="http://pivotal.github.io/jasmine/">Jasmine</a> and can be run with `grunt test`.