import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import user from "../models/users.js"

/* register user */

export const register = async (req, res) => {
    try{
        const { firstName, 
                lastName, 
                email, 
                password, 
                picturePath, 
                friends,
                location,
                ocuppation,
                 } = req.body;

        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new user({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            picturePath,
            friends,
            location,
            ocuppation,
            viewedProfile: Math.floor(Math.random() * 10000),
            impressions: Math.floor(Math.random() * 10000),
        });

        const savedUser = await newUser.save();
        res.status(201).json(savedUser);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}