/**
 * @module Needle
 * @method invoke
 * @param klass {Object,String}
 * @param constructorArgs {Array}
 * Responsible for instantiating a new object, injecting any required dependencies.
 * @return {void}
 */
window.Needle.prototype.invoke = function(klass, constructorArgs) {

    // Transform the function's definition into a string so that we can parse its dependencies.
    var functionDefinition      = klass.toString().trim();

    // Find the section of the defined function where the arguments are specified.
    var declarationExtractor    = new RegExp('^function [^{]+', 'ig'),
        declaration             = functionDefinition.match(declarationExtractor)[0].trim();

    // Find the dependencies from the function's arguments.
    var extractor       = new RegExp('(\\$[a-z0-9_]+)', 'ig'),
        dependencies    = declaration.match(extractor),
        dependencyArgs  = [];

    // Iterate over each defined dependency.
    for (var dependency in dependencies) {

        if (!dependencies.hasOwnProperty(dependency)) {
            // The usual suspect...
            continue;
        }

        // Find the name from the dependency, and then locate the relevant injector.
        var name        = dependencies[dependency].replace(/\$/, ''),
            injector    = this._injectors[name];

        // Perform a check to ensure that the injector has been registered.
        if (typeof injector === 'undefined') {
            continue;
        }

        // Otherwise we have the injector, so we can append it to the eventual arguments.
        dependencyArgs.push(injector);

    }

    // Now that we have the dependencies for the class, we can instantiate the object
    // passing in the arguments where necessary.
    var instance = klass.apply(null, dependencyArgs);

    if (typeof instance.constructor === 'function') {
        // Invoke the function's `constructor` method if it exists.
        instance.constructor.call(instance, constructorArgs);
    }

    return instance;

};