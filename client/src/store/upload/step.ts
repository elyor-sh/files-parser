import {createEvent, createStore, Store} from "effector";
import {handleUploadStepOneService} from "../../service/upload/stepOne.service";
import {uploadFileStepTwoService} from "../../service/upload/stepTwo.service";

// ==== step start ====
export const setActiveStep = createEvent<number>()

export const $activeStep: Store<number> = createStore(0)

    .on(setActiveStep, (prev: number, count: number) => count)
    .on(handleUploadStepOneService.doneData, () => 1)
    .on(uploadFileStepTwoService.doneData, () => 2)

// ==== step end ====