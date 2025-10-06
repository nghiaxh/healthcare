import mongoose from "mongoose";

const appointmentSchema = mongoose.Schema({
    patient: {
        type: mongoose.Schema.ObjectId,
        ref: "Patient",
    },
    doctor: {
        type: mongoose.Schema.ObjectId,
        ref: "Doctor",
    },
    appointment_date: {
        type: Date,
        required: true,
    },
    reason: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ["booked", "confirmed", "checking", "completed", "rejected"],
        default: "booked"
    }
}, {
    timestamps: true
});