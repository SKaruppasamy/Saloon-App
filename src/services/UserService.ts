import { Request } from "express";
import { UserDaos } from "../daos/UserDao";
import { IUSER } from "../interface/user.interface";

const userDao = new UserDaos()

export class UserService {

    public async saveUser(req: Request): Promise<IUSER | any> {
        const { body } = req;
        return await userDao.saveUser(body);
    }

    public async getUser(): Promise<IUSER[]> {
        return await userDao.getUser();
    }

    public async getUserId(req: Request): Promise<IUSER[] | undefined> {
        const { id } = req.params;
        return await userDao.getUserId(id);
    }

    public async updateUserId(req: Request): Promise<IUSER | any> {
        const { id } = req.params;
        return await userDao.updateUserId(id, req.body);
    }

    public async deleteUserId(req: Request): Promise<IUSER | any> {
        const { id } = req.params;
        return await userDao.deleteUserId(id);
    }


}