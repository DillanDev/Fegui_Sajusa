import MySQL from '../config/connection';

export class ProductModel{
    private Query = '';
    private inserts =[''];

    public async categories(){

        this.Query = "SELECT * FROM categories";
        return await MySQL.executeQuery(this.Query); 
       
    }

    public async products(nameCategory:string){

       this.Query = "SELECT * FROM products WHERE category_id = '"+nameCategory+"'";
       return await MySQL.executeQuery(this.Query); 
      
    }



}