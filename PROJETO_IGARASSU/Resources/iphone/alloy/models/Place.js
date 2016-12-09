var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

exports.definition = {
    config: {
        columns: {
            id: "integer",
            place_type: "integer",
            place_name: "text",
            description_pt: "text",
            description_eng: "text",
            description_esp: "text",
            price: "real",
            address: "text",
            district: "text",
            phone: "text",
            photo: "text",
            placelat: "real",
            placelong: "real"
        },
        adapter: {
            type: "sql",
            collection_name: "places"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

model = Alloy.M("place", exports.definition, []);

collection = Alloy.C("place", exports.definition, model);

exports.Model = model;

exports.Collection = collection;