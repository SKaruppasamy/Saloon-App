import { Request, Response } from "express";
import { IUSER } from "../interface/user.interface";
import { UserService } from "../services/UserService";
import { HttpResonse } from "../utiles/response";

const userService = new UserService();
const response = new HttpResonse();


export class UserController {

    /** 
     * @post create user
     * @param req 
     * @param res 
     */

    public async saveUser(req: Request, res: Response): Promise<void> {

        const user = await userService.saveUser(req)
        try {
            if (user) {
                res.json(await response.created(user))
            }
            else {
                res.json(await response.noContent())
            }
        } catch (error) {
            res.json(await response.internelServer(error))
        }

    }

    /**
     * @GET // Get all user details;
     * @param req 
     * @param res 
     */


    public async getUser(req: Request, res: Response): Promise<void> {

        const user = await userService.getUser()
        try {
            if (user) {
                res.json(await response.success(user))
            }
            else {
                res.json(await response.noContent())
            }
        } catch (error) {
            res.json(await response.internelServer(error))
        }
    }

    /**
     * @GET // Get user details by Id;
     * @param req 
     * @param res 
     */

    public async getUserId(req: Request, res: Response): Promise<void> {

        const user = await userService.getUserId(req)
        try {
            if (user) {
                res.json(await response.success(user))
            }
            else {
                res.json(await response.noContent())
            }
        } catch (error) {
            res.json(await response.internelServer(error))
        }
    }


    /**
     * @PUT // Update user details by Id;
     * @param req 
     * @param res 
     */
    public async updateUserId(req: Request, res: Response): Promise<void> {

        const user = await userService.updateUserId(req)
        try {
            if (user) {
                res.json(await response.success(user))
            }
            else {
                res.json(await response.noContent())
            }
        } catch (error) {
            res.json(await response.internelServer(error))
        }
    }


    /**
     * @delete delete user by id
     * @param req 
     * @param res 
     */
    public async deleteUserId(req: Request, res: Response): Promise<void> {

        await userService.deleteUserId(req);

        try {
            res.json(await response.delete())

        } catch (error) {
            res.json(await response.internelServer(error))
        }
    }

}