/**
 * <$%= model %> Service
 */

(function() {

    "use strict";

    var <%= model %>Service = function(<%= model %>DAO, QMService) {

        return {

            /**
             * Create <%= model %>
             *
             * @param <%= document %> {Object}
             * @param next {Function}
             * @returns {$promise|*}
             */
            create<%= model %>: function (<%= document %>, next) {

                next = next || angular.noop;

                return <%= model %>DAO.create<%= model %>(<%= document %>, next).$promise;
            },

            /**
             * Find <%= model %> By ID
             *
             * @param id {string}
             * @param next {Function}
             * @returns {$promise|*}
             */
            find<%= model %>ById: function (id, next) {

                next = next || angular.noop;

                return <%= model %>DAO.find<%= model %>ById({
                    id: id
                }, next).$promise;
            },

            /**
             * Find All <%= pluralModel %> QM
             *
             * @param qm {Object}
             * @param next {Function}
             * @returns {$promise|*}
             */
            findAll<%= pluralModel %>: function (qm, next) {

                next = next || angular.noop;

                return <%= model %>DAO.findAll<%= pluralModel %>(qm.asQuery(), next).$promise;
            },

            /**
             * Update <%= model %>
             *
             * @param <%= document %> {Object}
             * @param next {Function}
             * @returns {$promise|*}
             */
            update<%= model %>: function(<%= document %>, next) {

                next = next || angular.noop;

                return <%= model %>DAO.update<%= model %>(<%= document %>, next).$promise;
            },

            /**
             * Delete <%= model %>
             *
             * @param id {string}
             * @param next {Function}
             * @returns {$promise|*}
             */
            delete<%= model %>: function(id, next) {

                next = next || angular.noop;

                return <%= model %>DAO.delete<%= model %>({
                    id: id
                }, next).$promise;
            }
        };
    };

    angular.module("<%= document %>App").factory("<%= model %>Service", <%= model %>Service);

})();
