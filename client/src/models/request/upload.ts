interface UploadFormStepOneType {
    name: string
    fileType: string
}

interface UploadFormStepTwoType {
    file: File
    fileType: string
}

export namespace UploadPageTypes {
    export type stepOne = UploadFormStepOneType
    export type stepTwo = UploadFormStepTwoType
}