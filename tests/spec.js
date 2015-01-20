describe('Needle.js', function() {

    describe('Injector', function() {

        it('Should be able to register injectors;', function() {
            needle.registerInjector('my-helper-class', {});
            needle.registerInjector('my-other-helper-class', {});
            expect(needle.getInjectors()['my-helper-class']).toBeDefined();
            expect(needle.getInjectors()['my-other-helper-class']).toBeDefined();
        });

    });

    describe('Invocation', function() {

        it('Should be able to inject dependencies into a simple helper;', function() {
            needle.registerInjector('Example', function() {});
            var exampleInjector = needle.new(function($Example) { return $Example; });
            expect(exampleInjector).toBeDefined();
            expect(typeof exampleInjector).toEqual('function');
        });

        it('Should be able to inject two dependencies into a simple helper;', function() {
            needle.registerInjector('Example', function() {});
            needle.registerInjector('OtherExample', function() {});
            var exampleInjector = needle.new(function($Example, $OtherExample) { return [$Example, $OtherExample]; });
            expect(exampleInjector[0]).toBeDefined();
            expect(typeof exampleInjector[0]).toEqual('function');
            expect(exampleInjector[1]).toBeDefined();
            expect(typeof exampleInjector[1]).toEqual('function');
        });

        it('Should be able to inject dependencies into a commented helper;', function() {
            needle.registerInjector('Example', function() {});
            var exampleInjector = needle.new(function(/*Example Arg: */ $Example) { return $Example; });
            expect(exampleInjector).toBeDefined();
            expect(typeof exampleInjector).toEqual('function');
        });

        it('Should be able to inject two dependencies into a commented helper;', function() {
            needle.registerInjector('Example', function() {});
            needle.registerInjector('OtherExample', function() {});
            var exampleInjector = needle.new(/* Mmmkay */ function(/*Example Arg: */ $Example/*After... */, /** Another comment...**/$OtherExample) { return [$Example, $OtherExample]; });
            expect(exampleInjector[0]).toBeDefined();
            expect(typeof exampleInjector[0]).toEqual('function');
            expect(exampleInjector[1]).toBeDefined();
            expect(typeof exampleInjector[1]).toEqual('function');
        });

    });

    describe('Inheritance', function() {

        it('Should be able to correctly set the `__proto__` property;', function() {
            needle.registerInjector('HTTPModule', function() {});
            function Users($HTTPModule) { return $HTTPModule; }
            function People() {}
            Users.prototype = new People();
            var users = needle.new(Users);
            expect(typeof users.__proto__).toEqual('object');
            expect(users.__proto__ instanceof People).toBeTruthy();
        });

    });

    describe('Arguments', function() {

        it('Should be able to provide a list of arguments to the constructor', function() {
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
            var helper = needle.new(Helper, 'Adam', 'Timberlake');
            expect(helper.getArgs()[0]).toEqual('Adam');
            expect(helper.getArgs()[1]).toEqual('Timberlake');
        });

    });

    describe('Prototype', function() {

        it('Should be able to set the `new` method on `Function.prototype`', function() {
            expect(typeof function() {}.new).toEqual('undefined');
            needle.applyPrototypes();
            expect(typeof function() {}.new).toEqual('function');
        });

    });

});