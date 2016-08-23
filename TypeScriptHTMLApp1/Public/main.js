var Directives;
(function (Directives) {
    var ElemReady = (function () {
        function ElemReady() {
            this.restrict = 'A';
            this.require = '?ngModel';
            var me = this;
            ElemReady.prototype.link = function (scope, elm, attrs) {
                elm.ready(function () {
                    performance.mark("domElementsLoadedEnd");
                    performance.measure("DOMshoppingCartLoading", "shoppingCartEnd", "domElementsLoadedEnd");
                    sessionStorage.setItem("domElementsLoadedArray", performance.getEntriesByName("DOMshoppingCartLoading", "measure"));
                    console.log('page loading completed');
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
    })();
    Directives.ElemReady = ElemReady;
})(Directives || (Directives = {}));
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
            return directive;
        };
        return FormValidation;
    })();
    Directives.FormValidation = FormValidation;
})(Directives || (Directives = {}));
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
            return directive;
        };
        return Sticky;
    })();
    Directives.Sticky = Sticky;
})(Directives || (Directives = {}));
var Filters;
(function (Filters) {
    function priceOption() {
        return function (input) {
            return '$' + input.Price + '/month ' + input.Description;
        };
    }
    Filters.priceOption = priceOption;
})(Filters || (Filters = {}));
var Filters;
(function (Filters) {
    function tel() {
        return function (tel) {
            if (!tel) {
                return '';
            }
            var value = tel.toString().trim().replace(/^\+/, '');
            if (value.match(/[^0-9]/)) {
                return tel;
            }
            var city, phone;
            switch (value.length) {
                case 10:
                    city = value.slice(0, 3);
                    phone = value.slice(3);
                    break;
                default:
                    return tel;
            }
            return (city + "-" + phone.slice(0, 3) + '-' + phone.slice(3)).trim();
        };
    }
    Filters.tel = tel;
})(Filters || (Filters = {}));
var Constants;
(function (Constants) {
    var Countries = (function () {
        function Countries() {
        }
        Countries.getCountries = function () {
            return [
                { Value: "United States", Text: "United States" },
                { Value: "Afghanistan", Text: "Afghanistan" },
                { Value: "Albania", Text: "Albania" },
                { Value: "Algeria", Text: "Algeria" },
                { Value: "American Samoa", Text: "American Samoa" },
                { Value: "Andorra", Text: "Andorra" },
                { Value: "Angola", Text: "Angola" },
                { Value: "Anguilla", Text: "Anguilla" },
                { Value: "Antarctica", Text: "Antarctica" },
                { Value: "Antigua and Barbuda", Text: "Antigua and Barbuda" },
                { Value: "Argentina", Text: "Argentina" },
                { Value: "Armenia", Text: "Armenia" },
                { Value: "Aruba", Text: "Aruba" },
                { Value: "Australia", Text: "Australia" },
                { Value: "Austria", Text: "Austria" },
                { Value: "Azerbaijan", Text: "Azerbaijan" },
                { Value: "Bahamas", Text: "Bahamas" },
                { Value: "Bahrain", Text: "Bahrain" },
                { Value: "Bangladesh", Text: "Bangladesh" },
                { Value: "Barbados", Text: "Barbados" },
                { Value: "Belarus", Text: "Belarus" },
                { Value: "Belgium", Text: "Belgium" },
                { Value: "Belize", Text: "Belize" },
                { Value: "Benin", Text: "Benin" },
                { Value: "Bermuda", Text: "Bermuda" },
                { Value: "Bhutan", Text: "Bhutan" },
                { Value: "Bolivia", Text: "Bolivia" },
                { Value: "Bosnia and Herzegovina", Text: "Bosnia and Herzegovina" },
                { Value: "Botswana", Text: "Botswana" },
                { Value: "Bouvet Island", Text: "Bouvet Island" },
                { Value: "Brazil", Text: "Brazil" },
                { Value: "British Indian Ocean Territory", Text: "British Indian Ocean Territory" },
                { Value: "Brunei Darussalam", Text: "Brunei Darussalam" },
                { Value: "Bulgaria", Text: "Bulgaria" },
                { Value: "Burkina Faso", Text: "Burkina Faso" },
                { Value: "Burundi", Text: "Burundi" },
                { Value: "Cambodia", Text: "Cambodia" },
                { Value: "Cameroon", Text: "Cameroon" },
                { Value: "Canada", Text: "Canada" },
                { Value: "Cape Verde", Text: "Cape Verde" },
                { Value: "Cayman Islands", Text: "Cayman Islands" },
                { Value: "Central African Republic", Text: "Central African Republic" },
                { Value: "Chad", Text: "Chad" },
                { Value: "Chile", Text: "Chile" },
                { Value: "China", Text: "China" },
                { Value: "Christmas Island", Text: "Christmas Island" },
                { Value: "Cocos (Keeling) Islands", Text: "Cocos (Keeling) Islands" },
                { Value: "Colombia", Text: "Colombia" },
                { Value: "Comoros", Text: "Comoros" },
                { Value: "Congo", Text: "Congo" },
                { Value: "Congo, The Democratic Republic of The", Text: "Congo, The Democratic Republic of The" },
                { Value: "Cook Islands", Text: "Cook Islands" },
                { Value: "Costa Rica", Text: "Costa Rica" },
                { Value: "Cote D'ivoire", Text: "Cote D'ivoire" },
                { Value: "Croatia", Text: "Croatia" },
                { Value: "Cuba", Text: "Cuba" },
                { Value: "Cyprus", Text: "Cyprus" },
                { Value: "Czech Republic", Text: "Czech Republic" },
                { Value: "Denmark", Text: "Denmark" },
                { Value: "Djibouti", Text: "Djibouti" },
                { Value: "Dominica", Text: "Dominica" },
                { Value: "Dominican Republic", Text: "Dominican Republic" },
                { Value: "Ecuador", Text: "Ecuador" },
                { Value: "Egypt", Text: "Egypt" },
                { Value: "El Salvador", Text: "El Salvador" },
                { Value: "Equatorial Guinea", Text: "Equatorial Guinea" },
                { Value: "Eritrea", Text: "Eritrea" },
                { Value: "Estonia", Text: "Estonia" },
                { Value: "Ethiopia", Text: "Ethiopia" },
                { Value: "Falkland Islands (Malvinas)", Text: "Falkland Islands (Malvinas)" },
                { Value: "Faroe Islands", Text: "Faroe Islands" },
                { Value: "Fiji", Text: "Fiji" },
                { Value: "Finland", Text: "Finland" },
                { Value: "France", Text: "France" },
                { Value: "French Guiana", Text: "French Guiana" },
                { Value: "French Polynesia", Text: "French Polynesia" },
                { Value: "French Southern Territories", Text: "French Southern Territories" },
                { Value: "Gabon", Text: "Gabon" },
                { Value: "Gambia", Text: "Gambia" },
                { Value: "Georgia", Text: "Georgia" },
                { Value: "Germany", Text: "Germany" },
                { Value: "Ghana", Text: "Ghana" },
                { Value: "Gibraltar", Text: "Gibraltar" },
                { Value: "Greece", Text: "Greece" },
                { Value: "Greenland", Text: "Greenland" },
                { Value: "Grenada", Text: "Grenada" },
                { Value: "Guadeloupe", Text: "Guadeloupe" },
                { Value: "Guam", Text: "Guam" },
                { Value: "Guatemala", Text: "Guatemala" },
                { Value: "Guinea", Text: "Guinea" },
                { Value: "Guinea-bissau", Text: "Guinea-bissau" },
                { Value: "Guyana", Text: "Guyana" },
                { Value: "Haiti", Text: "Haiti" },
                { Value: "Heard Island and Mcdonald Islands", Text: "Heard Island and Mcdonald Islands" },
                { Value: "Holy See (Vatican City State)", Text: "Holy See (Vatican City State)" },
                { Value: "Honduras", Text: "Honduras" },
                { Value: "Hong Kong", Text: "Hong Kong" },
                { Value: "Hungary", Text: "Hungary" },
                { Value: "Iceland", Text: "Iceland" },
                { Value: "India", Text: "India" },
                { Value: "Indonesia", Text: "Indonesia" },
                { Value: "Iran, Islamic Republic of", Text: "Iran, Islamic Republic of" },
                { Value: "Iraq", Text: "Iraq" },
                { Value: "Ireland", Text: "Ireland" },
                { Value: "Israel", Text: "Israel" },
                { Value: "Italy", Text: "Italy" },
                { Value: "Jamaica", Text: "Jamaica" },
                { Value: "Japan", Text: "Japan" },
                { Value: "Jordan", Text: "Jordan" },
                { Value: "Kazakhstan", Text: "Kazakhstan" },
                { Value: "Kenya", Text: "Kenya" },
                { Value: "Kiribati", Text: "Kiribati" },
                { Value: "Korea, Democratic People's Republic of", Text: "Korea, Democratic People's Republic of" },
                { Value: "Korea, Republic of", Text: "Korea, Republic of" },
                { Value: "Kuwait", Text: "Kuwait" },
                { Value: "Kyrgyzstan", Text: "Kyrgyzstan" },
                { Value: "Lao People's Democratic Republic", Text: "Lao People's Democratic Republic" },
                { Value: "Latvia", Text: "Latvia" },
                { Value: "Lebanon", Text: "Lebanon" },
                { Value: "Lesotho", Text: "Lesotho" },
                { Value: "Liberia", Text: "Liberia" },
                { Value: "Libyan Arab Jamahiriya", Text: "Libyan Arab Jamahiriya" },
                { Value: "Liechtenstein", Text: "Liechtenstein" },
                { Value: "Lithuania", Text: "Lithuania" },
                { Value: "Luxembourg", Text: "Luxembourg" },
                { Value: "Macao", Text: "Macao" },
                { Value: "Macedonia, The Former Yugoslav Republic of", Text: "Macedonia, The Former Yugoslav Republic of" },
                { Value: "Madagascar", Text: "Madagascar" },
                { Value: "Malawi", Text: "Malawi" },
                { Value: "Malaysia", Text: "Malaysia" },
                { Value: "Maldives", Text: "Maldives" },
                { Value: "Mali", Text: "Mali" },
                { Value: "Malta", Text: "Malta" },
                { Value: "Marshall Islands", Text: "Marshall Islands" },
                { Value: "Martinique", Text: "Martinique" },
                { Value: "Mauritania", Text: "Mauritania" },
                { Value: "Mauritius", Text: "Mauritius" },
                { Value: "Mayotte", Text: "Mayotte" },
                { Value: "Mexico", Text: "Mexico" },
                { Value: "Micronesia, Federated States of", Text: "Micronesia, Federated States of" },
                { Value: "Moldova, Republic of", Text: "Moldova, Republic of" },
                { Value: "Monaco", Text: "Monaco" },
                { Value: "Mongolia", Text: "Mongolia" },
                { Value: "Montserrat", Text: "Montserrat" },
                { Value: "Morocco", Text: "Morocco" },
                { Value: "Mozambique", Text: "Mozambique" },
                { Value: "Myanmar", Text: "Myanmar" },
                { Value: "Namibia", Text: "Namibia" },
                { Value: "Nauru", Text: "Nauru" },
                { Value: "Nepal", Text: "Nepal" },
                { Value: "Netherlands", Text: "Netherlands" },
                { Value: "Netherlands Antilles", Text: "Netherlands Antilles" },
                { Value: "New Caledonia", Text: "New Caledonia" },
                { Value: "New Zealand", Text: "New Zealand" },
                { Value: "Nicaragua", Text: "Nicaragua" },
                { Value: "Niger", Text: "Niger" },
                { Value: "Nigeria", Text: "Nigeria" },
                { Value: "Niue", Text: "Niue" },
                { Value: "Norfolk Island", Text: "Norfolk Island" },
                { Value: "Northern Mariana Islands", Text: "Northern Mariana Islands" },
                { Value: "Norway", Text: "Norway" },
                { Value: "Oman", Text: "Oman" },
                { Value: "Pakistan", Text: "Pakistan" },
                { Value: "Palau", Text: "Palau" },
                { Value: "Palestinian Territory, Occupied", Text: "Palestinian Territory, Occupied" },
                { Value: "Panama", Text: "Panama" },
                { Value: "Papua New Guinea", Text: "Papua New Guinea" },
                { Value: "Paraguay", Text: "Paraguay" },
                { Value: "Peru", Text: "Peru" },
                { Value: "Philippines", Text: "Philippines" },
                { Value: "Pitcairn", Text: "Pitcairn" },
                { Value: "Poland", Text: "Poland" },
                { Value: "Portugal", Text: "Portugal" },
                { Value: "Puerto Rico", Text: "Puerto Rico" },
                { Value: "Qatar", Text: "Qatar" },
                { Value: "Reunion", Text: "Reunion" },
                { Value: "Romania", Text: "Romania" },
                { Value: "Russian Federation", Text: "Russian Federation" },
                { Value: "Rwanda", Text: "Rwanda" },
                { Value: "Saint Helena", Text: "Saint Helena" },
                { Value: "Saint Kitts and Nevis", Text: "Saint Kitts and Nevis" },
                { Value: "Saint Lucia", Text: "Saint Lucia" },
                { Value: "Saint Pierre and Miquelon", Text: "Saint Pierre and Miquelon" },
                { Value: "Saint Vincent and The Grenadines", Text: "Saint Vincent and The Grenadines" },
                { Value: "Samoa", Text: "Samoa" },
                { Value: "San Marino", Text: "San Marino" },
                { Value: "Sao Tome and Principe", Text: "Sao Tome and Principe" },
                { Value: "Saudi Arabia", Text: "Saudi Arabia" },
                { Value: "Senegal", Text: "Senegal" },
                { Value: "Serbia and Montenegro", Text: "Serbia and Montenegro" },
                { Value: "Seychelles", Text: "Seychelles" },
                { Value: "Sierra Leone", Text: "Sierra Leone" },
                { Value: "Singapore", Text: "Singapore" },
                { Value: "Slovakia", Text: "Slovakia" },
                { Value: "Slovenia", Text: "Slovenia" },
                { Value: "Solomon Islands", Text: "Solomon Islands" },
                { Value: "Somalia", Text: "Somalia" },
                { Value: "South Africa", Text: "South Africa" },
                { Value: "South Georgia and The South Sandwich Islands", Text: "South Georgia and The South Sandwich Islands" },
                { Value: "Spain", Text: "Spain" },
                { Value: "Sri Lanka", Text: "Sri Lanka" },
                { Value: "Sudan", Text: "Sudan" },
                { Value: "Suriname", Text: "Suriname" },
                { Value: "Svalbard and Jan Mayen", Text: "Svalbard and Jan Mayen" },
                { Value: "Swaziland", Text: "Swaziland" },
                { Value: "Sweden", Text: "Sweden" },
                { Value: "Switzerland", Text: "Switzerland" },
                { Value: "Syrian Arab Republic", Text: "Syrian Arab Republic" },
                { Value: "Taiwan, Province of China", Text: "Taiwan, Province of China" },
                { Value: "Tajikistan", Text: "Tajikistan" },
                { Value: "Tanzania, United Republic of", Text: "Tanzania, United Republic of" },
                { Value: "Thailand", Text: "Thailand" },
                { Value: "Timor-leste", Text: "Timor-leste" },
                { Value: "Togo", Text: "Togo" },
                { Value: "Tokelau", Text: "Tokelau" },
                { Value: "Tonga", Text: "Tonga" },
                { Value: "Trinidad and Tobago", Text: "Trinidad and Tobago" },
                { Value: "Tunisia", Text: "Tunisia" },
                { Value: "Turkey", Text: "Turkey" },
                { Value: "Turkmenistan", Text: "Turkmenistan" },
                { Value: "Turks and Caicos Islands", Text: "Turks and Caicos Islands" },
                { Value: "Tuvalu", Text: "Tuvalu" },
                { Value: "Uganda", Text: "Uganda" },
                { Value: "Ukraine", Text: "Ukraine" },
                { Value: "United Arab Emirates", Text: "United Arab Emirates" },
                { Value: "United Kingdom", Text: "United Kingdom" },
                { Value: "United States Minor Outlying Islands", Text: "United States Minor Outlying Islands" },
                { Value: "Uruguay", Text: "Uruguay" },
                { Value: "Uzbekistan", Text: "Uzbekistan" },
                { Value: "Vanuatu", Text: "Vanuatu" },
                { Value: "Venezuela", Text: "Venezuela" },
                { Value: "Viet Nam", Text: "Viet Nam" },
                { Value: "Virgin Islands, British", Text: "Virgin Islands, British" },
                { Value: "Virgin Islands, U.S.", Text: "Virgin Islands, U.S." },
                { Value: "Wallis and Futuna", Text: "Wallis and Futuna" },
                { Value: "Western Sahara", Text: "Western Sahara" },
                { Value: "Yemen", Text: "Yemen" },
                { Value: "Zambia", Text: "Zambia" },
                { Value: "Zimbabwe", Text: "Zimbabwe" },
            ];
        };
        return Countries;
    })();
    Constants.Countries = Countries;
})(Constants || (Constants = {}));
var Guid;
(function (Guid) {
    var GuidGenerator = (function () {
        function GuidGenerator() {
        }
        GuidGenerator.newGuid = function () {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        };
        return GuidGenerator;
    })();
    Guid.GuidGenerator = GuidGenerator;
})(Guid || (Guid = {}));
var Constants;
(function (Constants) {
    var States = (function () {
        function States() {
        }
        States.getStates = function () {
            return [
                { Value: "AL", Text: "Alabama" },
                { Value: "AK", Text: "Alaska" },
                { Value: "AZ", Text: "Arizona" },
                { Value: "AR", Text: "Arkansas" },
                { Value: "CA", Text: "California" },
                { Value: "CO", Text: "Colorado" },
                { Value: "CT", Text: "Connecticut" },
                { Value: "DE", Text: "Delaware" },
                { Value: "DC", Text: "District Of Columbia" },
                { Value: "FL", Text: "Florida" },
                { Value: "GA", Text: "Georgia" },
                { Value: "HI", Text: "Hawaii" },
                { Value: "ID", Text: "Idaho" },
                { Value: "IL", Text: "Illinois" },
                { Value: "IN", Text: "Indiana" },
                { Value: "IA", Text: "Iowa" },
                { Value: "KS", Text: "Kansas" },
                { Value: "KY", Text: "Kentucky" },
                { Value: "LA", Text: "Louisiana" },
                { Value: "ME", Text: "Maine" },
                { Value: "MD", Text: "Maryland" },
                { Value: "MA", Text: "Massachusetts" },
                { Value: "MI", Text: "Michigan" },
                { Value: "MN", Text: "Minnesota" },
                { Value: "MS", Text: "Mississippi" },
                { Value: "MO", Text: "Missouri" },
                { Value: "MT", Text: "Montana" },
                { Value: "NE", Text: "Nebraska" },
                { Value: "NV", Text: "Nevada" },
                { Value: "NH", Text: "New Hampshire" },
                { Value: "NJ", Text: "New Jersey" },
                { Value: "NM", Text: "New Mexico" },
                { Value: "NY", Text: "New York" },
                { Value: "NC", Text: "North Carolina" },
                { Value: "ND", Text: "North Dakota" },
                { Value: "OH", Text: "Ohio" },
                { Value: "OK", Text: "Oklahoma" },
                { Value: "OR", Text: "Oregon" },
                { Value: "PA", Text: "Pennsylvania" },
                { Value: "RI", Text: "Rhode Island" },
                { Value: "SC", Text: "South Carolina" },
                { Value: "SD", Text: "South Dakota" },
                { Value: "TN", Text: "Tennessee" },
                { Value: "TX", Text: "Texas" },
                { Value: "UT", Text: "Utah" },
                { Value: "VT", Text: "Vermont" },
                { Value: "VA", Text: "Virginia" },
                { Value: "WA", Text: "Washington" },
                { Value: "WV", Text: "West Virginia" },
                { Value: "WI", Text: "Wisconsin" },
                { Value: "WY", Text: "Wyoming" }
            ];
        };
        return States;
    })();
    Constants.States = States;
})(Constants || (Constants = {}));
var Models;
(function (Models) {
    var Order;
    (function (Order_1) {
        var Order = (function () {
            function Order() {
            }
            return Order;
        })();
        Order_1.Order = Order;
    })(Order = Models.Order || (Models.Order = {}));
})(Models || (Models = {}));
var Models;
(function (Models) {
    var Performance;
    (function (Performance_1) {
        var Performance = (function () {
            function Performance() {
            }
            return Performance;
        })();
        Performance_1.Performance = Performance;
    })(Performance = Models.Performance || (Models.Performance = {}));
})(Models || (Models = {}));
var Services;
(function (Services) {
    var Base;
    (function (Base) {
        var ExceptionHandlerService = (function () {
            function ExceptionHandlerService(paramDelegate) {
                var _this = this;
                this.exception = function (paramException, paramCause) {
                    var trace = printStackTrace({ e: paramException });
                    console.log(paramCause + "Error one + " + " " + paramException.name + "  " + paramException.message + "  " + trace);
                    _this._defaultExceptionHandlerService(paramException, paramCause);
                };
                this._defaultExceptionHandlerService = paramDelegate;
            }
            return ExceptionHandlerService;
        })();
        Base.ExceptionHandlerService = ExceptionHandlerService;
    })(Base = Services.Base || (Services.Base = {}));
})(Services || (Services = {}));
var Services;
(function (Services) {
    var Base;
    (function (Base) {
        var ErrorModalService = (function () {
            function ErrorModalService() {
            }
            ErrorModalService.addError = function ($scope, $modal) {
                this.modalInstance = $modal.open({
                    templateUrl: 'Sources/Shared/Directives/Error/Error.html',
                    scope: $scope,
                    size: "sm"
                });
            };
            ErrorModalService.closeModalError = function () {
                this.modalInstance.close();
            };
            return ErrorModalService;
        })();
        Base.ErrorModalService = ErrorModalService;
    })(Base = Services.Base || (Services.Base = {}));
})(Services || (Services = {}));
var Services;
(function (Services) {
    var Base;
    (function (Base) {
        var HttpHandler = (function () {
            function HttpHandler($http) {
                this.$http = $http;
                this.http = $http;
                HttpHandler.httpStatic = $http;
            }
            HttpHandler.prototype.JsonP = function (url, param, successCallBack, errorCallBack) {
                return this.http.jsonp(url, param)
                    .success(function (data) {
                    successCallBack(data);
                })
                    .error(function (error) {
                    errorCallBack(error);
                });
            };
            HttpHandler.prototype.Get = function (url, param) {
                return this.http.get(url, param);
            };
            HttpHandler.prototype.Post = function (url, data) {
                return this.http.post(url, data);
            };
            HttpHandler.prototype.Put = function (url, data) {
                return this.http.put(url, data);
            };
            HttpHandler.Post = function (url, param) {
                return HttpHandler.httpStatic.post(url, param);
            };
            HttpHandler.prototype.Delete = function (url, param) {
                return this.http.delete(url, param);
            };
            HttpHandler.$inject = ['$http'];
            return HttpHandler;
        })();
        Base.HttpHandler = HttpHandler;
    })(Base = Services.Base || (Services.Base = {}));
})(Services || (Services = {}));
var Services;
(function (Services) {
    var Base;
    (function (Base) {
        (function (LogLevel) {
            LogLevel[LogLevel["OFF"] = 0] = "OFF";
            LogLevel[LogLevel["FATAL"] = 1] = "FATAL";
            LogLevel[LogLevel["ERROR"] = 2] = "ERROR";
            LogLevel[LogLevel["WARN"] = 3] = "WARN";
            LogLevel[LogLevel["INFO"] = 4] = "INFO";
            LogLevel[LogLevel["DEBUG"] = 5] = "DEBUG";
            LogLevel[LogLevel["ALL"] = 6] = "ALL";
        })(Base.LogLevel || (Base.LogLevel = {}));
        var LogLevel = Base.LogLevel;
        var BaseLogger = (function () {
            function BaseLogger(logLevel) {
                this.LogLevel = logLevel;
            }
            Object.defineProperty(BaseLogger.prototype, "LogLevel", {
                get: function () {
                    return this.logLevel;
                },
                set: function (logLevel) {
                    if (this.logLevel != logLevel) {
                        this.logLevel = logLevel;
                    }
                },
                enumerable: true,
                configurable: true
            });
            BaseLogger.Log = function (LogLevel, message) {
                var messageObj = {
                    type: LogLevel,
                    message: message
                };
                Services.Base.HttpHandler.Post(App.Config.ApiUrl + App.Config.Logging, messageObj);
            };
            return BaseLogger;
        })();
        Base.BaseLogger = BaseLogger;
    })(Base = Services.Base || (Services.Base = {}));
})(Services || (Services = {}));
var Services;
(function (Services) {
    var Base;
    (function (Base) {
        var SessionStorageHelper = (function () {
            function SessionStorageHelper() {
            }
            SessionStorageHelper.setObjectInSessionStorage = function (key, oElement) {
                return sessionStorage.setItem(key, JSON.stringify(oElement));
            };
            SessionStorageHelper.getObjectInSessionStorage = function (key) {
                return JSON.parse(sessionStorage.getItem(key));
            };
            SessionStorageHelper.getObjectInLocalStorage = function (key) {
                return JSON.parse(localStorage.getItem(key));
            };
            SessionStorageHelper.setObjectInLocalStorage = function (key, oElement) {
                return localStorage.setItem(key, JSON.stringify(oElement));
            };
            return SessionStorageHelper;
        })();
        Base.SessionStorageHelper = SessionStorageHelper;
    })(Base = Services.Base || (Services.Base = {}));
})(Services || (Services = {}));
var Services;
(function (Services) {
    var Base;
    (function (Base) {
        var TrackingIDInterceptor = (function () {
            function TrackingIDInterceptor() {
                this.request = function (config) {
                    config.headers["X-Customer"] = Services.Base.SessionStorageHelper.getObjectInLocalStorage("X-Customer");
                    return config;
                };
                this.response = function (response) {
                    if (response.config.headers['X-Customer']) {
                        Services.Base.SessionStorageHelper.setObjectInLocalStorage("X-Customer", response.config.headers["X-Customer"]);
                    }
                    return response;
                };
            }
            return TrackingIDInterceptor;
        })();
        Base.TrackingIDInterceptor = TrackingIDInterceptor;
    })(Base = Services.Base || (Services.Base = {}));
})(Services || (Services = {}));
var Services;
(function (Services) {
    var Items;
    (function (Items) {
        var CheckoutService = (function () {
            function CheckoutService(HttpHandler) {
                this.httpHandler = HttpHandler;
            }
            return CheckoutService;
        })();
        Items.CheckoutService = CheckoutService;
    })(Items = Services.Items || (Services.Items = {}));
})(Services || (Services = {}));
var Services;
(function (Services) {
    var Base;
    (function (Base) {
        var EnvironmentService = (function () {
            function EnvironmentService() {
            }
            EnvironmentService.prototype.isMobile = function () {
                var check = false;
                (function (a) {
                    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
                        check = true;
                })(navigator.userAgent || navigator.vendor || window['opera']);
                return check;
            };
            return EnvironmentService;
        })();
        Base.EnvironmentService = EnvironmentService;
    })(Base = Services.Base || (Services.Base = {}));
})(Services || (Services = {}));
var Services;
(function (Services) {
    var Items;
    (function (Items) {
        var ItemService = (function () {
            function ItemService(HttpHandler) {
                this.httpHandler = HttpHandler;
            }
            ItemService.prototype.searchItems = function (search) {
                var param = {
                    Search: search
                };
                console.log(search);
                return this.httpHandler.Post(App.Config.ApiUrl + "items", param).then(function (result) { return result.data; });
            };
            ItemService.prototype.getAll = function () {
                return this.httpHandler.Get(App.Config.ApiUrl + "items", null).then(function (result) { return result.data; });
            };
            ItemService.prototype.getAllFromSessionId = function () {
                return this.httpHandler.Get(App.Config.ApiUrl + "carts/" + this.getSessionKey(), null).then(function (result) { return result.data; });
            };
            ItemService.prototype.addItemsToCart = function (itemId) {
                return this.httpHandler.Post(App.Config.ApiUrl + "carts/" + this.getSessionKey() + "/" + itemId + "/add", null).then(function (result) { return result.data; });
            };
            ItemService.prototype.removeItemFromCart = function (itemId) {
                return this.httpHandler.Delete(App.Config.ApiUrl + "carts/" + this.getSessionKey() + "/" + itemId + "/remove", null).then(function (result) { return result.data; });
            };
            ItemService.prototype.postOrder = function (order) {
                return this.httpHandler.Post(App.Config.ApiUrl + "orders/" + this.getSessionKey() + "/add", order).then(function (result) { return result.data; });
            };
            ItemService.prototype.getSessionKey = function () {
                var key = Services.Base.SessionStorageHelper.getObjectInSessionStorage(App.Config.SessionKey);
                if (_.isEmpty(key)) {
                    key = Guid.GuidGenerator.newGuid();
                    Services.Base.SessionStorageHelper.setObjectInSessionStorage(App.Config.SessionKey, key);
                }
                return key;
            };
            return ItemService;
        })();
        Items.ItemService = ItemService;
    })(Items = Services.Items || (Services.Items = {}));
})(Services || (Services = {}));
var Services;
(function (Services) {
    var Items;
    (function (Items) {
        var ShoppingCartService = (function () {
            function ShoppingCartService(HttpHandler) {
                this.httpHandler = HttpHandler;
            }
            ShoppingCartService.prototype.deleteTtemsToCart = function (sessionKey, itemId) {
                return this.httpHandler.Delete(App.Config.ApiUrl + "carts/" + sessionKey + "/" + itemId + "/add", null).then(function (result) { return result.data; });
            };
            return ShoppingCartService;
        })();
        Items.ShoppingCartService = ShoppingCartService;
    })(Items = Services.Items || (Services.Items = {}));
})(Services || (Services = {}));
var Controllers;
(function (Controllers) {
    var BaseController = (function () {
        function BaseController($scope, applicationInsightsService) {
            this.$scope = $scope;
            this.applicationInsightsService = applicationInsightsService;
            $scope.viewModel = this;
            applicationInsightsService.trackEvent('An amazing Event happened');
            this.cartQuantity = 0;
            $scope.$on('cartUpdated', function (event, newQuantity) {
                $scope.viewModel.cartQuantity += newQuantity;
            });
            $scope.$on('cartRemoved', function (event, newQuantity) {
                $scope.viewModel.cartQuantity = newQuantity;
            });
        }
        BaseController.$inject = [];
        return BaseController;
    })();
    Controllers.BaseController = BaseController;
})(Controllers || (Controllers = {}));
var Controllers;
(function (Controllers) {
    var CheckoutController = (function () {
        function CheckoutController($scope, $state, itemService, growl, applicationInsightsService) {
            this.$scope = $scope;
            this.$state = $state;
            this.itemService = itemService;
            this.growl = growl;
            this.applicationInsightsService = applicationInsightsService;
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
        CheckoutController.prototype.submit = function () {
            var _this = this;
            console.log("submit");
            performance.mark("checkoutStart");
            this.itemService.postOrder(this.order).then(function (result) {
                _this.isSuccessful = true;
                performance.mark("checkoutEnd");
                performance.measure("checkoutLoading", "checkoutStart", "checkoutEnd");
                _this.growl.success("Order successfully posted", {
                    title: "Order Information"
                });
            }, function () {
                _this.growl.error("Error while posting", {
                    title: "Order Information"
                });
            });
        };
        return CheckoutController;
    })();
    Controllers.CheckoutController = CheckoutController;
})(Controllers || (Controllers = {}));
var Controllers;
(function (Controllers) {
    var HomePageController = (function () {
        function HomePageController($scope, $state, applicationInsightsService) {
            this.$scope = $scope;
            this.$state = $state;
            this.applicationInsightsService = applicationInsightsService;
            $scope.viewModel = this;
            applicationInsightsService.trackEvent('Home Page Controller');
        }
        return HomePageController;
    })();
    Controllers.HomePageController = HomePageController;
})(Controllers || (Controllers = {}));
var Controllers;
(function (Controllers) {
    var ItemsController = (function () {
        function ItemsController($scope, $state, itemService, $uibModal, growl, applicationInsightsService) {
            var _this = this;
            this.$scope = $scope;
            this.$state = $state;
            this.itemService = itemService;
            this.$uibModal = $uibModal;
            this.growl = growl;
            this.applicationInsightsService = applicationInsightsService;
            $scope.viewModel = this;
            applicationInsightsService.trackEvent('Items Controller', {}, { "get/items": 45 });
            itemService.getAll().then(function (result) {
                _this.items = result.Results;
                applicationInsightsService.trackEvent('Items Controller', {}, { "get/items": 90 });
                console.log(_this.items);
            });
        }
        ItemsController.prototype.search = function () {
            var _this = this;
            console.log("search");
            this.itemService.searchItems(this.searchValue).then(function (result) {
                _this.items = result.Results;
            });
        };
        ItemsController.prototype.addProduct = function (id) {
            var _this = this;
            var me = this;
            this.itemService.addItemsToCart(id).then(function (item) {
                _this.$scope.$emit('cartUpdated', 1);
                _this.growl.success("Product successfully added", {
                    title: "Cart Information"
                });
            }, function () {
                _this.growl.error("Error while product removal", {
                    title: "Cart Information"
                });
            });
        };
        ItemsController.prototype.goToShoppingCart = function () {
            performance.mark("shoppingCartStart");
            this.$state.go("shoppingCart");
        };
        ItemsController.prototype.openModal = function () {
            this.modalInstance = this.$uibModal.open({
                backdrop: 'static',
                templateUrl: 'Sources/Components/Items/ItemsModal.html',
                scope: this.$scope
            });
        };
        ItemsController.prototype.closeModal = function () {
            this.modalInstance.close();
        };
        return ItemsController;
    })();
    Controllers.ItemsController = ItemsController;
})(Controllers || (Controllers = {}));
var Controllers;
(function (Controllers) {
    var ShoppingCartController = (function () {
        function ShoppingCartController($scope, $state, itemService, growl, applicationInsightsService) {
            var _this = this;
            this.$scope = $scope;
            this.$state = $state;
            this.itemService = itemService;
            this.growl = growl;
            this.applicationInsightsService = applicationInsightsService;
            $scope.viewModel = this;
            this.isEmpty = false;
            applicationInsightsService.trackEvent('ShoppingCart Controller');
            console.log("ShoppingCartController");
            itemService.getAllFromSessionId()
                .then(function (item) {
                _this.cart = item;
                if (_.isEmpty(_this.cart)) {
                    _this.isEmpty = true;
                }
                performance.mark("shoppingCartEnd");
                performance.measure("shoppingCartLoading", "shoppingCartStart", "shoppingCartEnd");
                sessionStorage.setItem("shoppingCartLoadingArray", performance.getEntriesByName("shoppingCartLoading", "measure"));
                console.log(_this.cart);
            }, function (error) {
                _this.error = error,
                    console.log("Error + " + error);
            });
        }
        ShoppingCartController.prototype.remove = function (id) {
            var _this = this;
            var me = this;
            this.itemService.removeItemFromCart(id).then(function () {
                console.log(me.cart);
                _.remove(me.cart, function (item) { return item.ItemId == id; });
                _this.$scope.$emit('cartRemoved', me.cart.length);
                if (_.isEmpty(_this.cart)) {
                    _this.isEmpty = true;
                }
                _this.growl.info("Product successfully removed", {
                    title: "Cart Information"
                });
            }, function () {
                _this.growl.error("Error while product removal", {
                    title: "Cart Information"
                });
            });
        };
        ShoppingCartController.prototype.countTotal = function () {
            var total = 0;
            _.forEach(this.cart, function (item) {
                total += +item.Item.Price * +item.Count;
            });
            return total;
        };
        return ShoppingCartController;
    })();
    Controllers.ShoppingCartController = ShoppingCartController;
})(Controllers || (Controllers = {}));
var Controllers;
(function (Controllers) {
    var StaticController = (function () {
        function StaticController($scope, applicationInsightsService) {
            this.$scope = $scope;
            this.applicationInsightsService = applicationInsightsService;
            $scope.viewModel = this;
        }
        StaticController.$inject = [];
        return StaticController;
    })();
    Controllers.StaticController = StaticController;
})(Controllers || (Controllers = {}));
var App;
(function (App) {
    var app = angular.module("ShopFramework", [
        "ui.bootstrap",
        "ui.router",
        "ui.checkbox",
        "angular-growl",
        "ApplicationInsightsModule"
    ]);
    app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 'applicationInsightsServiceProvider', function ($stateProvider, $urlRouterProvider, $locationProvider, applicationInsightsServiceProvider) {
            var options = {
                applicationName: 'amazingApp',
                autoPageViewTracking: true,
                autoLogTracking: true,
                autoExceptionTracking: true,
                sessionInactivityTimeout: 1800000
            };
            applicationInsightsServiceProvider.configure('39be1f73-025a-4d76-aab6-08683919a870', options);
            $urlRouterProvider.otherwise("/");
            $stateProvider
                .state('homepage', {
                url: '/',
                templateUrl: 'Sources/Components/HomePage/HomePage.html',
                controller: "HomePageController"
            })
                .state('items', {
                url: '/items',
                templateUrl: 'Sources/Components/Items/Items.html',
                controller: "ItemsController"
            })
                .state('about', {
                url: '/about',
                templateUrl: 'Sources/Components/Static/About.html',
                controller: "StaticController"
            })
                .state('contact', {
                url: '/contact',
                templateUrl: 'Sources/Components/Static/Contact.html',
                controller: "StaticController"
            })
                .state('shoppingCart', {
                url: '/shoppingCart',
                templateUrl: 'Sources/Components/ShoppingCart/ShoppingCart.html',
                controller: "ShoppingCartController"
            })
                .state('checkout', {
                url: '/checkout',
                templateUrl: 'Sources/Components/Checkout/Checkout.html',
                controller: "CheckoutController"
            })
                .state('complete', {
                url: '/complete',
                templateUrl: 'Sources/Components/Checkout/Checkout.html',
                controller: "CheckoutController"
            });
        }]);
    app.config(['growlProvider', function (growlProvider) {
            growlProvider.globalTimeToLive(5000).globalDisableIcons(true).globalDisableCountDown(true);
        }]);
    app.config([
        "$httpProvider",
        function ($httpProvider) {
        }
    ]);
    app.controller("BaseController", ["$scope", "applicationInsightsService", function ($scope, applicationInsightsService) { return new Controllers.BaseController($scope, applicationInsightsService); }]);
    app.controller("StaticController", ["$scope", "applicationInsightsService", function ($scope, applicationInsightsService) { return new Controllers.StaticController($scope, applicationInsightsService); }]);
    app.controller("HomePageController", ["$scope", "$state", "applicationInsightsService", function ($scope, $state, applicationInsightsService) { return new Controllers.HomePageController($scope, $state, applicationInsightsService); }]);
    app.controller("ItemsController", ["$scope", "$state", "ItemService", "$uibModal", "growl", "applicationInsightsService", function ($scope, $state, ItemService, $uibModal, growl, applicationInsightsService) { return new Controllers.ItemsController($scope, $state, ItemService, $uibModal, growl, applicationInsightsService); }]);
    app.controller("ShoppingCartController", ["$scope", "$state", "ItemService", "growl", "applicationInsightsService", function ($scope, $state, ItemService, growl, applicationInsightsService) { return new Controllers.ShoppingCartController($scope, $state, ItemService, growl, applicationInsightsService); }]);
    app.controller("CheckoutController", ["$scope", "$state", "ItemService", "growl", "applicationInsightsService", function ($scope, $state, ItemService, growl, applicationInsightsService) { return new Controllers.CheckoutController($scope, $state, ItemService, growl, applicationInsightsService); }]);
    app.factory("HttpHandler", ["$http", function ($http) { return new Services.Base.HttpHandler($http); }]);
    app.factory("ItemService", ["HttpHandler", function (HttpHandler) { return new Services.Items.ItemService(HttpHandler); }]);
    app.directive('elem', Directives.ElemReady.Factory());
    app.filter('priceOption', Filters.priceOption);
    app.filter('tel', Filters.tel);
})(App || (App = {}));
var App;
(function (App) {
    var Config = (function () {
        function Config() {
        }
        Config.ApiUrl = "http://localhost:62972/api/";
        Config.Logging = "logging";
        Config.SessionKey = "SessionKey";
        return Config;
    })();
    App.Config = Config;
})(App || (App = {}));
/// <reference path="Tsd/angular-ui-router/angular-ui-router.d.ts" />
/// <reference path="Tsd/angularjs/angular.d.ts" />
/// <reference path="Tsd/google-maps/google.maps.d.ts" />
/// <reference path="Tsd/infobox/infobox.ts" />
/// <reference path="Tsd/jquery/jquery.d.ts" />
/// <reference path="Tsd/lodash/lodash.d.ts" />
/// <reference path="Tsd/markerwithlabel/markerwithlabel.d.ts" />
/// <reference path="Tsd/stacktrace/stacktrace.d.ts" />
/// <reference path="Tsd/ui-bootstrap/ui-bootstrap.d.ts" />
/// <reference path="Tsd/oauth/oauth.d.ts" />
/// <reference path="Sources/Shared/Directives/ElemReady/ElemReady.ts" />
/// <reference path="Sources/Shared/Directives/FormValidation/FormValidation.ts" />
/// <reference path="Sources/Shared/Directives/Sticky/Sticky.ts" />
/// <reference path="Sources/Shared/Filters/PriceOption/PriceOption.ts" />
/// <reference path="Sources/Shared/Filters/TelephoneFormat/TelephoneFormat.ts" />
/// <reference path="Sources/Shared/Helpers/Countries.ts" />
/// <reference path="Sources/Shared/Helpers/GuidGenerator.ts" />
/// <reference path="Sources/Shared/Helpers/States.ts" />
/// <reference path="Sources/Shared/Models/Customer/IApplicationResponse.ts" />
/// <reference path="Sources/Shared/Models/Customer/ICommunicationPreferences.ts" />
/// <reference path="Sources/Shared/Models/Customer/ICustomer.ts" />
/// <reference path="Sources/Shared/Models/Items/IItems.ts" />
/// <reference path="Sources/Shared/Models/Items/IItemsResult.ts" />
/// <reference path="Sources/Shared/Models/Location/IAddress.ts" />
/// <reference path="Sources/Shared/Models/Location/ILocation.ts" />
/// <reference path="Sources/Shared/Models/Location/ILocationAll.ts" />
/// <reference path="Sources/Shared/Models/Location/ILocationShort.ts" />
/// <reference path="Sources/Shared/Models/Location/IRelatedLocation.ts" />
/// <reference path="Sources/Shared/Models/Location/IsubwayLine.ts" />
/// <reference path="Sources/Shared/Models/Order/IOrder.ts" />
/// <reference path="Sources/Shared/Models/Performance/IPerformance.ts" />
/// <reference path="Sources/Shared/Services/Base/ErrorHandlerService.ts" />
/// <reference path="Sources/Shared/Services/Base/ErrorModalService.ts" />
/// <reference path="Sources/Shared/Services/Base/HttpHandlerService.ts" />
/// <reference path="Sources/Shared/Services/Base/LogService.ts" />
/// <reference path="Sources/Shared/Services/Base/SharedService.ts" />
/// <reference path="Sources/Shared/Services/Base/TrackingIDInterceptor.ts" />
/// <reference path="Sources/Shared/Services/Checkout/CheckoutService.ts" />
/// <reference path="Sources/Shared/Services/Environment/EnvironmentService.ts" />
/// <reference path="Sources/Shared/Services/Item/ItemService.ts" />
/// <reference path="Sources/Shared/Services/ShoppingCart/ShoppingCartService.ts" />
/// <reference path="Sources/Components/Base/BaseController.ts" />
/// <reference path="Sources/Components/Checkout/CheckoutController.ts" />
/// <reference path="Sources/Components/HomePage/HomePageController.ts" />
/// <reference path="Sources/Components/Items/ItemsController.ts" />
/// <reference path="Sources/Components/ShoppingCart/ShoppingCartController.ts" />
/// <reference path="Sources/Components/Static/StaticController.ts" />
/// <reference path="app.ts" />
/// <reference path="config.ts" />
//# sourceMappingURL=main.js.map