import mysql from "mysql";
import util from "util";

export default class MySQL{

    private static _instance: MySQL;
    cnn: mysql.Connection;
    connect: boolean = false;

    constructor(){
        this.cnn = mysql.createConnection({
            host:'localhost',
            user:'root',
            password: '',
            database: 'fegui_sajusa'
        });

        this.connectDB();
    }

    public static get instance(){
        return this._instance || (this._instance = new this());
    }

    static async executeQuery(query:string){

        try {
            const QUERY = util.promisify(this.instance.cnn.query).bind(this.instance.cnn);
            let rows = await QUERY(query);
            return rows;
        } catch (error) {
            console.log('Error in consult: '+error);
        }
        
    }

    private connectDB(){
        this.cnn.connect((err:mysql.MysqlError)=>{
            if(err) return console.log(err.message);

            this.connect = true;
            console.log('Database online!');
        });

    }
}