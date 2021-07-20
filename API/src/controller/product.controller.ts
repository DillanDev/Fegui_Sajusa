import { Request,Response } from "express";

import { ProductModel } from "../model/product.model";


const MODEL = new ProductModel;

export class ProductController{


    public async categories(req:Request, res:Response){

        try {
            res.status(200).json( {ok:true,products:await MODEL.categories()});
        } catch (error) {
            res.status(500).json({message:"Error calling function"});
        }
        
    }

    public async products(req:Request, res:Response){

        try {
            res.status(200).json( {ok:true,products:await MODEL.products(req.params.name)});
        } catch (error) {
            res.status(500).json({message:"Error calling function"});
        }
        
    }

    public async Byid(req:Request, res:Response){
    }


    public async create(req:Request, res:Response){}

    public async update(req:Request, res:Response){}

    public async deleteByid(req:Request, res:Response){}


}