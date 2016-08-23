namespace Controllers {

    export interface IShoppingCartControllerScope extends ng.IScope {
        viewModel: ShoppingCartController;
    }

    export class ShoppingCartController {

        private error: string;
        private items: Array<Models.Items.IItems>;
        private searchValue: string;
        private cart: Array<Models.Items.IItems>;
        private isEmpty: boolean;

        constructor(private $scope: IShoppingCartControllerScope, private $state: ng.ui.IStateService, private itemService: Services.Items.IItemService, private growl: any, private applicationInsightsService:any) {
            $scope.viewModel = this;
            this.isEmpty = false;
            applicationInsightsService.trackEvent('ShoppingCart Controller');
            console.log("ShoppingCartController");
            itemService.getAllFromSessionId()
                .then((item) => {
                    this.cart = item;
                    if (_.isEmpty(this.cart)) { this.isEmpty = true; }
                    performance.mark("shoppingCartEnd");
                    performance.measure("shoppingCartLoading", "shoppingCartStart", "shoppingCartEnd");
                    //var tmpArray: Array<any> = JSON.parse(sessionStorage.getItem("shoppingCartLoadingArray"));
                    //if (_.isEmpty(tmpArray)) {
                    //    tmpArray = new Array<any>();
                    //    tmpArray.push(performance.getEntriesByName("shoppingCartLoading", "measure"));
                    //} else {
                    //    tmpArray.push(performance.getEntriesByName("shoppingCartLoading", "measure"));
                    //}
                    sessionStorage.setItem("shoppingCartLoadingArray", performance.getEntriesByName("shoppingCartLoading", "measure"));
                    console.log(this.cart);
                },
                (error) => {
                    this.error = error,
                    console.log("Error + " + error);
                })

            //angular.element(document).ready(function () {
            //    performance.mark("domElementsLoadedEnd");
            //    performance.measure("shoppingCartLoading", "shoppingCartEnd", "domElementsLoadedEnd");
            //    sessionStorage.setItem("domElementsLoadedArray", performance.getEntriesByName("shoppingCartLoading", "measure"));
            //    console.log('page loading completed');
            //});
        }
    

        public remove(id: number) {
            var me = this;
            
            this.itemService.removeItemFromCart(id).then(() => {
                //removed success
                console.log(me.cart);
                _.remove(me.cart, (item: any) => { return item.ItemId == id; });
                    this.$scope.$emit('cartRemoved', me.cart.length);
                    if (_.isEmpty(this.cart)) {
                        this.isEmpty = true;
                    }
                    this.growl.info("Product successfully removed", {
                        title: "Cart Information"
                    })
                }, () => {
                    this.growl.error("Error while product removal", {
                        title: "Cart Information"
                    });
                })

        }

        public countTotal(): number {
            var total = 0;
            _.forEach(this.cart, (item: any) => {
                total += +item.Item.Price * +item.Count;
            })
            return total
        }
    }
}