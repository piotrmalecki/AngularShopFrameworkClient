
namespace Services.Base {

    export interface IMessage {
        type: string;
        message: string;
        stackTrace?: string;
        errorUrl?: string;
    }

    export interface ILogger {
        Log(message: string): void;
        LogLevel: LogLevel;
    }

    export enum LogLevel {
        OFF = 0,
        FATAL = 1,
        ERROR = 2,
        WARN = 3,
        INFO = 4,
        DEBUG = 5,
        ALL = 6
    }
    export class BaseLogger {

        private logLevel: LogLevel;

        constructor(logLevel: LogLevel) {
            this.LogLevel = logLevel;
        }

        get LogLevel() {
            return this.logLevel;
        }

        set LogLevel(logLevel) {
            if (this.logLevel != logLevel) {
                this.logLevel = logLevel;
            }
        }
        
        // tracking id info
        public static Log(LogLevel: string, message: string): void {

            var messageObj: IMessage = {
                type: LogLevel,
                message: message
            };

            Services.Base.HttpHandler.Post<IMessage>(App.Config.ApiUrl + App.Config.Logging, messageObj);

        }

    }

}