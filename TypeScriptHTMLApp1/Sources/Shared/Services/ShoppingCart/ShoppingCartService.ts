namespace Services.Items {

    export interface IShoppingCartService {
        //searchItems(search: string): ng.IPromise<Models.Items.IItemsResult>
        //getAll(): ng.IPromise<Models.Items.IItemsResult>
    }

    export class ShoppingCartService implements IShoppingCartService {

        public httpHandler: Services.Base.IHttpHanlder;

        constructor(HttpHandler: Services.Base.IHttpHanlder) {
            this.httpHandler = HttpHandler;
        }


        public deleteTtemsToCart(sessionKey: string, itemId: number): ng.IPromise<Models.Items.IItemsResult> {

            return this.httpHandler.Delete<any>(App.Config.ApiUrl + "carts/" + sessionKey + "/" + itemId + "/add", null).then((result) => { return result.data });
        }
    }
}