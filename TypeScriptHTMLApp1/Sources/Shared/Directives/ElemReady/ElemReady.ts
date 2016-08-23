namespace Directives {

    export class ElemReady {
        // Directive configuration
        public link: (scope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, ngModel: ng.INgModelController) => void;
        public restrict = 'A';
        public require = '?ngModel'; // get a hold of NgModelController

        constructor() {
            var me = this;

            ElemReady.prototype.link = (scope, elm, attrs) => {
                elm.ready(() => {
                    performance.mark("domElementsLoadedEnd");
                    performance.measure("DOMshoppingCartLoading", "shoppingCartEnd", "domElementsLoadedEnd");
                    sessionStorage.setItem("domElementsLoadedArray", performance.getEntriesByName("DOMshoppingCartLoading", "measure"));
                    console.log('page loading completed');
                    //$scope.$apply()
                });
            }
        }

        public static Factory() {
            var directive = () => {
                return new ElemReady();
            };

            return directive;
        }
    }
}