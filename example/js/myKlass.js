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
             * @property _name
             * @type {String}
             * @default ''
             * @private
             */
            _name: '',

            /**
             * @method constructor
             * @param name {String}
             * @return {void}
             */
            constructor: function constructor(name) {
                this._name = name;
            },

            /**
             * @method formatName
             * @return {String}
             */
            formatName: function formatName() {
                return $textDecorator.format(this._name);
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
             * @return {String}
             */
            format: function format(name) {
                return name.toUpperCase();
            }

        };

        // Register our injector with Needle.js.
        needle.registerInjector('textDecorator', textDecorator);

    })();

    // Invoke our class with its dependencies injected.
    var name = needle.invoke(NameKlass, 'Adam');
    console.log(name.formatName());

})(window.needle);