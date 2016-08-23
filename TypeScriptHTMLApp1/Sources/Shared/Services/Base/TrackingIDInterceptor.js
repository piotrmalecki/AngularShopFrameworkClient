var Services;
(function (Services) {
    var Base;
    (function (Base) {
        var TrackingIDInterceptor = (function () {
            function TrackingIDInterceptor() {
                this.request = function (config) {
                    config.headers["X-Customer"] = Services.Base.SessionStorageHelper.getObjectInLocalStorage("X-Customer");
                    return config;
                };
                this.response = function (response) {
                    if (response.config.headers['X-Customer']) {
                        Services.Base.SessionStorageHelper.setObjectInLocalStorage("X-Customer", response.config.headers["X-Customer"]);
                    }
                    return response;
                };
            }
            return TrackingIDInterceptor;
        }());
        Base.TrackingIDInterceptor = TrackingIDInterceptor;
    })(Base = Services.Base || (Services.Base = {}));
})(Services || (Services = {}));
//# sourceMappingURL=TrackingIDInterceptor.js.map