import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const Router = express.Router();

import { UserModel } from '../../database/allModels';
import passport from 'passport';

/* ROUTE          /signup
   ACCESS         PUBLIC
   PARAMS         NONE
   description    to signup user
   method         GET              */

Router.post("/signup", async (req, res) => {
   try {

      await UserModel.findByPhoneAndEmail(req.body.credentials)

      const newUser = await UserModel.create(req.body.credentials);
      const token = newUser.generateJwtToken();


      return res.status(200).json({ token });

   } catch (error) {
      return res.status(500).json({ error: error.message });
   }
});
/* ROUTE          /signin
   ACCESS         PUBLIC
   PARAMS         NONE
   description    to signin user
   method         GET              */

Router.post("/signin", async (req, res) => {
   try {
      const user = await UserModel.findByEmailAndPassword(req.body.credentials);

      const token = user.generateJwtToken();


      return res.status(200).json({ token });

   } catch (error) {
      return res.status(500).json({ error: error.message });
   }
});
/*
Route         /google
Descrip       Google Signin
Params        None
Access        Public
Method        GET
*/

Router.get("/google", passport.authenticate("google", {
   scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email"
   ],
}
)
);

/*
Route         /google/callback
Descrip       Google Signin callback
Params        None
Access        Public
Method        GET
*/

Router.get("/google/callback", passport.authenticate("google", { failureRedirect: "/" }),
   (req, res) => {
      return res.json({ token: req.session.passport.user.token });
   }
);



export default Router;