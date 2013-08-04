/**
 * @method Main
 * @param needle {Object}
 * @return {void}
 */
window.Main = (function Main(needle) {

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
     * @property prototype
     * @type {Object}
     */
    NameKlass.prototype = {

        /**
         * @method getName
         * @return {String}
         */
        getName: function getName() {
            return this._name;
        }

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

    /**
     * @method logAndInsertIntoDOM
     * @param message {String}
     * For debugging purposes ONLY.
     * @return {void}
     */
    var logAndInsertIntoDOM = function logAndInsertIntoDOM(message) {

        var ul = document.querySelector('ul'),
            li = document.createElement('li');

        li.innerHTML = message;
        ul.appendChild(li);
        console.log(message);
    };

    // Apply `Function.prototype.invoke`.
    needle.applyPrototypes();

    // Invoke our class with its dependencies injected.
//    var name = needle.invoke(NameKlass, 'Adam');
    var name = NameKlass.invoke('Adam');

    logAndInsertIntoDOM('Using Injector: ' + name.formatName());
    logAndInsertIntoDOM('Using Prototype: ' + name.getName());

});

document.addEventListener('DOMContentLoaded', function DOMContentLoaded() {
    window.Main(window.needle);
}, false);