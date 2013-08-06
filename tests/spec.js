describe('Needle.js', function() {

    describe('Injector', function() {

        it('Can register injectors.', function() {
            needle.registerInjector('my-helper-class', {});
            needle.registerInjector('my-other-helper-class', {});
            expect(needle.getInjectors()['my-helper-class']).toBeDefined();
            expect(needle.getInjectors()['my-other-helper-class']).toBeDefined();
        });

    });

    describe('Invocation', function() {

        it('Can inject dependencies into a simple helper.', function() {
            needle.registerInjector('Example', function() {});
            var exampleInjector = needle.invoke(function($Example) { return $Example; });
            expect(exampleInjector).toBeDefined();
            expect(typeof exampleInjector).toEqual('function');
        });

        it('Can inject two dependencies into a simple helper.', function() {
            needle.registerInjector('Example', function() {});
            needle.registerInjector('OtherExample', function() {});
            var exampleInjector = needle.invoke(function($Example, $OtherExample) { return [$Example, $OtherExample]; });
            expect(exampleInjector[0]).toBeDefined();
            expect(typeof exampleInjector[0]).toEqual('function');
            expect(exampleInjector[1]).toBeDefined();
            expect(typeof exampleInjector[1]).toEqual('function');
        });

        it('Can inject dependencies into a commented helper.', function() {
            needle.registerInjector('Example', function() {});
            var exampleInjector = needle.invoke(function(/*Example Arg: */ $Example) { return $Example; });
            expect(exampleInjector).toBeDefined();
            expect(typeof exampleInjector).toEqual('function');
        });

        it('Can inject two dependencies into a commented helper.', function() {
            needle.registerInjector('Example', function() {});
            needle.registerInjector('OtherExample', function() {});
            var exampleInjector = needle.invoke(/* Mmmkay */ function(/*Example Arg: */ $Example/*After... */, /** Another comment...**/$OtherExample) { return [$Example, $OtherExample]; });
            expect(exampleInjector[0]).toBeDefined();
            expect(typeof exampleInjector[0]).toEqual('function');
            expect(exampleInjector[1]).toBeDefined();
            expect(typeof exampleInjector[1]).toEqual('function');
        });

    });

    describe('Inheritance', function() {

        it('Can correctly set the `__proto__` property.', function() {
            needle.registerInjector('HTTPModule', function() {});
            function Users($HTTPModule) { return $HTTPModule; }
            function People() {}
            Users.prototype = new People();
            var users = needle.invoke(Users);
            expect(typeof users.__proto__).toEqual('object');
            expect(users.__proto__ instanceof People).toBeTruthy();
        });

    });

    describe('Arguments', function() {

        it('Can provide a list of arguments to the constructor', function() {
            needle.registerInjector('HTTPModule', function() {});
            var Helper = function($HTTPModule) {
                return {
                    constructor: function constructor(firstName, surname) {
                        this._firstName = firstName;
                        this._surname = surname;
                    },
                    getArgs: function() {
                        return [this._firstName, this._surname];
                    }
                }
            };
            var helper = needle.invoke(Helper, 'Adam', 'Timberlake');
            expect(helper.getArgs()[0]).toEqual('Adam');
            expect(helper.getArgs()[1]).toEqual('Timberlake');
        });

    });

    describe('Prototype', function() {

        it('Can set the `invoke` method on `Function.prototype`', function() {
            expect(typeof function() {}.invoke).toEqual('undefined');
            needle.applyPrototypes();
            expect(typeof function() {}.invoke).toEqual('function');
        });

    });

});