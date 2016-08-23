var Services;
(function (Services) {
    var Items;
    (function (Items) {
        var ItemService = (function () {
            function ItemService(HttpHandler) {
                this.httpHandler = HttpHandler;
            }
            ItemService.prototype.searchItems = function (search) {
                var param = {
                    Search: search
                };
                console.log(search);
                return this.httpHandler.Post(App.Config.ApiUrl + "items", param).then(function (result) { return result.data; });
            };
            ItemService.prototype.getAll = function () {
                return this.httpHandler.Get(App.Config.ApiUrl + "items", null).then(function (result) { return result.data; });
            };
            ItemService.prototype.getAllFromSessionId = function () {
                return this.httpHandler.Get(App.Config.ApiUrl + "carts/" + this.getSessionKey(), null).then(function (result) { return result.data; });
            };
            ItemService.prototype.addItemsToCart = function (itemId) {
                return this.httpHandler.Post(App.Config.ApiUrl + "carts/" + this.getSessionKey() + "/" + itemId + "/add", null).then(function (result) { return result.data; });
            };
            ItemService.prototype.removeItemFromCart = function (itemId) {
                return this.httpHandler.Delete(App.Config.ApiUrl + "carts/" + this.getSessionKey() + "/" + itemId + "/remove", null).then(function (result) { return result.data; });
            };
            ItemService.prototype.postOrder = function (order) {
                return this.httpHandler.Post(App.Config.ApiUrl + "orders/" + this.getSessionKey() + "/add", order).then(function (result) { return result.data; });
            };
            ItemService.prototype.getSessionKey = function () {
                var key = Services.Base.SessionStorageHelper.getObjectInSessionStorage(App.Config.SessionKey);
                if (_.isEmpty(key)) {
                    key = Guid.GuidGenerator.newGuid();
                    Services.Base.SessionStorageHelper.setObjectInSessionStorage(App.Config.SessionKey, key);
                }
                return key;
            };
            return ItemService;
        }());
        Items.ItemService = ItemService;
    })(Items = Services.Items || (Services.Items = {}));
})(Services || (Services = {}));
//# sourceMappingURL=ItemService.js.map