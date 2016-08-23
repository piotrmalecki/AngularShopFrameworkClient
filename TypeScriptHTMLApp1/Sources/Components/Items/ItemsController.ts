namespace Controllers {

    export interface IItemsControllerScope extends ng.IScope {
        viewModel: ItemsController;
    }

    export class ItemsController {

        private error: string;
        private items: Array<Models.Items.IItems>;
        private searchValue: string;

        private modalInstance: ng.ui.bootstrap.IModalServiceInstance;

        constructor(private $scope: IItemsControllerScope, private $state: ng.ui.IStateService, private itemService: Services.Items.IItemService, private $uibModal: ng.ui.bootstrap.IModalService, private growl: any, private applicationInsightsService: any) {
            $scope.viewModel = this;
            applicationInsightsService.trackEvent('Items Controller', {}, {"get/items": 45});
            itemService.getAll().then((result) => {
                this.items = result.Results;
                applicationInsightsService.trackEvent('Items Controller', {}, { "get/items": 90 });
                console.log(this.items);
            })

        }
        
        public search() {
            console.log("search")
            this.itemService.searchItems(this.searchValue).then((result) => {
                this.items = result.Results;
            })
        }

        public addProduct(id: number) {
            var me = this;
            this.itemService.addItemsToCart(id).then((item) => {
                    this.$scope.$emit('cartUpdated', 1);
                    this.growl.success("Product successfully added", {
                        title: "Cart Information"
                    })
                 }, () => {
                     this.growl.error("Error while product removal", {

                        title: "Cart Information"
                    });
                });
        }


        public goToShoppingCart() {
            //$("myModal").fadeOut();
            //this.closeModal();
            //var performanceValues = {
            //    shoppingCart: Array<Models.Performance.Performance>
            //};
            performance.mark("shoppingCartStart");
           // sessionStorage.setItem("shoppingCart", JSON.stringify(performanceValues));
            this.$state.go("shoppingCart");
        }
        
        private openModal() {
            this.modalInstance = this.$uibModal.open({
                backdrop: 'static',
                templateUrl: 'Sources/Components/Items/ItemsModal.html',
                scope: this.$scope
            });
        }

        private closeModal() {
            this.modalInstance.close();
        }

    }
}