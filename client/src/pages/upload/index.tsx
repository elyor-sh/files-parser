import React from 'react';
import {useStore} from "effector-react";
import {StepperFP} from "../../components/stepper";
import {uploadSteppers} from "./utils";
import { UploadContainer} from "./ui";
import {$activeStep, setActiveStep} from "../../store/upload/step";
import StepOne from "./stepOne";
import StepTwo from "./stepTwo";


const UploadFP = () => {

    const activeStep = useStore($activeStep)

    return (
        <UploadContainer>
            <StepperFP
                activeStep={activeStep}
                setActiveStep={setActiveStep}
                steps={uploadSteppers}
            />
            {activeStep === 0 && <StepOne />}
            {activeStep === 1 && <StepTwo />}
        </UploadContainer>
    );
};

export {UploadFP}