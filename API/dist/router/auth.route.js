"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoute = void 0;
const auth_controller_1 = require("../controller/auth.controller");
class AuthRoute {
    constructor() {
        this.auth = new auth_controller_1.Auth();
    }
    routes(app) {
        app.post('/fegui_sajusa/api/v1/:name/auth/login', this.auth.login);
        app.post('/fegui_sajusa/api/v1/register', this.auth.register);
    }
}
exports.AuthRoute = AuthRoute;
