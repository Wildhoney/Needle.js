/**
 * @module Needle
 * @method applyPrototypes
 * Responsible for adding the `invoke` method into Function.prototype.
 * @return {void}
 */
window.Needle.prototype.applyPrototypes = function applyPrototypes() {

    /**
     * @method invoke
     * @param constructorArgs {Array}
     * Responsible for taking the function and invoking it with its arguments.
     */
    Function.prototype.invoke = function invoke(constructorArgs) {
        return window.needle.invoke(this, Array.prototype.slice.call(arguments, 0));
    };

};