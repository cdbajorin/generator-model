/**
 * <%= model %> DAO
 */

(function() {

    "use strict";

    var <%= model %>DAO = function ($resource) {

        return $resource("/api/<%= pluralLower %>/:id", {
            id: "@id"
        }, {
            find<%= model %>ById: {
                method:"GET",
                url: "/api/<%= pluralLower %>/:id",
                isArray: false
            },
            findAll<%= pluralModel %>: {
                method: "GET",
                url: "/api/<%= pluralLower %>",
                isArray: true
            },
            create<%= model %>: {
                method: "POST",
                url: "/api/<%= pluralLower %>"
            },
            updated<%= model %>: {
                method: "PUT",
                url: "/api/<%= pluralLower %>/:id"
            }
        });
    };

    angular.module("<%= document %>App").factory("<%= model %>DAO", <%= model %>DAO);

})();
