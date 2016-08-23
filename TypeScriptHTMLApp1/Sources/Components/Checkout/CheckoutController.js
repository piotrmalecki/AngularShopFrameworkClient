var Controllers;
(function (Controllers) {
    var CheckoutController = (function () {
        function CheckoutController($scope, $state, itemService, growl, applicationInsightsService) {
            this.$scope = $scope;
            this.$state = $state;
            this.itemService = itemService;
            this.growl = growl;
            this.applicationInsightsService = applicationInsightsService;
            $scope.viewModel = this;
            applicationInsightsService.trackEvent('Checkout Controller');
            this.order = new Models.Order.Order();
            this.order.FirstName = "Piotr";
            this.order.LastName = "Malecki";
            this.order.Country = "Poland";
            this.order.Address = "100 Washington St";
            this.order.City = "New York";
            this.order.Email = "p@gmail.com";
            this.order.Phone = "6546546545";
            this.order.PostalCode = "6548";
            this.order.SaveInfo = true;
            this.order.State = "New York";
            this.order.Experation = new Date();
            this.order.Username = "pmalecki";
        }
        CheckoutController.prototype.submit = function () {
            var _this = this;
            console.log("submit");
            performance.mark("checkoutStart");
            this.itemService.postOrder(this.order).then(function (result) {
                _this.isSuccessful = true;
                performance.mark("checkoutEnd");
                performance.measure("checkoutLoading", "checkoutStart", "checkoutEnd");
                _this.growl.success("Order successfully posted", {
                    title: "Order Information"
                });
            }, function () {
                _this.growl.error("Error while posting", {
                    title: "Order Information"
                });
            });
        };
        return CheckoutController;
    }());
    Controllers.CheckoutController = CheckoutController;
})(Controllers || (Controllers = {}));
//# sourceMappingURL=CheckoutController.js.map