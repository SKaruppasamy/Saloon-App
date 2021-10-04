import { MerchantController } from "../controllers/MerchantController";

export class Route_merchant {

    public merchant: MerchantController = new MerchantController()


    public routes_merchant(app: any): void {
        app.route('/merchant').post(this.merchant.saveMerchant);
        app.route('/merchant').get(this.merchant.getMerchant);
        app.route('/merchant/:id').get(this.merchant.getMerchantId);
        app.route('/merchant/:id').put(this.merchant.updateMerchantId);
        app.route('/merchant/:id').delete(this.merchant.deleteMerchantId);
    }
}