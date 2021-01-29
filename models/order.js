const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const itemSchema = require('./itemSchema');

const lineItemSchema = new Schema({
    //set qty to 1 when pushed into lineitems
    qty: {type: Number, default: 1},
    item: itemSchema
}, {
    timestamps: true,
    //Virtual Property sent over JSON
    toJSON: { virtuals: true}
});

lineItemSchema.virtual('extPrice').get(function(){
    return this.qty * this.item.price;
})

const orderSchema = new Schema({
    //assigns an order to a user
    user:{ type: Schema.Types.ObjectId, ref: 'User'},
    lineItems: [lineItemSchema],
    isPaid: {type: Boolean, default: false},

}, {
    timestamps: true,
    toJSON: { virtuals: true }
});

const orderSchema.virtual(orderTotal).get(function () {
    return this.lineItems.reduce((total, item) => total + item.extPrice, 0);
})