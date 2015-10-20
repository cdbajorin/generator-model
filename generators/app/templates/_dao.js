/**
 * <%= model %> DAO
 */

"use strict";

/**
 * Dependencies
 */
var mongoose = require("mongoose");
var queryBuilder = require("cc-qm").queryBuilder;
var _ = require("lodash");

/**
 * Models
 */
var <%= model %> = mongoose.model("<%= model %>");

/**
 * Create <%= model %>
 *
 * @param <%= document %> {Object}
 * @param next {Function}
 */
exports.create<%= model %> = function (<%= document %>, next) {

    <%= model %>.create(<%= document %>, next);
};

/**
 * Save <%= model %>
 *
 * @param <%= document %> {<%= model %>}
 * @param next {Function}
 */
exports.save<%= model %> = function (<%= document %>, next) {

    <%= document %>.save(next);
};

/**
 * Find <%= model %>
 *
 * @param qm {Object}
 * @param next {Function}
 */
exports.find<%= model %> = function(qm, next) {

    var query = <%= model %>.findOne();
    queryBuilder.buildQuery(query, qm);
    query.exec(next);
};

/**
 * Find <%= pluralModel %>
 *
 * @param qm {Object}
 * @param next {Function}
 */
exports.findAll<%= pluralModel %> = function (qm, next) {

    var query = <%= model %>.find();
    queryBuilder.buildQuery(query, qm);
    query.exec(next);
};

/**
 * Update <%= model %>
 *
 * @param <%= document %>Id {Object}
 * @param update {Object}
 * @param next {function}
 */
exports.update<%= model %> = function (update, next) {

    update.updatedAt = Date.now();

    var <%= document %>Id = update._id;

    // Make sure there is no ID specified in the case updates - Mongo
    // doesn't like updates with an ID in it
    var updateCopy = _.chain(update)
        .cloneDeep()
        .omit("_id")
        .value();

    <%= model %>.update({_id: <%= document %>Id}, updateCopy, { multi: false }, next);
};

/**
 * Delete <%= pluralModel %>
 *
 * @param qm {Object}
 * @param next {Function}
 */
exports.delete<%= pluralModel %> = function (qm, next) {

    var query = <%= model %>.remove();
    queryBuilder.buildQuery(query, qm);
    query.exec(next);
};
