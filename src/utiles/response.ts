import { IHTTPRES } from "../interface/httpResponse.interface";
import { IUSER } from "../interface/user.interface";
import { IMERCHANT } from "../interface/merchant.interface";

export class HttpResonse {

    public response: IHTTPRES = {};

    public async success(data: any[]): Promise<IHTTPRES> {
        this.response.status = true;
        this.response.data = data;
        this.response.error = [];
        this.response.statusCode = 200;
        return await this.response;
    }

    public async created(data: any[]): Promise<IHTTPRES> {
        this.response.status = true;
        this.response.data = data;
        this.response.error = [];
        this.response.statusCode = 201;
        this.response.message = 'Created Successfully'
        return await this.response;
    }

    public async noContent(): Promise<IHTTPRES> {
        this.response.status = true;
        this.response.data = [];
        this.response.error = [];
        this.response.statusCode = 204;
        return await this.response;

    }

    public async delete(): Promise<IHTTPRES> {
        this.response.status = true;
        this.response.data = [];
        this.response.error = [];
        this.response.statusCode = 204;
        this.response.message = 'Deleted Successfully'
        return await this.response;
    }

    public async internelServer(error: any): Promise<IHTTPRES> {
        this.response.status = true;
        this.response.data = [];
        this.response.error = error
        this.response.statusCode = 500;
        return await this.response;
    }

}