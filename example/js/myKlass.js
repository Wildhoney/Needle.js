/**
 * @method Main
 * @param needle {Object}
 * @return {void}
 */
(function Main(needle) {

    /**
     * @method NameKlass
     * @param $textDecorator {Object}
     * @return {Object}
     * @constructor
     */
    var NameKlass = function NameKlass($textDecorator) {

        return {

            /**
             * @method formatName
             * @param name {String}
             * @returns {String}
             */
            formatName: function formatName(name) {
                return $textDecorator.format(name);
            }

        };

    };

    /**
     * @method Decorator
     * Wrap the decorator in a closure to prove that the `NameKlass` isn't getting the
     * decorator from the scope.
     * @return {void}
     */
    (function Decorator() {

        /**
         * @property textDecorator
         * @type {Object}
         */
        var textDecorator = {

            /**
             * @method format
             * @param name
             * @returns {String}
             */
            format: function format(name) {
                return name.toUpperCase();
            }

        };

        // Register our injector with Needle.js.
        needle.registerInjector('textDecorator', textDecorator);

    })();

    // Invoke our class with its dependencies injected.
    var name = needle.invoke(NameKlass);
    console.log(name.formatName('Adam'));

})(window.needle);