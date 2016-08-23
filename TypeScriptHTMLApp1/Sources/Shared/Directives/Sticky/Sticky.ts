namespace Directives {

    interface IDirectiveScope extends ng.IScope {
        
    }

    export class Sticky {
        public link: ($scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => void;
        public restrict = 'A';

        constructor() {
            var me = this;

            Sticky.prototype.link = ($scope: IDirectiveScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => {
                var elementTop = element.offset().top;
                
                window.onscroll = function () {
                    if (window.pageYOffset > elementTop) {
                        element.addClass('sticky');
                    } else {
                        element.removeClass('sticky');
                    }
                };
            };
        }

        public static Factory() {
            var directive = () => {
                return new Sticky();
            };

            //directive['$inject'] = [];

            return directive;
        }
    }
}