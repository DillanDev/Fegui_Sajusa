import MySQL from '../config/connection';
import * as jwt from 'jsonwebtoken';
import key from "../config/key";
import bcrypt from 'bcrypt';

export class AuthModel{

    private Query = '';
    private inserts =[''];

    public async loginCustomer(email:string,password:string){

        
        var b: boolean = false;

            let SQL = "SELECT `password` FROM `customers` WHERE `email` = '"+email+"'";
        
        
            const rows:any =    await MySQL.executeQuery(SQL);
            const pass_hash = bcrypt.compareSync(password,rows[0].password);

            if(pass_hash==false){
                
                return b;

            }else if(pass_hash == true){
                SQL = "SELECT * FROM `customers` WHERE `email` = '"+email+"'";
                const rows2:any =await MySQL.executeQuery(SQL);
                const token = jwt.sign({userId:rows2[0].id,username:rows2[0].name},key.jwtSecret,{expiresIn: '1h'});
                b = true;
                return {b, token};

            }
        
                 
    }

    public async registerCustomer(body:any){
        try {
            body.password = await bcrypt.hash(body.password,10);
            this.Query =`
            INSERT INTO 
            customers(name, surname,image, gender, email,telephone, password, city, region, zip) 
            VALUES (?,?,?,?,?,?,?,?,?,?)`;
            this.inserts = [`${body.name}`,`${body.surname}`,`${body.image}`,`${body.gender}`,`${body.email}`,`${body.telephone}`,`${body.password}`,`${body.city}`,`${body.city}`,`${body.region}`];
            this.Query = MySQL.instance.cnn.format(this.Query,this.inserts);
            var result:any;
            await MySQL.executeQuery(this.Query).then(()=>{ 
                delete body.password;
                result = body; 
            }); 

            return result;
        } catch (error) {
            console.log('Query failed');
        }
    }

}