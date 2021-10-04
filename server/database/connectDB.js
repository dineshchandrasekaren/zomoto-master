require("dotenv").config();
import mongoose from "mongoose";


export default async () => mongoose.connect(process.env.MONGOURL);