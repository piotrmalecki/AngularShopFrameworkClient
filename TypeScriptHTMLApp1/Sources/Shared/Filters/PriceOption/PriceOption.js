var Filters;
(function (Filters) {
    function priceOption() {
        return function (input) {
            return '$' + input.Price + '/month ' + input.Description;
        };
    }
    Filters.priceOption = priceOption;
})(Filters || (Filters = {}));
//# sourceMappingURL=PriceOption.js.map