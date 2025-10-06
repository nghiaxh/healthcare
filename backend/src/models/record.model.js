import mongoose from "mongoose";

const recordSchema = mongoose.Schema({
    appointment: {
        type: mongoose.Schema.ObjectId,
        ref: "Appointment"
    },
    patient: {
        type: mongoose.Schema.ObjectId,
        ref: "Patient"
    },
    doctor: {
        type: mongoose.Schema.ObjectId,
        ref: "Doctor"
    },
    description: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
});

const Record = mongoose.model("Record", recordSchema);

export default Record;