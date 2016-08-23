var Directives;
(function (Directives) {
    var ElemReady = (function () {
        function ElemReady() {
            this.restrict = 'A';
            this.require = '?ngModel'; // get a hold of NgModelController
            var me = this;
            ElemReady.prototype.link = function (scope, elm, attrs) {
                elm.ready(function () {
                    performance.mark("domElementsLoadedEnd");
                    performance.measure("DOMshoppingCartLoading", "shoppingCartEnd", "domElementsLoadedEnd");
                    sessionStorage.setItem("domElementsLoadedArray", performance.getEntriesByName("DOMshoppingCartLoading", "measure"));
                    console.log('page loading completed');
                    //$scope.$apply()
                });
            };
        }
        ElemReady.Factory = function () {
            var directive = function () {
                return new ElemReady();
            };
            return directive;
        };
        return ElemReady;
    }());
    Directives.ElemReady = ElemReady;
})(Directives || (Directives = {}));
//# sourceMappingURL=ElemReady.js.map