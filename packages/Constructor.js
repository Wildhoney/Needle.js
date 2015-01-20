/**
 * @module Needle
 * @constructor
 */
Needle = function init() {

    /**
     * @property _injectors
     * @type {Object}
     * @default {}
     * @private
     */
    this._injectors = {};

    /**
     * @method registerDefaultInjectors
     * @param $w {window}
     * Registers injectors when libraries are available.
     * @return {void}
     */
    (function registerDefaultInjectors($w) {

        // Bundle any injectors that are available.
        var bundledInjectors = [
            { label: 'j', ref: 'jQuery' },
            { label: 'u', ref: '_'}
        ];

        for (var index = 0, len = bundledInjectors.length; index < len; index++) {

            var injector = bundledInjectors[index];

            if (typeof $w[injector.ref] === 'undefined') {

                // We're unable to find this injector to register it as a default.
                continue;

            }

            // Otherwise we can happily register the injector.
            this.registerInjector(injector.label, $w[injector.ref]);

        }

    }.bind(this))(window);

};