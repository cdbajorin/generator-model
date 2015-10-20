/**
 * <%= model %> Service
 */

"use strict";

/**
 * Dependencies
 */
var QueryModel = require("cc-qm").QueryModel;

/**
 * DAOs
 */
var <%= dao %> = require("./<%= lower %>dao");

/**
 * Create <%= model %>
 *
 * @param <%= document %> {Object}
 * @param next {Function}
 */
function create<%= model %>(<%= document %>, next) {

    <%= dao %>.create<%= model %>(<%= document %>, next);
}
exports.create<%= model %> = create<%= model %>;

/**
 * Find <%= model %> QM
 *
 * @param qm {QueryModel}
 * @param next {Function}
 */
function find<%= model %> (qm, next) {

    <%= dao %>.find<%= model %>(qm, next);
}
exports.find<%= model %> = find<%= model %>;

/**
 * Find <%= model %> by ID
 *
 * @param <%= document %>Id {string|ObjectId}
 * @param next {Function}
 */
function find<%= model %>ById(<%= document %>Id, next) {

    var qm = new QueryModel();
    qm.addEqualsQueryFilter("_id", <%= document %>Id);
    find<%= model %>(qm, next);
}
exports.find<%= model %>ById = find<%= model %>ById;

/**
 * Find <%= pluralModel %> QM
 *
 * @param qm {Object} QueryModel
 * @param next {Function} Callback
 */
function findAll<%= pluralModel %>(qm, next) {

    <%= dao %>.findAll<%= pluralModel %>(qm, next);
}
exports.findAll<%= pluralModel %> = findAll<%= pluralModel %>;

/**
 * Update <%= model %>
 *
 * @param <%= document %> {<%= model %>}
 * @param next {Function}
 */
function save<%= model %>(<%= document %>, next) {

<%= dao %>.save<%= model %>(<%= document %>, next);
}
exports.save<%= model %> = save<%= model %>;

/**
 * Update <%= model %>
 *
 * @param update {Object}
 * @param next {Function}
 */
function update<%= model %>(update, next) {

    <%= dao %>.update<%= model %>(update, next);
}
exports.update<%= model %> = update<%= model %>;

/**
 * Delete <%= pluralModel %>
 *
 * @param qm {Object}
 * @param next {Function}
 */
function delete<%= pluralModel %>(qm, next) {

    <%= dao %>.delete<%= pluralModel %>(qm, next);
}
exports.delete<%= pluralModel %> = delete<%= pluralModel %>;
