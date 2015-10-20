"use strict";
var yeoman = require("yeoman-generator");
var yosay = require("yosay");

module.exports = yeoman.generators.Base.extend({

    prompting: function() {
        var done = this.async();

        this.log(yosay(
            "Generate model files:"
        ));

        var prompts = [{
            name: "modelInput",
            message: "What model would you like to add (use spaces for multiple words)?",
            default: ""
        }, {
            name: "customPluralInput",
            message: "Non-standard pluralization?",
            default: ""
        }];

        this.prompt(prompts, function(props) {

            var modelInput = props.modelInput.toLowerCase();

            var hasCustomPlural = false;
            if (props.customPluralInput && props.customPluralInput.length) {
                hasCustomPlural = true;
            }

            var customPlural;
            if (hasCustomPlural) {
                customPlural = props.customPluralInput.toLowerCase();
            }

            var model;
            var document;
            var pluralModel;
            var pluralDoc;

            if (!modelInput.length) {
                model = "User";
                pluralModel = "Users";
                document = "user";
                pluralDoc = "users";
            }
            else {

                model = buildModelName(modelInput);
                document = buildDocumentName(model);

                if (hasCustomPlural) {
                    pluralModel = buildModelName(customPlural);
                    pluralDoc = buildDocumentName(pluralModel);
                }
                else {
                    pluralModel = model + "s";
                    pluralDoc = model + "s";
                }
            }

            this.lower = model.toLowerCase();
            this.pluralLower = pluralModel.toLowerCase();
            this.model = model;
            this.document = document;
            this.pluralModel = pluralModel;
            this.pluralDocument = pluralDoc;
            this.service = document + "Service";
            this.dao = document + "DAO";
            done();
        }.bind(this));
    },

    renderTemplates: function() {

        var m = this.model.toLowerCase();

        // Back end
        this.template("_dao.js", "lib/" + m + "/" + m + "dao.js");
        this.template("_service.js", "lib/" + m + "/" + m + "service.js");
        this.template("_webcontroller.js", "lib/" + m + "/" + m + "webcontroller.js");
        this.template("_model.js", "lib/" + m + "/" + m + ".js");

        // Front End
        this.template("_ng-dao.js", "app/scripts/" + m + "/" + m + "dao.js");
        this.template("_ng-service.js", "app/scripts/" + m + "/" + m + "service.js");
        this.template("_ng-formcontroller.js", "app/scripts/" + m + "/" + m + "formcontroller.js");
        this.template("_ng-app.js", "app/scripts/" + m + "/" + m + "app.js");
    }
});


function buildModelName(input) {

    var words = input.split(" ");
    var model = "";
    words.forEach(function(word) {
        model += capitalize(word);
    });
    return model;
}

function buildDocumentName(modelName) {

    return modelName[0].toLowerCase() + modelName.substr(1);
}

function capitalize(word) {
    var lowercased = word.toLowerCase();
    return lowercased[0].toUpperCase() + lowercased.substr(1);
}
