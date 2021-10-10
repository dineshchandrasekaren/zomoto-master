import express from 'express';

const Router = express.Router();

import { OrderModel } from '../../database/allModels';

/*
Route         /
Descrip       get order based on user id
Params        NONE
Access        Public
Method        GET
*/

Router.get("/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        const orderDetails = await OrderModel.find({ user: _id });
        res.status(200).json({ orderDetails });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
Route         /
Descrip       create new order to particular user id
Params        NONE
Access        Public
Method        POST
*/

Router.post("/new/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        const { orderDetails } = req.body;
        const addNewOrder = await OrderModel.findOneAndUpdate(
            { user: _id },
            {
                $push: {orderDetails}
            },
            { new: true });
        res.status(200).json({ order:addNewOrder});
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});


export default Router;