var Directives;
(function (Directives) {
    var FormValidation = (function () {
        function FormValidation() {
            this.restrict = 'A';
            var me = this;
            FormValidation.prototype.compile = function (element, attrs) {
                var $form = element.closest('form');
                var fieldValidationTrack = $form.attr('form-model');
                var $input = element.find('input:first');
                var $wrapper = element.find('.input-wrapper');
                var field = $form.attr('name') + "." + $input.attr('name');
                if (_.isUndefined(fieldValidationTrack)) {
                    var _validationCondition = field + ".$dirty && (" + field + ".$invalid || " + field + ".$required)";
                    var _toggleCondition = _validationCondition;
                }
                else {
                    var _toggleCondition = fieldValidationTrack + ' && ' + field + ".$invalid";
                    var _validationCondition = "(" + field + ".$dirty && (" + field + ".$invalid || " + field + ".$required) ) || (" + _toggleCondition + ")";
                }
                // According to Twitter Bootstrap, add has-error class to input wrapper (here as: element)
                element.find('[valid-toggle]').attr('ng-class', "{'ng-invalid': " + _toggleCondition + "}");
                $wrapper.append('<i class="fa fa-times ng-validation-icon ng-icon-invalid" ng-show="' + _validationCondition + '" ></i>');
                $wrapper.append('<i class="fa fa-check ng-validation-icon ng-icon-valid" ng-show="!' + field + '.$invalid" ></i>');
                return null;
            };
        }
        FormValidation.Factory = function () {
            var directive = function () {
                return new FormValidation();
            };
            // directive['$inject'] = [];
            return directive;
        };
        return FormValidation;
    }());
    Directives.FormValidation = FormValidation;
})(Directives || (Directives = {}));
//# sourceMappingURL=FormValidation.js.map