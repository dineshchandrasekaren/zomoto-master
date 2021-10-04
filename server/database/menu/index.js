import mongoose from "mongoose";

const MenuSchema = mongoose.Schema({
    menus: [
        {
            name: { type: String, required: true },
            items: [
                {
                    type: mongoose.Types.ObjectId,
                    ref: "Foods"
                },
            ],
        },
    ],
    recommandation: [{
        type: mongoose.Types.ObjectId,
        ref: "Foods",
        unique:true,
    },],
}, {
    timestamps: true,
});

export const MenuModel = mongoose.model("Menu", MenuSchema);



