/**
 * <%= model %> Controller
 */

"use strict";

/**
 * Dependencies
 */
var ccExpressUtils = require("cc-express-utils");
var QueryModel = require("cc-qm").QueryModel;

/**
 * Services
 */
var <%= service %> = require("./<%= lower %>service");


/**
 * Create a <%= model %>
 *
 * @param req
 * @param res
 */
exports.create<%= model %> = function (req, res) {

    var <%= document %> = req.body;
    <%= document %>.createdBy = req.user._id;
    <%= document %>.updatedBy = req.user._id;

    <%= service %>.create<%= model %>(<%= document %>, ccExpressUtils.setupResponseCallback(res));
};

/**
 * Find <%= model %> QM
 *
 * @param req
 * @param res
 */
exports.find<%= model %> = function (req, res) {

    var qm = new QueryModel(req);
    <%= service %>.find<%= model %>(qm, ccExpressUtils.setupResponseCallback(res));
};

/**
 * Find <%= model %> by ID
 *
 * @param req
 * @param res
 */
exports.find<%= model %>ById = function (req, res) {

    var <%= document %>Id = req.params.id;
    <%= service %>.find<%= model %>ById(<%= document %>Id, ccExpressUtils.setupResponseCallback(res));
};

/**
 * Find multiple <%= pluralModel %> by QM
 *
 * @param req
 * @param res
 */
exports.findAll<%= pluralModel %> = function (req, res) {

    var qm = new QueryModel(req);
    <%= service %>.findAll<%= pluralModel %>(qm, ccExpressUtils.setupResponseCallback(res));
};

/**
 * Update <%= model %>
 *
 * @param req {Object}
 * @param res {Object}
 */
exports.update<%= model %> = function (req, res) {

    var update = req.body;
    <%= service %>.update<%= model %>(req.user.id, update, ccExpressUtils.setupResponseCallback(res));
};
