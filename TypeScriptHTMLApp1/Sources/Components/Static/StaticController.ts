namespace Controllers {

    export interface IStatciScope extends ng.IScope {
        viewModel: StaticController;
    }

    export class StaticController {
        static $inject = []; //<-- Inject here

        private cartQuantity: number;

        constructor(private $scope: IStatciScope, private applicationInsightsService: any) {
            $scope.viewModel = this;
           
        }

    }
}