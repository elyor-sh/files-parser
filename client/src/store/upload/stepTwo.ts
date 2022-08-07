import React from "react";
import {createEvent, createStore, sample} from "effector";
import {uploadFileStepTwoService} from "../../service/upload/stepTwo.service";

const onChange = createEvent<File | null>()
const handleSubmit = createEvent<string>()

export const $fileStepTwo = createStore<File | null>(null)
    .on(onChange, (_, file) => file)

export const handleChangeFileStepTwo = onChange.prepend<React.ChangeEvent<HTMLInputElement>>(((e) => {

    if(e.target.files){
        return e.target.files[0]
    }

    return null
}))

export const handleUploadFileStepTwo = handleSubmit.prepend<string>((fileType => fileType))

const getParamsStepTwo = (file: File, fileType: string) => {
    return {
        file,
        fileType
    }
}

sample({
    clock: handleUploadFileStepTwo,
    source: $fileStepTwo,
    filter: (file) => !!file,
    fn: (file, fileType) => getParamsStepTwo(file as File, fileType),
    target: uploadFileStepTwoService
})