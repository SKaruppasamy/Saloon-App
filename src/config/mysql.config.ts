import { createConnection } from "typeorm";
import { UserEntity } from "../entities/user.entity";
import { MerchantEntity } from "../entities/merchant.entity";


export class MysqlConfig {

    public mysqlConfig(): void {

        createConnection({
            type: "mysql",
            host: "localhost",
            port: 3306,
            username: "root",
            password: "root",
            database: "saloon",
            entities: [
                UserEntity,
                MerchantEntity
            ],
            synchronize: true,
            logging: false
        }).then(connection => {

            console.log('database created successfully :)')
            // here you can start to work with your entities
        }).catch(error => console.log(error));

    }

}