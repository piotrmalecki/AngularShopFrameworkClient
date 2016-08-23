namespace Controllers {

    export interface IHomePageControllerScope extends ng.IScope {
        viewModel: HomePageController;
    }

    export class HomePageController {

        private error: string;

        constructor(private $scope: IHomePageControllerScope, private $state: ng.ui.IStateService, private applicationInsightsService: any) {
            $scope.viewModel = this;
            applicationInsightsService.trackEvent('Home Page Controller');
        }

        //private getAppliationResult() {
        //    this.reservationService.getApplication(this.$state.params['storageOrderID']).then(
        //        (data) => {
        //            this.applicationResult = data;
        //        },
        //        (error) => {
        //            this.error = error;
        //        });
        //}
    }
}