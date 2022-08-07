import {createEffect} from "effector";
import {UploadPageTypes} from "../../models/request/upload";

export const handleUploadStepOneService = createEffect(async (params: UploadPageTypes.stepOne) => {
    try {

        console.log(params)

    }catch (e) {
        return Promise.reject(e)
    }
})