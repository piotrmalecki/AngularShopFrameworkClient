namespace Services.Base {
    export class TrackingIDInterceptor {

        public request: (config: ng.IRequestConfig) => ng.IRequestConfig;
        public response: (response: any) => any;

        constructor() {
            this.request = (config: ng.IRequestConfig) => {

                config.headers["X-Customer"] = Services.Base.SessionStorageHelper.getObjectInLocalStorage("X-Customer");
                return config;
            };

            this.response = (response) => {
                if (response.config.headers['X-Customer']) {
                    Services.Base.SessionStorageHelper.setObjectInLocalStorage("X-Customer", response.config.headers["X-Customer"]);
                }

                return response;
            };
        }
    }
}