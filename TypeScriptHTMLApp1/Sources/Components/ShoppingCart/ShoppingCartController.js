var Controllers;
(function (Controllers) {
    var ShoppingCartController = (function () {
        function ShoppingCartController($scope, $state, itemService, growl, applicationInsightsService) {
            var _this = this;
            this.$scope = $scope;
            this.$state = $state;
            this.itemService = itemService;
            this.growl = growl;
            this.applicationInsightsService = applicationInsightsService;
            $scope.viewModel = this;
            this.isEmpty = false;
            applicationInsightsService.trackEvent('ShoppingCart Controller');
            console.log("ShoppingCartController");
            itemService.getAllFromSessionId()
                .then(function (item) {
                _this.cart = item;
                if (_.isEmpty(_this.cart)) {
                    _this.isEmpty = true;
                }
                performance.mark("shoppingCartEnd");
                performance.measure("shoppingCartLoading", "shoppingCartStart", "shoppingCartEnd");
                //var tmpArray: Array<any> = JSON.parse(sessionStorage.getItem("shoppingCartLoadingArray"));
                //if (_.isEmpty(tmpArray)) {
                //    tmpArray = new Array<any>();
                //    tmpArray.push(performance.getEntriesByName("shoppingCartLoading", "measure"));
                //} else {
                //    tmpArray.push(performance.getEntriesByName("shoppingCartLoading", "measure"));
                //}
                sessionStorage.setItem("shoppingCartLoadingArray", performance.getEntriesByName("shoppingCartLoading", "measure"));
                console.log(_this.cart);
            }, function (error) {
                _this.error = error,
                    console.log("Error + " + error);
            });
            //angular.element(document).ready(function () {
            //    performance.mark("domElementsLoadedEnd");
            //    performance.measure("shoppingCartLoading", "shoppingCartEnd", "domElementsLoadedEnd");
            //    sessionStorage.setItem("domElementsLoadedArray", performance.getEntriesByName("shoppingCartLoading", "measure"));
            //    console.log('page loading completed');
            //});
        }
        ShoppingCartController.prototype.remove = function (id) {
            var _this = this;
            var me = this;
            this.itemService.removeItemFromCart(id).then(function () {
                //removed success
                console.log(me.cart);
                _.remove(me.cart, function (item) { return item.ItemId == id; });
                _this.$scope.$emit('cartRemoved', me.cart.length);
                if (_.isEmpty(_this.cart)) {
                    _this.isEmpty = true;
                }
                _this.growl.info("Product successfully removed", {
                    title: "Cart Information"
                });
            }, function () {
                _this.growl.error("Error while product removal", {
                    title: "Cart Information"
                });
            });
        };
        ShoppingCartController.prototype.countTotal = function () {
            var total = 0;
            _.forEach(this.cart, function (item) {
                total += +item.Item.Price * +item.Count;
            });
            return total;
        };
        return ShoppingCartController;
    }());
    Controllers.ShoppingCartController = ShoppingCartController;
})(Controllers || (Controllers = {}));
//# sourceMappingURL=ShoppingCartController.js.map