/**
 * @module Needle
 * @method registerInjector
 * @param label {String}
 * @param klass {Object,String}
 * Responsible for registering an injector.
 * @return {void}
 */
window.Needle.prototype.registerInjector = function(label, klass) {

    this._injectors[label] = klass;

};