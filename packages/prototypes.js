/**
 * @module Needle
 * @method applyPrototypes
 * Responsible for adding the `new` method into Function.prototype.
 * @return {void}
 */
Needle.prototype.applyPrototypes = function applyPrototypes() {

    // Determine if the `new` function on the `Function.prototype` already exists.
    // If it does we'll throw an exception.
    if (typeof Function.prototype.new !== 'undefined') {

        throw {
            name: "Already Defined",
            message: "Method `new` has already been defined on `Function.prototype`."
        };

    }

    /**
     * @method new
     * @param constructorArgs {Array}
     * Responsible for taking the function and invoking it with its arguments.
     */
    Function.prototype.new = function instantiate(constructorArgs) {
        return window.needle.new(this, Array.prototype.slice.call(arguments, 0));
    };

};