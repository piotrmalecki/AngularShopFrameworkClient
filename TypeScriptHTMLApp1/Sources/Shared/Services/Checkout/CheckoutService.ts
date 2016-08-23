namespace Services.Items {

    export interface ICheckoutService {
       // searchItems(search: string): ng.IPromise<Models.Items.IItemsResult>
       // getAll(): ng.IPromise<Models.Items.IItemsResult>
    }

    export class CheckoutService implements ICheckoutService {

        public httpHandler: Services.Base.IHttpHanlder;

        constructor(HttpHandler: Services.Base.IHttpHanlder) {
            this.httpHandler = HttpHandler;
        }


        //public searchItems(search: string): ng.IPromise<Models.Items.IItemsResult> {

        //    var param = {
        //        Search: search
        //    }
        //    console.log(search);
        //    return this.httpHandler.Post<any>(App.Config.ApiUrl + "items", param).then((result) => { return result.data });
        //}
        //public getAll(): ng.IPromise<Models.Items.IItemsResult> {
        //    return this.httpHandler.Get<any>(App.Config.ApiUrl + "items", null).then((result) => { return result.data });
        //}
    }
}