/**
 * @module needle
 * @method invoke
 * @param klass {Object,String}
 * Responsible for instantiating a new object, injecting any required dependencies.
 * @return {void}
 */
window.Needle.prototype.invoke = function(klass) {

    // Find the dependencies from the object's definition.
    var extractor       = new RegExp('(\\$[a-z0-9_]+)', 'ig'),
        dependencies    = klass.toString().match(extractor),
        args            = [];

    for (var dependency in dependencies) {

        if (!dependencies.hasOwnProperty(dependency)) {
            continue;
        }

        // Find the name from the dependency, and then locate the relevant injector.
        var name        = dependencies[dependency].replace(/$/, ''),
            injector    = this._injectors[name];

        // Perform a check to ensure that the injector has been registered.
        if (typeof injector === 'undefined') {

            // If it hasn't then we'll throw an error to let the developer know.
            console.error('Injector has not been registered: ' + name);
            continue;

        }

        // Otherwise we have the injector, so we can append it to the eventual arguments.
        args.push(injector);

    }

    // Now that we have the dependencies for the class, we can instantiate the object
    // passing in the arguments where necessary.
    return klass.apply(null, args);

};