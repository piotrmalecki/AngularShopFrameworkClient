var Services;
(function (Services) {
    var Base;
    (function (Base) {
        var HttpHandler = (function () {
            function HttpHandler($http) {
                this.$http = $http;
                this.http = $http;
                HttpHandler.httpStatic = $http;
            }
            HttpHandler.prototype.JsonP = function (url, param, successCallBack, errorCallBack) {
                return this.http.jsonp(url, param)
                    .success(function (data) {
                    successCallBack(data);
                })
                    .error(function (error) {
                    errorCallBack(error);
                });
            };
            HttpHandler.prototype.Get = function (url, param) {
                return this.http.get(url, param);
            };
            HttpHandler.prototype.Post = function (url, data) {
                return this.http.post(url, data);
            };
            HttpHandler.prototype.Put = function (url, data) {
                return this.http.put(url, data);
            };
            HttpHandler.Post = function (url, param) {
                return HttpHandler.httpStatic.post(url, param);
            };
            HttpHandler.prototype.Delete = function (url, param) {
                return this.http.delete(url, param);
            };
            HttpHandler.$inject = ['$http']; //<-- Inject here
            return HttpHandler;
        }());
        Base.HttpHandler = HttpHandler;
    })(Base = Services.Base || (Services.Base = {}));
})(Services || (Services = {}));
//# sourceMappingURL=HttpHandlerService.js.map