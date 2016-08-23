var Services;
(function (Services) {
    var Base;
    (function (Base) {
        var ExceptionHandlerService = (function () {
            function ExceptionHandlerService(paramDelegate) {
                var _this = this;
                this.exception = function (paramException, paramCause) {
                    var trace = printStackTrace({ e: paramException });
                    console.log(paramCause + "Error one + " + " " + paramException.name + "  " + paramException.message + "  " + trace);
                    //BaseLogger.Log("1", paramException.message);
                    //StackTrace.fromError(paramException).then(this.callback).catch(this.errback);
                    _this._defaultExceptionHandlerService(paramException, paramCause);
                };
                this._defaultExceptionHandlerService = paramDelegate;
            }
            return ExceptionHandlerService;
        }());
        Base.ExceptionHandlerService = ExceptionHandlerService;
    })(Base = Services.Base || (Services.Base = {}));
})(Services || (Services = {}));
//# sourceMappingURL=ErrorHandlerService.js.map