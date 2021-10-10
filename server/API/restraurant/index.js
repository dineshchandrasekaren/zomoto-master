import express from "express";
const Router = express.Router();

import { RestaurantModel } from "../../database/allModels";
import { ValidateRestaurantCity, ValidateRestaurantSearchString } from "../../validation/restaurant";
import { ValidateRestaurantId } from '../../validation/food';

/*
Route         /
Descrip       get all restaurant in that city
Params        None
Access        Public
Method        GET
*/

Router.get('/', async (req, res) => {
    try {
        
        const { city } = req.query;
        await ValidateRestaurantCity(city);
        const restaurents = await RestaurantModel.find({ city });
        return res.json({ restaurents });
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
});

/*
Route         /
Descrip       get particular restaurent
Params        _id
Access        Public
Method        GET
*/

Router.get('/:_id', async (req, res) => {
    try {

        const { _id } = req.params;
        await ValidateRestaurantId(_id);
        const restaurent = await RestaurantModel.findone(_id);
        if(!restaurent) return res.status(404).json({error:"Restaurent not found"})
        return res.json({ restaurent });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
});

/*
Route         /search
Descrip       get restaurent based on search string
Params        NONE
BODY          searchString
Access        Public
Method        GET
*/

Router.get("/search", async (req, res) => {
    try {
        const { searchString } = req.body;
        await ValidateRestaurantSearchString(searchString);
        const restaurents = await RestaurantModel.find({
            name: { $regex: searchString, $option: "i" },
        });
        if (!restaurents) return res.status(404).json({ error: `No restaurents matches with this ${searchString}` });

        return res.json({ restaurents });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});
export default Router;