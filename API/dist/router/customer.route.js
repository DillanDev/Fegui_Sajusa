"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerRoute = void 0;
const customer_controller_1 = require("../controller/customer.controller");
const jwt_1 = require("../middleware/jwt");
class CustomerRoute {
    constructor() {
        this.customerController = new customer_controller_1.CustomerController();
    }
    routes(app) {
        //Cliente
        app.get('/fegui_sajusa/api/v1/customers', this.customerController.index);
        app.get('/fegui_sajusa/api/v1/customers/:id', this.customerController.Byid);
        app.patch('/fegui_sajusa/api/v1/customers/:id', [jwt_1.checkJwt], this.customerController.update);
        app.patch('/fegui_sajusa/api/v1/delete/:id/customers', [jwt_1.checkJwt], this.customerController.deleteByid);
        //Metodo de pago
        app.post('/fegui_sajusa/api/v1/customers/:id/payments', [jwt_1.checkJwt], this.customerController.createPayment);
        app.get('/fegui_sajusa/api/v1/customers/:id/payments', [jwt_1.checkJwt], this.customerController.ByidPayment);
        app.patch('/fegui_sajusa/api/v1/customers/payments/:id', [jwt_1.checkJwt], this.customerController.updatePayment);
        app.delete('/fegui_sajusa/api/v1/customers/payments/:id', [jwt_1.checkJwt], this.customerController.deleteByidPayment);
        //Envío
        app.post('/fegui_sajusa/api/v1/customers/:id/orders', [jwt_1.checkJwt], this.customerController.createPayment);
        app.get('/fegui_sajusa/api/v1/customers/:id/orders', [jwt_1.checkJwt], this.customerController.ByidPayment);
        app.patch('/fegui_sajusa/api/v1/customers/orders/:id', [jwt_1.checkJwt], this.customerController.updatePayment);
        app.delete('/fegui_sajusa/api/v1/customers/orders/:id', [jwt_1.checkJwt], this.customerController.updatePayment);
        //Details
        app.get('/fegui_sajusa/api/v1/customers/:id/orders', [jwt_1.checkJwt], this.customerController.ByidPayment);
        //Carrito
        app.post('/fegui_sajusa/api/v1/customers/:id/cart', [jwt_1.checkJwt], this.customerController.cart);
    }
}
exports.CustomerRoute = CustomerRoute;
