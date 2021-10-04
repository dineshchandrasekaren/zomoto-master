import mongoose from "mongoose";

const FoodSchema = mongoose.Schema({
    name: { type: String, required: true },
    isVeg: { type: Boolean, required: true },
    isEgg: { type: Boolean, required: true },
    desc: { type: String, required: true },
    category: { type: String, required: true },
    photo: {
        type: mongoose.Types.ObjectId,
        ref:"Images",
    },
    price: { type: Number, default: 120, required: true },
    addOns: [{ type: mongoose.Types.ObjectId, ref: "Food" }],
    restaurant:{type:mongoose.Types.ObjectId,ref:"Restaurant",required:true}
}, {
    timestamps: true,
});

export const FoodModel = mongoose.model("Foods", FoodSchema);



