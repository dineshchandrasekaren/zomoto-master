import express from 'express';

const Router = express.Router();

import { MenuModel, ImageModel } from '../../database/allModels';
import { ValidateRestaurantId } from '../../validation/food';

/* ROUTE          /list
   ACCESS         PUBLIC
   PARAMS         id
   description    get all menu based on restaurant
   method         GET              */

Router.get('/list/:_id',async (req, res) => {
    try {
        const { _id } = req.params;
        await ValidateRestaurantId(_id);
        const menus = await MenuModel.findOne(_id);
        return res.json({ menus });  
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/* ROUTE          /image
   ACCESS         PUBLIC
   PARAMS         id
   description    get all menu images based on restaurantid
   method         GET              */

Router.get('/image/:_id', async (req, res) => {
    try {
        const { _id } = req.params;
        await ValidateRestaurantId(_id);
        const menus = await ImageModel.findOne(_id);
        return res.json({ menus });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;