import { Application } from "express";

import { CustomerController } from "../controller/customer.controller";
import { customerJWT } from "../middleware/customer";

export class CustomerRoute{
    
    public customerController: CustomerController = new CustomerController();

    public routes(app:Application){
        
        //Cliente
        app.get('/fegui_sajusa/api/v1/customers',  this.customerController.index );
        app.get('/fegui_sajusa/api/v1/customers/:id',  this.customerController.Byid );
        app.patch('/fegui_sajusa/api/v1/customers/:id',[customerJWT],  this.customerController.update );
        app.patch('/fegui_sajusa/api/v1/delete/:id/customers',[customerJWT],  this.customerController.deleteByid );

        //Metodo de pago
        app.post('/fegui_sajusa/api/v1/customers/:id/payments',[customerJWT],  this.customerController.createPayment);
        app.get('/fegui_sajusa/api/v1/customers/:id/payments',[customerJWT],  this.customerController.ByidPayment );
        app.patch('/fegui_sajusa/api/v1/customers/payments/:id',[customerJWT],  this.customerController.updatePayment);
        app.delete('/fegui_sajusa/api/v1/customers/payments/:id',[customerJWT],  this.customerController.deleteByidPayment);

        //Envío
        app.post('/fegui_sajusa/api/v1/customers/:id/orders',[customerJWT],  this.customerController.createPayment);
        app.get('/fegui_sajusa/api/v1/customers/:id/orders',[customerJWT],  this.customerController.ByidPayment );
        app.patch('/fegui_sajusa/api/v1/customers/orders/:id',[customerJWT],  this.customerController.updatePayment);
        app.delete('/fegui_sajusa/api/v1/customers/orders/:id',[customerJWT],  this.customerController.updatePayment);

        //Details
        app.get('/fegui_sajusa/api/v1/customers/:id/orders',[customerJWT],  this.customerController.ByidPayment );

        //Carrito
        app.post('/fegui_sajusa/api/v1/customers/:id/cart',[customerJWT],  this.customerController.cart );



    }
}