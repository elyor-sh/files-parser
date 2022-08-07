import React, {useRef} from 'react';
import { Grid} from "@mui/material";
import {useStore} from "effector-react";
import {HiddenInput, UploadCard, UploadedFileName, UploadPlusButton} from "./ui";
import {$uploadForm, getParams} from "../../store/upload/stepOne";
import {$fileStepTwo, handleChangeFileStepTwo, handleUploadFileStepTwo} from "../../store/upload/stepTwo";
import {CancelButton, SaveButton} from "../../components/atoms/Buttons";
import {$activeStep, setActiveStep} from "../../store/upload/step";

const StepTwo = () => {

    const form = useStore($uploadForm)
    const activeStep = useStore($activeStep)
    const file = useStore($fileStepTwo)

    const ref = useRef<HTMLInputElement>(null)

    const handleClick = () => {
        if(ref.current){
            ref.current.click()
        }
    }

    return (
        <>
            <UploadCard onClick={handleClick}>
                <UploadPlusButton />
                {
                    file
                        ?
                        <UploadedFileName>
                           Название выбранного файла: {file.name}
                        </UploadedFileName>
                        :
                        ''
                }
                <HiddenInput
                    ref={ref}
                    type='file'
                    accept={`.${getParams(form).fileType}`}
                    onChange={handleChangeFileStepTwo}
                />
            </UploadCard>
            <Grid
                container
                sx={{justifyContent: 'flex-end', margin: '10px 0'}}
            >
                <CancelButton
                    variant='contained'
                    onClick={() => setActiveStep(activeStep - 1)}
                >
                    Назад
                </CancelButton>
                <SaveButton
                    variant='contained'
                    sx={{ml: 1}}
                    onClick={() => handleUploadFileStepTwo(getParams(form).fileType || '')}
                >
                    Далее
                </SaveButton>

            </Grid>
        </>
    );
};

export default StepTwo;