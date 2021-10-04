export interface IHTTPRES {
    status?: boolean;
    data?: Array<any>;
    error?: Array<Error>
    message?: string;
    statusCode?: number
}