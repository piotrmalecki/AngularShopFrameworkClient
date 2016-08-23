var Controllers;
(function (Controllers) {
    var ItemsController = (function () {
        function ItemsController($scope, $state, itemService, $uibModal, growl, applicationInsightsService) {
            var _this = this;
            this.$scope = $scope;
            this.$state = $state;
            this.itemService = itemService;
            this.$uibModal = $uibModal;
            this.growl = growl;
            this.applicationInsightsService = applicationInsightsService;
            $scope.viewModel = this;
            applicationInsightsService.trackEvent('Items Controller', {}, { "get/items": 45 });
            itemService.getAll().then(function (result) {
                _this.items = result.Results;
                applicationInsightsService.trackEvent('Items Controller', {}, { "get/items": 90 });
                console.log(_this.items);
            });
        }
        ItemsController.prototype.search = function () {
            var _this = this;
            console.log("search");
            this.itemService.searchItems(this.searchValue).then(function (result) {
                _this.items = result.Results;
            });
        };
        ItemsController.prototype.addProduct = function (id) {
            var _this = this;
            var me = this;
            this.itemService.addItemsToCart(id).then(function (item) {
                _this.$scope.$emit('cartUpdated', 1);
                _this.growl.success("Product successfully added", {
                    title: "Cart Information"
                });
            }, function () {
                _this.growl.error("Error while product removal", {
                    title: "Cart Information"
                });
            });
        };
        ItemsController.prototype.goToShoppingCart = function () {
            //$("myModal").fadeOut();
            //this.closeModal();
            //var performanceValues = {
            //    shoppingCart: Array<Models.Performance.Performance>
            //};
            performance.mark("shoppingCartStart");
            // sessionStorage.setItem("shoppingCart", JSON.stringify(performanceValues));
            this.$state.go("shoppingCart");
        };
        ItemsController.prototype.openModal = function () {
            this.modalInstance = this.$uibModal.open({
                backdrop: 'static',
                templateUrl: 'Sources/Components/Items/ItemsModal.html',
                scope: this.$scope
            });
        };
        ItemsController.prototype.closeModal = function () {
            this.modalInstance.close();
        };
        return ItemsController;
    }());
    Controllers.ItemsController = ItemsController;
})(Controllers || (Controllers = {}));
//# sourceMappingURL=ItemsController.js.map