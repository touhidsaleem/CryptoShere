import { toast } from "react-toastify";
import { getAllAssetsApiUrl, getCoinByIdApiUrl } from "../constants/apiConstants";
import { makeApiGetCall } from "../utils/apiUtils";


export const getAllAssets = async () => {
    const url = getAllAssetsApiUrl();
    try {
        const response = await makeApiGetCall({ url });
        return response?.data;

    } catch (err) {
        console.log('getAllAssetsError', err)
        toast.error(err, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
        });
    }
};

export const getCoinById = async (id) => {
    const url = getCoinByIdApiUrl(id);
    try {
        const response = await makeApiGetCall({ url });
        return response;
    } catch (err) {
        console.log('getCoinById', err)
        toast.error(err, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
        });
    }
};