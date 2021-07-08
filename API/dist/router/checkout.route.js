"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoute = void 0;
const checkout_controller_1 = require("../controller/checkout.controller");
class AuthRoute {
    constructor() {
        this.checkoutController = new checkout_controller_1.CheckoutController();
    }
    routes(app) {
        app.post('/fegui_sajusa/api/v1/auth/login', this.checkoutController.createPayment);
    }
}
exports.AuthRoute = AuthRoute;
