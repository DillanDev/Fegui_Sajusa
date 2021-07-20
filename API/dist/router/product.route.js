"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoute = void 0;
const product_controller_1 = require("../controller/product.controller");
const jwt_1 = require("../middleware/jwt");
class ProductRoute {
    constructor() {
        this.productController = new product_controller_1.ProductController();
    }
    routes(app) {
        app.get('/fegui_sajusa/api/v1/categories', this.productController.categories);
        app.get('/fegui_sajusa/api/v1/categories/:name/products', this.productController.products);
        app.get('/fegui_sajusa/api/v1/products/:id', this.productController.Byid);
        // //Creando
        app.post('/fegui_sajusa/api/v1/customers', this.productController.create);
        // //Actualizando
        app.patch('/fegui_sajusa/api/v1/customers/:id', [jwt_1.checkJwt], this.productController.update);
        // //Desactivando
        app.patch('/fegui_sajusa/api/v1/delete/:id/customers', [jwt_1.checkJwt], this.productController.deleteByid);
    }
}
exports.ProductRoute = ProductRoute;
