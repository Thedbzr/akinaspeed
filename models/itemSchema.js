const Schema = require('mongoose').Schema;

const itemSchema = new Schema({
    name: {type: String, required: true},
    brand: {type: String, required: true},
    description: {type: String, required: true},
    sku: {type: String, required: true},
    url: {type: String, required: true},
    category: {type: Schema.Types.ObjectId, ref: 'Category'},
    price: { type: Number, required: true, default: 0 }

},{
    timestamps: true
});

module.exports = itemSchema;