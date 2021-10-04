import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import { MysqlConfig } from './config/mysql.config';
import { Route_user } from './routes/User_routes';
import { Route_merchant} from './routes/Merchant_routes'

const PORT = 3800;

class App {

    //Initialize the express 
    public app: express.Application = express();
    public routeProvider: Route_user = new Route_user();
    public routeProviders: Route_merchant = new Route_merchant();

    constructor() {
        this.initializeMiddlewares();
        this.mysqlSetup()
        this.get();
        this.routeProvider.routes_user(this.app);
        this.routeProviders.routes_merchant(this.app);
        
    }

    public async mysqlSetup(): Promise<void> {
        let config = new MysqlConfig();
        config.mysqlConfig();
    }

    public initializeMiddlewares(): void {
        // parse application/json
        this.app.use(bodyParser.json());
        // parse application/x-www-form-urlencoded
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(cors({ credentials: true, origin: true }));
    }

    public get(): void {
        this.app.get('/', (res, req) => {
            req.send('Testing to rest api working')
        })
    }
}

//Server port created 
new App().app.listen(PORT, () => {
    console.log('Express server listening on port' + PORT)
})



















// const App = () => {

//     var mysql = require('mysql');

//     var con = mysql.createConnection({
//         host: "localhost",
//         user: "root",
//         password: "root",
//         database: "test"
//     });

//     con.connect(function (err: any) {
//         if (err) throw err;
//         console.log("Connected!");
//         var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
//         con.query(sql, function (err: any, result: any) {
//             if (err) throw err;
//             console.log("Table created");
//         });
//     });

// }

// App();