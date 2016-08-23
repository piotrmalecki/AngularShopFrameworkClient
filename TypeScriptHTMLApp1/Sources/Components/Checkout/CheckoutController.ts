namespace Controllers {

    export interface ICheckoutControllerScope extends ng.IScope {
        viewModel: CheckoutController;
    }

    export class CheckoutController {

        private error: string;
        private order: Models.Order.Order;
        private isSuccessful: boolean;

        constructor(private $scope: ICheckoutControllerScope, private $state: ng.ui.IStateService, private itemService: Services.Items.IItemService, private growl: any, private applicationInsightsService:any) {
            $scope.viewModel = this;
            applicationInsightsService.trackEvent('Checkout Controller');

            this.order = new Models.Order.Order();
            this.order.FirstName = "Piotr";
            this.order.LastName = "Malecki";
            this.order.Country = "Poland";
            this.order.Address = "100 Washington St";
            this.order.City = "New York";
            this.order.Email = "p@gmail.com";
            this.order.Phone = "6546546545";
            this.order.PostalCode = "6548";
            this.order.SaveInfo = true;
            this.order.State = "New York";
            this.order.Experation = new Date();
            this.order.Username = "pmalecki";
            
        }

        public submit() {
            console.log("submit")
            performance.mark("checkoutStart");
            
            this.itemService.postOrder(this.order).then((result) => {
                this.isSuccessful = true;
                performance.mark("checkoutEnd");
                performance.measure("checkoutLoading", "checkoutStart", "checkoutEnd");
                this.growl.success("Order successfully posted", {
                    title: "Order Information"
                })
            }, () => {
                this.growl.error("Error while posting", {
                    title: "Order Information"
                })
            })
        }
    }
}