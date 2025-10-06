import mongoose from "mongoose";

const billSchema = mongoose.Schema({
    patient: {
        type: mongoose.Schema.ObjectId,
        ref: "Patient",
    },
    record: {
        type: mongoose.Schema.ObjectId,
        ref: "Record"
    },
    doctor: {
        type: mongoose.Schema.ObjectId,
        ref: "Doctor"
    },
    payment_date: {
        type: Date,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ["pending", "paid"],
        default: "pending"
    }
}, {
    timestamps: true
});

const Bill = mongoose.model("Bill", billSchema);

export default Bill;