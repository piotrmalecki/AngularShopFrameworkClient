var Controllers;
(function (Controllers) {
    var BaseController = (function () {
        function BaseController($scope, applicationInsightsService) {
            this.$scope = $scope;
            this.applicationInsightsService = applicationInsightsService;
            $scope.viewModel = this;
            // Initial cart qunatity value
            applicationInsightsService.trackEvent('An amazing Event happened');
            this.cartQuantity = 0;
            // Catch global "cartUpdated" event and update the view
            $scope.$on('cartUpdated', function (event, newQuantity) {
                $scope.viewModel.cartQuantity += newQuantity;
            });
            $scope.$on('cartRemoved', function (event, newQuantity) {
                $scope.viewModel.cartQuantity = newQuantity;
            });
        }
        BaseController.$inject = []; //<-- Inject here
        return BaseController;
    }());
    Controllers.BaseController = BaseController;
})(Controllers || (Controllers = {}));
//# sourceMappingURL=BaseController.js.map