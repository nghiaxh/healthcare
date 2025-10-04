import mongoose from "mongoose";

const staffSchema = mongoose.Schema({
    name: {
        type: String,
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
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: "staff"
    }
}, {
    timestamps: true
});

const Staff = mongoose.model("Staff", staffSchema);

export default Staff;