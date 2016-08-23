var Services;
(function (Services) {
    var Base;
    (function (Base) {
        // Stores compared rates:
        var SessionStorageHelper = (function () {
            function SessionStorageHelper() {
            }
            //public static removeFromSessionStorage(sessionStorageKey: string) {
            //    this.setObjectInSessionStorage(sessionStorageKey, null);
            //}
            SessionStorageHelper.setObjectInSessionStorage = function (key, oElement) {
                return sessionStorage.setItem(key, JSON.stringify(oElement));
            };
            SessionStorageHelper.getObjectInSessionStorage = function (key) {
                return JSON.parse(sessionStorage.getItem(key));
            };
            SessionStorageHelper.getObjectInLocalStorage = function (key) {
                return JSON.parse(localStorage.getItem(key));
            };
            SessionStorageHelper.setObjectInLocalStorage = function (key, oElement) {
                return localStorage.setItem(key, JSON.stringify(oElement));
            };
            return SessionStorageHelper;
        }());
        Base.SessionStorageHelper = SessionStorageHelper;
    })(Base = Services.Base || (Services.Base = {}));
})(Services || (Services = {}));
//# sourceMappingURL=SharedService.js.map