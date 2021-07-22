import { Router,Application } from "express";

import {Auth} from '../controller/auth.controller';

export class AuthRoute{
    public auth: Auth = new Auth();

    public routes(app:Application):void{
        
        app.post('/fegui_sajusa/api/v1/:name/auth/login', this.auth.login);
        app.post('/fegui_sajusa/api/v1/register', this.auth.register);
    }
}