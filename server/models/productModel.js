import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    dateCreated: { type: Date, default: Date.now }, 
    warranty: { type: Number, required: true },
    price: { type: Number, required: true },
    isAvailable: { type: Boolean, default: true },
    image: { type: String, trim: true },
    desc: { type: String, required: true, trim: true }
});

const Product = mongoose.model('Product', productSchema);
export default Product;
