/**
 * <%= model %> Form Controller
 */

(function() {

    "use strict";

    var <%= model %>FormController = function($scope, $state,
                                              ROUTES,
                                              FormService, <%= model %>Service,
                                              <%= document %>) {

        init();

        /**
         * Create New <%= model %>
         */
        $scope.create<%= model %> = function () {

            $scope.formState.submitted = true;

            if ($scope.form.$valid) {

                $scope.formState.debounce = true;

                <%= model %>Service.create<%= model %>($scope.<%= document %>, function () {

                    $state.go(ROUTES.TERM_INDEX);
                }, FormService.getErrorHandler($scope.formState));
            }
        };

        /**
         * Update <%= model %>
         */
        $scope.update<%= model %> = function () {

            $scope.formState.submitted = true;

            if ($scope.form.$valid) {

                $scope.formState.debounce = true;

                <%= model %>Service.update<%= model %>($scope.<%= document %>, function () {

                    $state.go(ROUTES.TERM_INDEX);
                }, FormService.getErrorHandler($scope.formState));
            }
        };

        /**
         * Returns true if specified field has error
         *
         * @param fieldName{String}
         * @returns {boolean}
         */
        $scope.isHasRequiredError = function (fieldName) {

            return $scope.formState.submitted && $scope.form[fieldName].$error.required;
        };

        /**
         * Returns true if there is a server side error for the specified field
         *
         * @param fieldName {string}
         * @returns {boolean}
         */
        $scope.isHasValidationError = function (fieldName) {

            return !!($scope.formState &&
            $scope.formState.errors &&
            $scope.formState.errors[fieldName]);
        };


        /**
         * PRIVATES
         */

        /**
         * Initialize controller
         */
        function init() {

            $scope.formState = FormService.initFormState(<%= document %>);

            $scope.<%= document %> = <%= document %> || {};
        }
    }

    angular.module("<%= document %>App").controller("<%= model %>FormController", <%= model %>FormController);

})();
