import { Router,Application } from "express";

import {AuthController} from '../controller/auth.controller';

export class AuthRoute{
    public authController: AuthController = new AuthController();

    public routes(app:Application):void{
        
        app.post('/fegui_sajusa/api/v1/customers/auth/login', this.authController.loginCustomer);
        app.post('/fegui_sajusa/api/v1/customers/register-info', this.authController.registerCustomer);
    }
}