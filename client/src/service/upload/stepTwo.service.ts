import {createEffect} from "effector";
import {UploadPageTypes} from "../../models/request/upload";

export const uploadFileStepTwoService = createEffect(async (params: UploadPageTypes.stepTwo) => {
    try {

        const formData = new FormData()

        formData.append('fileType', params.fileType)
        formData.append('file', params.file)

        new Array(100000).fill(0).forEach(a => a)

        return Promise.resolve()

    }catch (e) {
        return Promise.reject(e)
    }
})