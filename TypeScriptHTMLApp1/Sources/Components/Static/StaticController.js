var Controllers;
(function (Controllers) {
    var StaticController = (function () {
        function StaticController($scope, applicationInsightsService) {
            this.$scope = $scope;
            this.applicationInsightsService = applicationInsightsService;
            $scope.viewModel = this;
        }
        StaticController.$inject = []; //<-- Inject here
        return StaticController;
    }());
    Controllers.StaticController = StaticController;
})(Controllers || (Controllers = {}));
//# sourceMappingURL=StaticController.js.map