"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerRoute = void 0;
const customer_controller_1 = require("../controller/customer.controller");
const customer_1 = require("../middleware/customer");
class CustomerRoute {
    constructor() {
        this.customerController = new customer_controller_1.CustomerController();
    }
    routes(app) {
        //Cliente
        app.get('/fegui_sajusa/api/v1/customers', this.customerController.index);
        app.get('/fegui_sajusa/api/v1/customers/:id', this.customerController.Byid);
        app.patch('/fegui_sajusa/api/v1/customers/:id', [customer_1.customerJWT], this.customerController.update);
        app.patch('/fegui_sajusa/api/v1/delete/:id/customers', [customer_1.customerJWT], this.customerController.deleteByid);
        //Metodo de pago
        app.post('/fegui_sajusa/api/v1/customers/:id/payments', [customer_1.customerJWT], this.customerController.createPayment);
        app.get('/fegui_sajusa/api/v1/customers/:id/payments', [customer_1.customerJWT], this.customerController.ByidPayment);
        app.patch('/fegui_sajusa/api/v1/customers/payments/:id', [customer_1.customerJWT], this.customerController.updatePayment);
        app.delete('/fegui_sajusa/api/v1/customers/payments/:id', [customer_1.customerJWT], this.customerController.deleteByidPayment);
        //Envío
        app.post('/fegui_sajusa/api/v1/customers/:id/orders', [customer_1.customerJWT], this.customerController.createPayment);
        app.get('/fegui_sajusa/api/v1/customers/:id/orders', [customer_1.customerJWT], this.customerController.ByidPayment);
        app.patch('/fegui_sajusa/api/v1/customers/orders/:id', [customer_1.customerJWT], this.customerController.updatePayment);
        app.delete('/fegui_sajusa/api/v1/customers/orders/:id', [customer_1.customerJWT], this.customerController.updatePayment);
        //Details
        app.get('/fegui_sajusa/api/v1/customers/:id/orders', [customer_1.customerJWT], this.customerController.ByidPayment);
        //Carrito
        app.post('/fegui_sajusa/api/v1/customers/:id/cart', [customer_1.customerJWT], this.customerController.cart);
    }
}
exports.CustomerRoute = CustomerRoute;
