import { IMERCHANT } from "../interface/merchant.interface";
import { MerchantEntity } from "../entities/merchant.entity";
import { getConnection, getRepository } from "typeorm";


export class MerchantDaos {


    public async saveMerchant(merchantData: any): Promise<IMERCHANT | any> {
        let merchant = new MerchantEntity();
        Object.assign(merchant, merchantData)
        return await getConnection().manager.save(merchant)
    }


    public async getMerchant(): Promise<IMERCHANT[]> {
        return await getConnection().manager.find(MerchantEntity)
    }

    public async getMerchantId(id: any): Promise<IMERCHANT[] | any> {
        const merchantRepository = getRepository(MerchantEntity);
        return await merchantRepository.findOne(id);
    }

    public async updateMerchantId(id: any, merchant: IMERCHANT): Promise<IMERCHANT | undefined> {
        const merchantRepository = getRepository(MerchantEntity);
        await merchantRepository.update({ id }, merchant);
        return await merchantRepository.findOne({ id });
    }

    public async deleteMerchantId(id: any): Promise<{}> {
        const merchantRepository = getRepository(MerchantEntity);
        return await merchantRepository.delete({ id });
    }


}
