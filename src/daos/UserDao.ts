import { IUSER } from "../interface/user.interface";
import { UserEntity } from "../entities/user.entity";
import { getConnection, getRepository } from "typeorm";


export class UserDaos {


    public async saveUser(userData: any): Promise<IUSER | any> {
        let user = new UserEntity();
        Object.assign(user, userData)
        return await getConnection().manager.save(user)
    }


    public async getUser(): Promise<IUSER[]> {
        return await getConnection().manager.find(UserEntity)
    }

    public async getUserId(id: any): Promise<IUSER[] | any> {
        const userRepository = getRepository(UserEntity);
        return await userRepository.findOne(id);
    }

    public async updateUserId(id: any, user: IUSER): Promise<IUSER | undefined> {
        const userRepository = getRepository(UserEntity);
        await userRepository.update({ id }, user);
        return await userRepository.findOne({ id });
    }

    public async deleteUserId(id: any): Promise<{}> {
        const userRepository = getRepository(UserEntity);
        return await userRepository.delete({ id });
    }


}
