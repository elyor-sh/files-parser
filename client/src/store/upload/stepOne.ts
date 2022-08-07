import React from "react";
import { createEvent, createStore, sample, Event} from "effector";
import {toast} from "react-toastify";
import {uploadFormStepOne, UploadFormStepOneType} from "../../pages/upload/utils";
import {UploadPageTypes} from "../../models/request/upload";
import {handleUploadStepOneService} from "../../service/upload/stepOne.service";
import {SelectChangeEvent} from "@mui/material";

const checkValidationError = (name: string, value: string): boolean => {
    switch (name) {
        case 'name':
          return value.length > 2
        case 'fileType':
            return !!value
        default:
            return false
    }
}

export const handleSubmitUploadStepOne = createEvent()

const onChange = createEvent<UploadFormStepOneType[]>()

export const $uploadForm = createStore<UploadFormStepOneType[]>([...uploadFormStepOne])


$uploadForm
    .on(onChange, (_, payload) => payload)


export const handleSubmitStepOne = handleSubmitUploadStepOne.prepend<React.KeyboardEvent<HTMLDivElement> | React.MouseEvent<HTMLButtonElement>>(((e) => {
    e.preventDefault()
}))

export const handleKeyDownUpload = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if(e.code === 'Enter'){
        handleSubmitStepOne(e)
    }
}

type EventType = React.ChangeEvent<HTMLInputElement> | SelectChangeEvent<any>

export const handleChangeInputStepOne: Event<EventType> = onChange.prepend(((event) => {
    const elements = $uploadForm.getState()

    return (
        elements.map(element => {
            if(element.required && element.name === event.target.name){

                const name = event.target.name
                const value = event.target.value
                const isInvalid = !checkValidationError(name, value)

                return {
                    ...element,
                    error: isInvalid,
                    value: value
                }
            }

            return element
        })
    )

}))

const handleCheck = (elements: UploadFormStepOneType[]) => {
    let isValid = true

    elements.forEach(element => {
        if(!isValid){
            return
        }
        if(element.required){
            isValid = checkValidationError(element.name, element.value)
        }
    })

    if(!isValid){
        toast.error(`Запольните все обязательные поля!`, {
            toastId: 'handleSubmitFormStepOne'
        })
    }

    return isValid
}

export const getParams = (elements: UploadFormStepOneType[]): UploadPageTypes.stepOne => {
    let params = {} as UploadPageTypes.stepOne

    elements.forEach(element => {
        params = {
            ...params,
            [element.name]: element.value
        }
    })

    return params
}

sample({
    clock: handleSubmitUploadStepOne,
    source: $uploadForm,
    filter: handleCheck,
    fn: (elements) => (getParams(elements)),
    target: handleUploadStepOneService
})

