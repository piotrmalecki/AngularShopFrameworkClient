var App;
(function (App) {
    var app = angular.module("ShopFramework", [
        "ui.bootstrap",
        "ui.router",
        "ui.checkbox",
        "angular-growl",
        "ApplicationInsightsModule"
    ]);
    // Routes
    app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 'applicationInsightsServiceProvider', function ($stateProvider, $urlRouterProvider, $locationProvider, applicationInsightsServiceProvider) {
            var options = {
                // applicationName: used as a 'friendly name' prefix to url paths
                // ex: myAmazingapp/mainView
                applicationName: 'amazingApp',
                // autoPageViewTracking: enables the sending a event to Application Insights when 
                // ever the $locationChangeSuccess event is fired on the rootScope
                autoPageViewTracking: true,
                // autoLogTracking: enables the interception of calls to the $log service and have the trace 
                // data sent to Application Insights.
                autoLogTracking: true,
                // autoExceptionTracking: enables calls to the $exceptionHandler service, usually unhandled exceptions, to have the error and stack data sent to Application Insights.
                autoExceptionTracking: true,
                // sessionInactivityTimeout: The time (in milliseconds) that a user session can be inactive, before a new session will be created (on the next api call). Default is 30mins.
                sessionInactivityTimeout: 1800000
            };
            applicationInsightsServiceProvider.configure('39be1f73-025a-4d76-aab6-08683919a870', options);
            // HTML5 Push State
            //$locationProvider.html5Mode(true);
            // Default url
            $urlRouterProvider.otherwise("/");
            $stateProvider
                .state('homepage', {
                url: '/',
                templateUrl: 'Sources/Components/HomePage/HomePage.html',
                controller: "HomePageController"
            })
                .state('items', {
                url: '/items',
                templateUrl: 'Sources/Components/Items/Items.html',
                controller: "ItemsController"
            })
                .state('about', {
                url: '/about',
                templateUrl: 'Sources/Components/Static/About.html',
                controller: "StaticController"
            })
                .state('contact', {
                url: '/contact',
                templateUrl: 'Sources/Components/Static/Contact.html',
                controller: "StaticController"
            })
                .state('shoppingCart', {
                url: '/shoppingCart',
                templateUrl: 'Sources/Components/ShoppingCart/ShoppingCart.html',
                controller: "ShoppingCartController"
            })
                .state('checkout', {
                url: '/checkout',
                templateUrl: 'Sources/Components/Checkout/Checkout.html',
                controller: "CheckoutController"
            })
                .state('complete', {
                url: '/complete',
                templateUrl: 'Sources/Components/Checkout/Checkout.html',
                controller: "CheckoutController"
            });
            // Mobile detection
        }]);
    // Growl config
    app.config(['growlProvider', function (growlProvider) {
            growlProvider.globalTimeToLive(5000).globalDisableIcons(true).globalDisableCountDown(true);
        }]);
    app.config([
        "$httpProvider",
        function ($httpProvider) {
            //$httpProvider.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
        }
    ]);
    //error global handler
    //app.config(['$provide', ($provide) => {
    //    $provide.decorator('$exceptionHandler', ['$delegate', '$injector', function ($delegate: ng.IExceptionHandlerService, $injector) {
    //        var localExceptionHandler: Services.Base.ExceptionHandlerService = new Services.Base.ExceptionHandlerService($delegate);
    //        return localExceptionHandler.exception;
    //    }]);
    //    $provide.decorator('$uiViewScroll', function ($delegate) {
    //        return function (uiViewElement) {
    //            // Scroll to the top on page change
    //            window.scrollTo(0, 0);
    //        };
    //    });
    //}]);
    // Application start
    //app.run(['NotificationService', function (NotificationService) {
    //    var promise = NotificationService.getNotifications(
    //        (data, header) => {
    //            Services.Base.SessionStorageHelper.setObjectInLocalStorage(App.Config.Notification, data);
    //            console.log("Notification" + data);
    //        }, null);
    //    return promise;
    //}]);
    // Controllers
    app.controller("BaseController", ["$scope", "applicationInsightsService", function ($scope, applicationInsightsService) { return new Controllers.BaseController($scope, applicationInsightsService); }]);
    app.controller("StaticController", ["$scope", "applicationInsightsService", function ($scope, applicationInsightsService) { return new Controllers.StaticController($scope, applicationInsightsService); }]);
    app.controller("HomePageController", ["$scope", "$state", "applicationInsightsService", function ($scope, $state, applicationInsightsService) { return new Controllers.HomePageController($scope, $state, applicationInsightsService); }]);
    app.controller("ItemsController", ["$scope", "$state", "ItemService", "$uibModal", "growl", "applicationInsightsService", function ($scope, $state, ItemService, $uibModal, growl, applicationInsightsService) { return new Controllers.ItemsController($scope, $state, ItemService, $uibModal, growl, applicationInsightsService); }]);
    app.controller("ShoppingCartController", ["$scope", "$state", "ItemService", "growl", "applicationInsightsService", function ($scope, $state, ItemService, growl, applicationInsightsService) { return new Controllers.ShoppingCartController($scope, $state, ItemService, growl, applicationInsightsService); }]);
    app.controller("CheckoutController", ["$scope", "$state", "ItemService", "growl", "applicationInsightsService", function ($scope, $state, ItemService, growl, applicationInsightsService) { return new Controllers.CheckoutController($scope, $state, ItemService, growl, applicationInsightsService); }]);
    // Services
    app.factory("HttpHandler", ["$http", function ($http) { return new Services.Base.HttpHandler($http); }]);
    app.factory("ItemService", ["HttpHandler", function (HttpHandler) { return new Services.Items.ItemService(HttpHandler); }]);
    app.directive('elem', Directives.ElemReady.Factory());
    app.filter('priceOption', Filters.priceOption);
    app.filter('tel', Filters.tel);
})(App || (App = {}));
//# sourceMappingURL=app.js.map