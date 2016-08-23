namespace Services.Base {

    export interface IErrorModalService {

    }

    export class ErrorModalService implements IErrorModalService {
       
        private static modalInstance: ng.ui.bootstrap.IModalServiceInstance;
        //private static modal: ng.ui.bootstrap.IModalService;
        //public httpHandler: Services.Base.IHttpHanlder;

        //constructor(private modal: ng.ui.bootstrap.IModalService) {
        //    modal =
        //}

        public static addError($scope: ng.IScope,  $modal: ng.ui.bootstrap.IModalService) {

            this.modalInstance = $modal.open({
                templateUrl: 'Sources/Shared/Directives/Error/Error.html',
                scope: $scope,
                size: "sm"

            });
        }
        public static closeModalError() {
            this.modalInstance.close();
        }
    }
}