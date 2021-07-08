import { Application } from "express";

import { CustomerController } from "../controller/customer.controller";
import { checkJwt } from "../middleware/jwt";

export class CustomerRoute{
    
    public customerController: CustomerController = new CustomerController();

    public routes(app:Application){
        
        //Cliente
        app.get('/fegui_sajusa/api/v1/customers',  this.customerController.index );
        app.get('/fegui_sajusa/api/v1/customers/:id',  this.customerController.Byid );
        app.patch('/fegui_sajusa/api/v1/customers/:id',[checkJwt],  this.customerController.update );
        app.patch('/fegui_sajusa/api/v1/delete/:id/customers',[checkJwt],  this.customerController.deleteByid );

        //Metodo de pago
        app.post('/fegui_sajusa/api/v1/customers/:id/payments',[checkJwt],  this.customerController.createPayment);
        app.get('/fegui_sajusa/api/v1/customers/:id/payments',[checkJwt],  this.customerController.ByidPayment );
        app.patch('/fegui_sajusa/api/v1/customers/payments/:id',[checkJwt],  this.customerController.updatePayment);
        app.delete('/fegui_sajusa/api/v1/customers/payments/:id',[checkJwt],  this.customerController.deleteByidPayment);

        //Envío
        app.post('/fegui_sajusa/api/v1/customers/:id/orders',[checkJwt],  this.customerController.createPayment);
        app.get('/fegui_sajusa/api/v1/customers/:id/orders',[checkJwt],  this.customerController.ByidPayment );
        app.patch('/fegui_sajusa/api/v1/customers/orders/:id',[checkJwt],  this.customerController.updatePayment);
        app.delete('/fegui_sajusa/api/v1/customers/orders/:id',[checkJwt],  this.customerController.updatePayment);

        //Details
        app.get('/fegui_sajusa/api/v1/customers/:id/orders',[checkJwt],  this.customerController.ByidPayment );

        //Carrito
        app.post('/fegui_sajusa/api/v1/customers/:id/cart',[checkJwt],  this.customerController.cart );



    }
}