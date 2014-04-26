requirejs.config({
    paths: {
        'text': '../lib/require/text',
        'durandal':'../lib/durandal/js',
        'plugins' : '../lib/durandal/js/plugins',
        'transitions' : '../lib/durandal/js/transitions',
        'knockout': '../lib/knockout/knockout-2.3.0',
        'bootstrap': '../lib/bootstrap/js/bootstrap',
        'jquery': '../lib/jquery/jquery-1.9.1',
        'knockout.validation': '../lib/knockout/knockout.validation',
        'jquery.utilities': '../lib/jquery/jquery.utilities',
        'toastr': '../lib/toastr'
    },
    shim: {
        'bootstrap': {
            deps: ['jquery'],
            exports: 'jQuery'
        },
        'knockout.validation': {
            deps: ['knockout']
        },
        'jquery.utilities': {
            dep: ['jquery']
        }
    }
});

define(['durandal/system', 'durandal/app', 'durandal/viewLocator', 'global/session', 'knockout', 'knockout.validation'], function (system, app, viewLocator,session,ko) {
    //>>excludeStart("build", true);
    system.debug(true);
    //>>excludeEnd("build");

    app.title = 'Buddy Beats';

    app.configurePlugins({
        router:true,
        dialog: true,
        widget: true
    });

    configureKnockout();


    app.start().then(function() {
        //Replace 'viewmodels' in the moduleId with 'views' to locate the view.
        //Look for partial views in a 'views' folder in the root.
        viewLocator.useConvention();

        //Show the app by setting the root view model for our application with a transition.
        app.setRoot('viewmodels/shell', 'entrance');
    });

    function configureKnockout() {
        ko.validation.init({
            insertMessages: true,
            decorateElement: true,
            errorElementClass: 'has-error',
            errorMessageClass: 'help-block'
        });

        if (!ko.utils.cloneNodes) {
            ko.utils.cloneNodes = function (nodesArray, shouldCleanNodes) {
                for (var i = 0, j = nodesArray.length, newNodesArray = []; i < j; i++) {
                    var clonedNode = nodesArray[i].cloneNode(true);
                    newNodesArray.push(shouldCleanNodes ? ko.cleanNode(clonedNode) : clonedNode);
                }
                return newNodesArray;
            };
        }

        ko.bindingHandlers.ifIsInRole = {
            init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                ko.utils.domData.set(element, '__ko_withIfBindingData', {});
                return { 'controlsDescendantBindings': true };
            },
            update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                var withIfData = ko.utils.domData.get(element, '__ko_withIfBindingData'),
                    dataValue = ko.utils.unwrapObservable(valueAccessor()),
                    shouldDisplay = session.userIsInRole(dataValue),
                    isFirstRender = !withIfData.savedNodes,
                    needsRefresh = isFirstRender || (shouldDisplay !== withIfData.didDisplayOnLastUpdate),
                    makeContextCallback = false;

                if (needsRefresh) {
                    if (isFirstRender) {
                        withIfData.savedNodes = ko.utils.cloneNodes(ko.virtualElements.childNodes(element), true /* shouldCleanNodes */);
                    }

                    if (shouldDisplay) {
                        if (!isFirstRender) {
                            ko.virtualElements.setDomNodeChildren(element, ko.utils.cloneNodes(withIfData.savedNodes));
                        }
                        ko.applyBindingsToDescendants(makeContextCallback ? makeContextCallback(bindingContext, dataValue) : bindingContext, element);
                    } else {
                        ko.virtualElements.emptyNode(element);
                    }

                    withIfData.didDisplayOnLastUpdate = shouldDisplay;
                }
            }
        };
    }

});