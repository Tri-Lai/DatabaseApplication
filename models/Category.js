const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    parent: {
        type: String,
        required: false,
        default: null
    },
    attributes: [
        {
            "name": {
                type: String,
                required: true
            }
        }
    ]
    
}
, {
    collection: "categories"
}
// , {
//     versionKey: false
// }
);

const categoryModel = model("Category", categorySchema);

// await categoryModel.createCollection();

module.exports = categoryModel;