import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            min: 2,
            max: 50,
        },
        lastName: {
            type: String,
            required: true,
            min: 2,
            max: 50,
        },
        email: {
            type: String,
            required: true,
            min: 2,
            max: 50,
            unique: true
        },
        pasword: {
            type: String,
            require: true,
            min: 5,
            max: 50,
        },
        picturePath: {
            type: String,
            default: ""
        },
        location: String,
        occupation: String,
        ViewProfile: Number,
        impressions: Number, 
}, { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;
