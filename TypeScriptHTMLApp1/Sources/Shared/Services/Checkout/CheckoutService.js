var Services;
(function (Services) {
    var Items;
    (function (Items) {
        var CheckoutService = (function () {
            function CheckoutService(HttpHandler) {
                this.httpHandler = HttpHandler;
            }
            return CheckoutService;
        }());
        Items.CheckoutService = CheckoutService;
    })(Items = Services.Items || (Services.Items = {}));
})(Services || (Services = {}));
//# sourceMappingURL=CheckoutService.js.map