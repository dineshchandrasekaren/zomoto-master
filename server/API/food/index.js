import express from 'express';
import { FoodModel } from '../../database/allModels';
import { ValidateRestaurantId , ValidateCategory} from '../../validation/food';

const Router = express.Router();

/* ROUTE          /r
   ACCESS         PUBLIC
   PARAMS         id
   description    get all Foods based on restaurant 
   method         GET              */

Router.get('/r/:_id', async(req, res) => {
    try {
        await ValidateRestaurantId(req.params._id);
        const { _id } = req.params;
        const foods = await FoodModel.find({ restaurant: _id });
        return res.json({ foods });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/* ROUTE          /c
   ACCESS         PUBLIC
   PARAMS         id
   description    get all Foods based on category 
   method         GET              */

Router.get('/c/:category',async (req, res) => {
    try {
        await ValidateCategory(req.params.category);
        const {category } = req.params;
        const foods = await FoodModel.find({ category });
        return res.json({ foods });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;