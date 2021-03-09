import { AxiosResponse } from 'axios';
import { APIResponse } from '../api-service';
import { AxiosInterceptor } from './axios-interceptor';
export declare class AxiosResponseInterceptor extends AxiosInterceptor {
    /**
     * Transforms the Axios response into our API response to be consumed in a consistent manner.
     *
     * @param {AxiosResponse} response The respons ethat we need to transform.
     * @return {Promise} A promise containing the APIResponse.
     */
    protected onResponseSuccess(response: AxiosResponse): Promise<APIResponse>;
    /**
     * Transforms HTTP errors into an API error if the error came from the API.
     *
     * @param {*} error The error that was caught.
     */
    protected onResponseRejected(error: any): Promise<APIResponse>;
}
