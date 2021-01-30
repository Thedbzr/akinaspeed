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

orderSchema.virtual('orderTotal').get(function () {
    return this.lineItems.reduce((total, item) => total + item.extPrice, 0);
})

orderSchema.virtual('totalQty').get(function (){
    return this.lineItems.reduce((total, item) => total + ittem.qty, 0);
})

orderSchema.virtual('orderId'.get(function (){
    return this.id.slice(-6).toUpperCase();
}))

orderSchema.statics.getCart = async function (userId){
    return this.findOneandUpdate(
        {user: userId, isPaid: false},
        {user: userId},
        //creates the doc if it doesnt exist
        {upsert: true, new: true}
    );
};

//method to add to cart (unpaid order)
orderSchema.methods.addItemToCart = async function (itemId){
    const cart = this;
    const lineItem = cart.lineItems.find(lineItem => lineItem.item._id.equals(itemId))
    if(lineItem){
        lineItem.qty += 1;
    } else {
        const item = await mongoose.model('Item').findById(itemId);
        cart.lineItems.push({item});
    }
    //return save method promise
    return cart.save();
}

orderSchema.methods.setItemQty = async function (itemId, newQty){
    const cart = this;

    const lineItem = cart.lineItems.find(lineItem => lineItem.item._id.equals(itemId));
    if(lineItem && newQty <= 0){
        //dont want negative or 0 line item listed in order
        lineItem.remove();
    } else if(lineItem){
        lineItem.qty = newQty;
    }
    return cart.save();
};

module.exports = mongoose.model('Order', orderSchema);