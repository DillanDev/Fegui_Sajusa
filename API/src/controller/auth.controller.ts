import { Request,Response } from "express";

import { AuthModel } from "../model/auth.model";
import { Validation } from "../config/validation";

const MODEL: AuthModel = new AuthModel();
const VALIDATION: Validation = new Validation();
export class AuthController{

    public async loginCustomer(req:Request,res:Response){
        const {email,password} = req.body;
        
        if(!(email && password)){
            return res.status(400).json({message: 'Username and password required'});
        }
        
        try{

            let a:any = await MODEL.loginCustomer(email,password);
            if(a == false){
                res.status(400).json({message:'Incorrect email or password!'});
            }else if(a.b ==true){
                
                res.status(200).json({ok:a.b,token:a.token});
            }
        }catch(error){
            return res.status(400).json({message: 'Incorrect email or password!'});
        }

                 
    }

    public async registerCustomer(req:Request, res:Response){
        let name = req.body.name || 0;
        let surname =  req.body.surname || 0;
        let email = req.body.email || 0;
        let telephone  = req.body.telephone || 0;
        let password = req.body.password ||0;
        let city = req.body.city || 0;
        let region =  req.body.region || 0;
        let zip  = req.body.zip || 0;

        try {

            if(!VALIDATION.AlonString(name,30,2)){

                return res.status(406).json({ok:false, message:'Incorrect name!'});

            }else if(!VALIDATION.AlonString(surname,60,2)){

                return res.status(406).json({ok:false, message:'Incorrect surname!'});

            }else if(!VALIDATION.email(email,60,6)){
                
                return res.status(406).json({ok:false, message:'Incorrect email!'});

            }else if(!VALIDATION.AlonNumber(telephone,15,6)){

                return res.status(406).json({ok:false, message:'Incorrect telephone!'});   

            }else if(!VALIDATION.password(password,60,6)){

                return res.status(406).json({ok:false, message:'Incorrect password!'});  

            }else if(!VALIDATION.AlonString(city,30,2)){

                return res.status(406).json({ok:false, message:'Incorrect city!'});

            }else if(!VALIDATION.AlonString(region,30,2)){

                return res.status(406).json({ok:false, message:'Incorrect region!'});

            }else if(!VALIDATION.AlonNumber(zip,10,4)){

                return res.status(406).json({ok:false, message:'Incorrect zip!'}); 

            }else{
            
                res.status(200).json({ ok:true, customer: await MODEL.registerCustomer(req.body)});
            }

        } catch (error) {
            
            return res.status(500).json({message: 'Error internal server '});

        }
        
    }

    
}