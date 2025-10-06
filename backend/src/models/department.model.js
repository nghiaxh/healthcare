import mongoose from "mongoose";

const departmentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    chief: {
        type: mongoose.Schema.ObjectId,
        ref: "Doctor"
    }
}, {
    timestamps: true
});

const Department = mongoose.model("Department", departmentSchema);

export default Department;