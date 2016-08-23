var App;
(function (App) {
    var Config = (function () {
        function Config() {
        }
        //Api URLs
        //public static ApiUrl = "https://microsoft-apiappffae086c511f4405a0006098ac495cdb.azurewebsites.net/api/";
        //public static ApiUrl = "http://localhost:62972/api/";
        Config.ApiUrl = "http://localhost:62972/api/";
        Config.Logging = "logging";
        Config.SessionKey = "SessionKey";
        return Config;
    }());
    App.Config = Config;
})(App || (App = {}));
//# sourceMappingURL=config.js.map