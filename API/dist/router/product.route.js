"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoute = void 0;
const product_controller_1 = require("../controller/product.controller");
const customer_1 = require("../middleware/customer");
const admin_1 = require("../middleware/admin");
class ProductRoute {
    constructor() {
        this.productController = new product_controller_1.ProductController();
    }
    routes(app) {
        /*Esto es publico*/
        //Categorias de los productos
        app.get('/fegui_sajusa/api/v1/categories', this.productController.categories);
        //Listado de productos en base a la categoria
        app.get('/fegui_sajusa/api/v1/categories/:name/products', this.productController.products);
        //Muestra el producto
        app.get('/fegui_sajusa/api/v1/products/:id', this.productController.Byid);
        /*Esto es para el administrador*/
        //Creando el producto
        app.post('/fegui_sajusa/api/v1/products', [admin_1.employeeJWT], this.productController.create);
        //Actualizando el producto
        app.patch('/fegui_sajusa/api/v1/products/:id', [admin_1.employeeJWT], this.productController.update);
        //Eliminando el producto
        app.patch('/fegui_sajusa/api/v1/products/:id', [admin_1.employeeJWT], this.productController.deleteByid);
        /*Esto es para el cliente*/
        app.patch('/fegui_sajusa/api/v1/checkout/products/:id', [customer_1.customerJWT], this.productController.update);
        //Lista de productos a comprar
        app.patch('/fegui_sajusa/api/v1/checkout/products/:id', [customer_1.customerJWT], this.productController.update);
    }
}
exports.ProductRoute = ProductRoute;
