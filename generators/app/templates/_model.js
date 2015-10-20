/**
 * <%= model %> Model
 */

"use strict";

/**
 * Plugins
 */
var timestamps = require("./../plugin/timestamps");
var contributors = require("./../plugin/contributors");

/**
 * Dependencies
 */
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

/**
 * <%= model %> schema
 */
var <%= model %>Schema = new Schema({

});

// Add create and update timestamps to schema
<%= model %>Schema.plugin(timestamps, {
    index: true
});

// Add author/editor to schema
<%= model %>Schema.plugin(contributors, {
    index: true
});

/**
 * @typedef {Model<T>} <%= model %>
 */
module.exports = mongoose.model("<%= model %>", <%= model %>Schema);
