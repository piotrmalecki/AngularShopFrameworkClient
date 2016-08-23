

namespace Services.Base {
    export interface IHttpHanlder {
        Get<T>(url: string, param: any): ng.IHttpPromise<T>;
        Post<T>(url: string, param: any): ng.IHttpPromise<T>;
        Put<T>(url: string, data: any): ng.IHttpPromise<T>;
        Delete<T>(url: string, param: T): ng.IHttpPromise<T>;
        JsonP<T>(url: string, param: any, successCallBack: Function, errorCallBack: Function): ng.IHttpPromise<T>;
        http
    }

    export class HttpHandler implements IHttpHanlder {
        static $inject = ['$http']; //<-- Inject here

        static httpStatic: ng.IHttpService;
        http: ng.IHttpService;

        constructor(private $http: ng.IHttpService) {
            this.http = $http;
            
            HttpHandler.httpStatic = $http;
        }
        public JsonP<T>(url: string, param: any, successCallBack: Function, errorCallBack: Function): ng.IHttpPromise<T> {
            return this.http.jsonp(url, param)
                .success((data) => {
                    successCallBack(data);
                })
                .error(error => {
                    errorCallBack(error);
                });
        }

        public Get<T>(url: string, param: any): ng.IHttpPromise<T> {
            return this.http.get(url, param);
        }
        public Post<T>(url: string, data: any): ng.IHttpPromise<T> {
            return this.http.post(url, data);
        }

        public Put<T>(url: string, data: any): ng.IHttpPromise<T> {
            return this.http.put(url, data);
        }

        public static Post<T>(url: string, param: T) {
            return HttpHandler.httpStatic.post(url, param);
        }

        public Delete<T>(url: string, param: T): ng.IHttpPromise<T> {
            return this.http.delete(url, param)
        }

    }

}