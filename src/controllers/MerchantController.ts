import { Request, Response } from "express";
import { IMERCHANT } from "../interface/merchant.interface";
import { MerchantService } from "../services/MerchantService";
import { HttpResonse } from "../utiles/response";

const merchantService = new MerchantService();
const response = new HttpResonse();


export class MerchantController {

    /** 
     * @post create merchant
     * @param req 
     * @param res 
     */

    public async saveMerchant(req: Request, res: Response): Promise<void> {

        const merchant = await merchantService.saveMerchant(req)
        try {
            if (merchant) {
                res.json(await response.created(merchant))
            }
            else {
                res.json(await response.noContent())
            }
        } catch (error) {
            res.json(await response.internelServer(error))
        }

    }

    /**
     * @GET // Get all merchant details;
     * @param req 
     * @param res 
     */


    public async getMerchant(req: Request, res: Response): Promise<void> {

        const merchant = await merchantService.getMerchant()
        try {
            if (merchant) {
                res.json(await response.success(merchant))
            }
            else {
                res.json(await response.noContent())
            }
        } catch (error) {
            res.json(await response.internelServer(error))
        }
    }

    /**
     * @GET // Get merchant details by Id;
     * @param req 
     * @param res 
     */

    public async getMerchantId(req: Request, res: Response): Promise<void> {

        const merchant = await merchantService.getMerchantId(req)
        try {
            if (merchant) {
                res.json(await response.success(merchant))
            }
            else {
                res.json(await response.noContent())
            }
        } catch (error) {
            res.json(await response.internelServer(error))
        }
    }


    /**
     * @PUT // Update merchant details by Id;
     * @param req 
     * @param res 
     */
    public async updateMerchantId(req: Request, res: Response): Promise<void> {

        const merchant = await merchantService.updateMerchantId(req)
        try {
            if (merchant) {
                res.json(await response.success(merchant))
            }
            else {
                res.json(await response.noContent())
            }
        } catch (error) {
            res.json(await response.internelServer(error))
        }
    }


    /**
     * @delete delete merchant by id
     * @param req 
     * @param res 
     */
    public async deleteMerchantId(req: Request, res: Response): Promise<void> {

        await merchantService.deleteMerchantId(req);

        try {
            res.json(await response.delete())

        } catch (error) {
            res.json(await response.internelServer(error))
        }
    }

}