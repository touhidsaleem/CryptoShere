import axios from "axios";
import { API_KEY } from "../constants/apiConstants";

const makeApiGetCall = async ({ url, headers = {}, queryParams = {} }) => {
    try {
        const response = await axios.get(url, {
            headers,
            params: queryParams
        });
        return response.data;
    } catch (error) {
        throw getError(error);
    }
};

const makeApiPostCall = async ({ url, headers = {}, queryParams = {}, body = {} }) => {
    try {
        const response = await axios.post(url, body, { headers, params: queryParams });
        return response;
    } catch (error) {
        throw getError(error);
    }
};

const makeApiPutCall = async ({ url, headers = {}, queryParams = {}, body = {} }) => {
    try {
        const response = await axios.put(url, body, { headers, params: queryParams });
        return response;
    } catch (error) {
        throw getError(error);
    }
};

const makeApiPatchCall = async ({ url, headers = {}, queryParams = {}, body = {} }) => {
    try {
        const response = await axios.patch(url, body, { headers, params: queryParams });
        return response;
    } catch (error) {
        throw getError(error);
    }
};

const getError = (error) =>
    error?.meta?.displayMessage ||
    error?.meta?.message ||
    error?.response?.data?.meta?.displayMessage ||
    error?.response?.data?.meta?.message ||
    error?.displayMessage ||
    error?.message;

export { makeApiGetCall, makeApiPostCall, makeApiPutCall, makeApiPatchCall, getError };
