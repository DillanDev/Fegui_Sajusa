"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoute = void 0;
const auth_controller_1 = require("../controller/auth.controller");
class AuthRoute {
    constructor() {
        this.authController = new auth_controller_1.AuthController();
    }
    routes(app) {
        app.post('/fegui_sajusa/api/v1/customers/auth/login', this.authController.loginCustomer);
        app.post('/fegui_sajusa/api/v1/customers/register-info', this.authController.registerCustomer);
    }
}
exports.AuthRoute = AuthRoute;
