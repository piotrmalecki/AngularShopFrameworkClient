namespace Services.Items {

    export interface IItemService {
        searchItems(search: string): ng.IPromise<Models.Items.IItemsResult>;
        getAllFromSessionId(): ng.IPromise<Array<Models.Items.IItems>>;
        addItemsToCart(itemId: number): ng.IPromise<Models.Items.IItemsResult>;
        removeItemFromCart(itemId: number): ng.IPromise<any>;
        postOrder(order: any): ng.IPromise<any>;
        getAll(): ng.IPromise<Models.Items.IItemsResult>;
    }

    export class ItemService implements IItemService {

        public httpHandler: Services.Base.IHttpHanlder;

        constructor(HttpHandler: Services.Base.IHttpHanlder) {
            this.httpHandler = HttpHandler;
        }


        public searchItems(search: string): ng.IPromise<Models.Items.IItemsResult> {

            var param = {
                Search: search
            }
            console.log(search);
            return this.httpHandler.Post<any>(App.Config.ApiUrl + "items", param).then((result) => { return result.data });
        }


        public getAll(): ng.IPromise<Models.Items.IItemsResult> {
            return this.httpHandler.Get<any>(App.Config.ApiUrl + "items", null).then((result) => { return result.data });
        }

        public getAllFromSessionId(): ng.IPromise<Array<Models.Items.IItems>> {
            return this.httpHandler.Get<any>(App.Config.ApiUrl + "carts/" + this.getSessionKey(), null).then((result) => { return result.data });
        }

        public addItemsToCart(itemId: number): ng.IPromise<Models.Items.IItemsResult> {
            return this.httpHandler.Post<any>(App.Config.ApiUrl + "carts/" + this.getSessionKey() + "/" + itemId + "/add", null).then((result) => { return result.data });
        }

        public removeItemFromCart(itemId: number): ng.IPromise<any> {
            return this.httpHandler.Delete<any>(App.Config.ApiUrl + "carts/" + this.getSessionKey() + "/" + itemId + "/remove", null).then((result) => { return result.data });
        }

        public postOrder(order: any): ng.IPromise<any> {
            return this.httpHandler.Post<any>(App.Config.ApiUrl + "orders/" + this.getSessionKey() + "/add", order).then((result) => { return result.data });
        }

        public getSessionKey(): string {
            var key = Services.Base.SessionStorageHelper.getObjectInSessionStorage(App.Config.SessionKey);
            if (_.isEmpty(key)) {
                key = Guid.GuidGenerator.newGuid();
                Services.Base.SessionStorageHelper.setObjectInSessionStorage(App.Config.SessionKey, key);
            }
            return key;
        }
    }
}