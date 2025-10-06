import mongoose from "mongoose";

const doctorSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    username: {
        type: String,
        trim: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    gender: {
        type: Boolean,
        required: true,
    },
    specialty: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: "doctor",
    }
}, {
    timestamps: true
});

const Doctor = mongoose.model("Doctor", doctorSchema);

export default Doctor;