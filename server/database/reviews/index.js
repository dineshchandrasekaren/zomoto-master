import mongoose from "mongoose";

const ReviewSchema = mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref:"User"
    },
    rating: { type: Number, required: true },
    food: { type: mongoose.Types.ObjectId, ref: "Foods" },
    restaurant: { type: mongoose.Types.ObjectId, ref: "Restaurants" },
    reviewText: { type: String, required: true },
    photos: [
        {
            type: mongoose.Types.ObjectId,
            ref:"Users"
        }
    ],},{
        timestamps: true,
    });

export const ReviewModel = mongoose.model("Reviews", ReviewSchema);



