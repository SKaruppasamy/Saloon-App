import { Request } from "express";
import { MerchantDaos } from "../daos/MerchantDao";

import { IMERCHANT } from "../interface/merchant.interface";

const merchantDao = new MerchantDaos()

export class MerchantService {

    public async saveMerchant(req: Request): Promise<IMERCHANT | any> {
        const { body } = req;
        return await merchantDao.saveMerchant(body   );
    }

    public async getMerchant(): Promise<IMERCHANT[]> {
        return await merchantDao.getMerchant();
    }

    public async getMerchantId(req: Request): Promise<IMERCHANT[] | undefined> {
        const { id } = req.params;
        return await merchantDao.getMerchantId(id);
    }

    public async updateMerchantId(req: Request): Promise<IMERCHANT | any> {
        const { id } = req.params;
        return await merchantDao.updateMerchantId(id, req.body);
    }

    public async deleteMerchantId(req: Request): Promise<IMERCHANT | any> {
        const { id } = req.params;
        return await merchantDao.deleteMerchantId(id);
    }
}