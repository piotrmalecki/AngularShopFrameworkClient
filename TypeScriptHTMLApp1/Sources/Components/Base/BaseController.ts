namespace Controllers {

    export interface IBaseScope extends ng.IScope {
        viewModel: BaseController;
    }

    export class BaseController {
        static $inject = []; //<-- Inject here

        private cartQuantity: number;

        constructor(private $scope: IBaseScope, private applicationInsightsService: any) {
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

    }
}