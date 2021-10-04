//env variable
require("dotenv").config();

import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import passport from 'passport';

//API
import Auth from './API/Auth';

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


zomoto.listen(4000, () =>
    connectDB().then(() => console.log('server is running 🚀')).catch(() => console.log('server is running 🚀 , but database was not connected 😓'))
);