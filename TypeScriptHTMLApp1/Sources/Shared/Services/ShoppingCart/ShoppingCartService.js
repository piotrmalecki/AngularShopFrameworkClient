var Services;
(function (Services) {
    var Items;
    (function (Items) {
        var ShoppingCartService = (function () {
            function ShoppingCartService(HttpHandler) {
                this.httpHandler = HttpHandler;
            }
            ShoppingCartService.prototype.deleteTtemsToCart = function (sessionKey, itemId) {
                return this.httpHandler.Delete(App.Config.ApiUrl + "carts/" + sessionKey + "/" + itemId + "/add", null).then(function (result) { return result.data; });
            };
            return ShoppingCartService;
        }());
        Items.ShoppingCartService = ShoppingCartService;
    })(Items = Services.Items || (Services.Items = {}));
})(Services || (Services = {}));
//# sourceMappingURL=ShoppingCartService.js.map