/**
 * @module needle
 * @constructor
 */
window.Needle = function() {

    /**
     * @property _injectors
     * @type {Object}
     * @default {}
     * @private
     */
    this._injectors = {};

};

// Instantiate the Needle.js class.
window.needle = new window.Needle();