import { Application } from "express";

import { ProductController } from "../controller/product.controller";
import { customerJWT } from "../middleware/customer";
import { employeeJWT } from "../middleware/admin";

export class ProductRoute{
    
    public productController: ProductController = new ProductController();

    public routes(app:Application){
        
        /*Esto es publico*/
        //Categorias de los productos
        app.get('/fegui_sajusa/api/v1/categories',  this.productController.categories );
        //Listado de productos en base a la categoria
        app.get('/fegui_sajusa/api/v1/categories/:name/products',  this.productController.products );
        //Muestra el producto
        app.get('/fegui_sajusa/api/v1/products/:id',  this.productController.Byid );

        /*Esto es para el administrador*/
        //Creando el producto
        app.post('/fegui_sajusa/api/v1/products',[employeeJWT],  this.productController.create );
        //Actualizando el producto
        app.patch('/fegui_sajusa/api/v1/products/:id',[employeeJWT],  this.productController.update );
        //Eliminando el producto
        app.patch('/fegui_sajusa/api/v1/products/:id',[employeeJWT],  this.productController.deleteByid );

        /*Esto es para el cliente*/
        
        app.patch('/fegui_sajusa/api/v1/checkout/products/:id',[customerJWT],  this.productController.update );
        //Lista de productos a comprar
        app.patch('/fegui_sajusa/api/v1/checkout/products/:id',[customerJWT],  this.productController.update );


    }
}