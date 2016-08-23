var Services;
(function (Services) {
    var Base;
    (function (Base) {
        (function (LogLevel) {
            LogLevel[LogLevel["OFF"] = 0] = "OFF";
            LogLevel[LogLevel["FATAL"] = 1] = "FATAL";
            LogLevel[LogLevel["ERROR"] = 2] = "ERROR";
            LogLevel[LogLevel["WARN"] = 3] = "WARN";
            LogLevel[LogLevel["INFO"] = 4] = "INFO";
            LogLevel[LogLevel["DEBUG"] = 5] = "DEBUG";
            LogLevel[LogLevel["ALL"] = 6] = "ALL";
        })(Base.LogLevel || (Base.LogLevel = {}));
        var LogLevel = Base.LogLevel;
        var BaseLogger = (function () {
            function BaseLogger(logLevel) {
                this.LogLevel = logLevel;
            }
            Object.defineProperty(BaseLogger.prototype, "LogLevel", {
                get: function () {
                    return this.logLevel;
                },
                set: function (logLevel) {
                    if (this.logLevel != logLevel) {
                        this.logLevel = logLevel;
                    }
                },
                enumerable: true,
                configurable: true
            });
            // tracking id info
            BaseLogger.Log = function (LogLevel, message) {
                var messageObj = {
                    type: LogLevel,
                    message: message
                };
                Services.Base.HttpHandler.Post(App.Config.ApiUrl + App.Config.Logging, messageObj);
            };
            return BaseLogger;
        }());
        Base.BaseLogger = BaseLogger;
    })(Base = Services.Base || (Services.Base = {}));
})(Services || (Services = {}));
//# sourceMappingURL=LogService.js.map