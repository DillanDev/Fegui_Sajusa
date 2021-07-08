"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoute = void 0;
const product_controller_1 = require("../controller/product.controller");
class ProductRoute {
    constructor() {
        this.productController = new product_controller_1.ProductController();
    }
    routes(app) {
        app.get('/fegui_sajusa/api/v1/categories', this.productController.categories);
        app.get('/fegui_sajusa/api/v1/categories/:name/products', this.productController.products);
        // app.get('/fegui_sajusa/api/v1/customers/:id',  this.customerController.Byid );
        // //Creando
        // // app.post('/fegui_sajusa/api/v1/customers',  this.customerController.create );
        // //Actualizando
        // app.patch('/fegui_sajusa/api/v1/customers/:id',[checkJwt],  this.customerController.update );
        // //Desactivando
        // app.patch('/fegui_sajusa/api/v1/delete/:id/customers',[checkJwt],  this.customerController.deleteByid );
    }
}
exports.ProductRoute = ProductRoute;
