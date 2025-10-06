import mongoose from "mongoose";

const medicineSchema = mongoose.Schema({
    // ten thuoc
    name: {
        type: String, required: true
    },
    // nhom thuoc
    group: {
        type: String, required: true
    },
    // gia ban
    price: {
        type: Number, required: true
    },
    // don vi
    unit: {
        type: String,
        enum: ["pill", "box"]
    }
}, {
    timestamps: true
});

const Medicine = mongoose.model("Medicine", medicineSchema);

export default Medicine;