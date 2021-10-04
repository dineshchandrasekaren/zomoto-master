import mongoose from "mongoose";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const UserSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: [{ type: Number }],
    password: { type: String },
    address: [{ detail: { type: String }, for: { type: String } }],
}, {
    timestamps: true,
});

UserSchema.methods.generateJwtToken = function () {
    return jwt.sign({ user: this._id.toString() }, 'ZomotoApp');
};

UserSchema.statics.findByPhoneAndEmail = async ({ phoneNumber, email }) => {
    const checkByPhone = await UserModel.findOne({ phoneNumber });
    const checkByEmail = await UserModel.findOne({ email });
    if (checkByEmail || checkByPhone) return new Error('User Already Exists');

    return false;
};

UserSchema.statics.findByEmailAndPassword = async ({ email, password }) => {
    const checkByEmail = await UserModel.findOne({ email });
    if (!checkByEmail) throw new Error('User not Found');

    const checkByPassword = await bcrypt.compare(password, checkByEmail.password);
    if (!checkByPassword) throw new Error('password was incorrect');

    return checkByEmail;

}

UserSchema.pre('save', function (next) {
    const user = this;
    if (user.isModified('password')) return next();

    bcrypt.genSalt(8, (error, salt) => {
        if (error) return next(error);

        bcrypt.hash(user.password, salt, (error, hash) => {
            if (error) return next(error);

            user.password = hash;
            return next();
        });
    });
});

export const UserModel = mongoose.model("Users", UserSchema);



