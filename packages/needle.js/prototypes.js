/**
 * @module Needle
 * @method applyPrototypes
 * Responsible for adding the `invoke` method into Function.prototype.
 * @return {void}
 */
window.Needle.prototype.applyPrototypes = function applyPrototypes() {

    // Determine if the `invoke` function on the `Function.prototype` already exists.
    // If it does we'll throw an exception.
    if (typeof Function.prototype.invoke !== 'undefined') {

        throw {
            name: "Already Defined",
            message: "Method `invoke` has already been defined on `Function.prototype`."
        };

    }

    /**
     * @method invoke
     * @param constructorArgs {Array}
     * Responsible for taking the function and invoking it with its arguments.
     */
    Function.prototype.invoke = function invoke(constructorArgs) {
        return window.needle.invoke(this, Array.prototype.slice.call(arguments, 0));
    };

};