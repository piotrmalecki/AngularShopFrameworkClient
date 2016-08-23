var Controllers;
(function (Controllers) {
    var HomePageController = (function () {
        function HomePageController($scope, $state, applicationInsightsService) {
            this.$scope = $scope;
            this.$state = $state;
            this.applicationInsightsService = applicationInsightsService;
            $scope.viewModel = this;
            applicationInsightsService.trackEvent('Home Page Controller');
        }
        return HomePageController;
    }());
    Controllers.HomePageController = HomePageController;
})(Controllers || (Controllers = {}));
//# sourceMappingURL=HomePageController.js.map