var Services;
(function (Services) {
    var Base;
    (function (Base) {
        var ErrorModalService = (function () {
            function ErrorModalService() {
            }
            //private static modal: ng.ui.bootstrap.IModalService;
            //public httpHandler: Services.Base.IHttpHanlder;
            //constructor(private modal: ng.ui.bootstrap.IModalService) {
            //    modal =
            //}
            ErrorModalService.addError = function ($scope, $modal) {
                this.modalInstance = $modal.open({
                    templateUrl: 'Sources/Shared/Directives/Error/Error.html',
                    scope: $scope,
                    size: "sm"
                });
            };
            ErrorModalService.closeModalError = function () {
                this.modalInstance.close();
            };
            return ErrorModalService;
        }());
        Base.ErrorModalService = ErrorModalService;
    })(Base = Services.Base || (Services.Base = {}));
})(Services || (Services = {}));
//# sourceMappingURL=ErrorModalService.js.map