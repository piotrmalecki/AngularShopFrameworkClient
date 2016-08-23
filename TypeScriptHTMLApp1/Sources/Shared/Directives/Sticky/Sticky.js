var Directives;
(function (Directives) {
    var Sticky = (function () {
        function Sticky() {
            this.restrict = 'A';
            var me = this;
            Sticky.prototype.link = function ($scope, element, attrs) {
                var elementTop = element.offset().top;
                window.onscroll = function () {
                    if (window.pageYOffset > elementTop) {
                        element.addClass('sticky');
                    }
                    else {
                        element.removeClass('sticky');
                    }
                };
            };
        }
        Sticky.Factory = function () {
            var directive = function () {
                return new Sticky();
            };
            //directive['$inject'] = [];
            return directive;
        };
        return Sticky;
    }());
    Directives.Sticky = Sticky;
})(Directives || (Directives = {}));
//# sourceMappingURL=Sticky.js.map