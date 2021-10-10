//env variable
require("dotenv").config();

import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import passport from 'passport';


//API
import { Auth, Food, Menu, Image, Order, Restraurant, Reviews, Payment,User } from './API/allAPI';

//config
import googleConfig from './config/google.config';

//Database connection
import connectDB from './database/connectDB';

const zomoto = express();

//Middlewares
zomoto.use(express.json());
zomoto.use(express.urlencoded({ extended: false }));
zomoto.use(cors());
zomoto.use(helmet());
zomoto.use(passport.initialize());
zomoto.use(passport.session());


//google Auth Configuration
googleConfig(passport);

//Microservices
zomoto.use('/auth', Auth);
zomoto.use('/food', Food);
zomoto.use('/order', Order);
zomoto.use('/menu', Menu);
zomoto.use('/image', Image);
zomoto.use('/restaurant', Restraurant);
zomoto.use('/reviews', Reviews);
zomoto.use('/payment', Payment);
zomoto.use('/user', User);



zomoto.listen(4000, () =>
    connectDB().then(() => console.log('server is running 🚀')).catch(() => console.log('server is running 🚀 , but database was not connected 😓'))
);