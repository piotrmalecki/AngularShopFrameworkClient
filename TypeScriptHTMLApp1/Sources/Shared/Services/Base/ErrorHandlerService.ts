namespace Services.Base {

    export class ExceptionHandlerService {

        private _defaultExceptionHandlerService: ng.IExceptionHandlerService;

        constructor(paramDelegate: ng.IExceptionHandlerService) {

            this._defaultExceptionHandlerService = paramDelegate;
        }

        public exception: ng.IExceptionHandlerService = (paramException: Error, paramCause?: string): void => {
            var trace = printStackTrace({ e: paramException })
            console.log(paramCause + "Error one + " + " " + paramException.name + "  "+ paramException.message + "  " + trace);
            
            //BaseLogger.Log("1", paramException.message);
            //StackTrace.fromError(paramException).then(this.callback).catch(this.errback);
            this._defaultExceptionHandlerService(paramException, paramCause);

        }

    }
}