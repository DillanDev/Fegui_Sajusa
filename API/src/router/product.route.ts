import { Application } from "express";

import { ProductController } from "../controller/product.controller";
import { checkJwt } from "../middleware/jwt";

export class ProductRoute{
    
    public productController: ProductController = new ProductController();

    public routes(app:Application){
        
        
        app.get('/fegui_sajusa/api/v1/categories',  this.productController.categories );
        app.get('/fegui_sajusa/api/v1/categories/:name/products',  this.productController.products );
    
        // app.get('/fegui_sajusa/api/v1/customers/:id',  this.customerController.Byid );

        // //Creando
        // // app.post('/fegui_sajusa/api/v1/customers',  this.customerController.create );

        // //Actualizando
        // app.patch('/fegui_sajusa/api/v1/customers/:id',[checkJwt],  this.customerController.update );

        // //Desactivando
        // app.patch('/fegui_sajusa/api/v1/delete/:id/customers',[checkJwt],  this.customerController.deleteByid );


    }
}