import React, {FC} from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

interface StepperFPProps {
    steps: string[]
    activeStep: number
    setActiveStep: (p: number) => void
}

const StepperFP: FC<StepperFPProps> = ({steps, activeStep, setActiveStep}) => {

    const handleClickStep = (target: number) => {
        if(activeStep > target){
            setActiveStep(target)
        }
    }

    return (
        <Box sx={{ width: '100%', marginBottom: '20px' }}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps: { completed?: boolean } = {};
                    const labelProps: {
                        optional?: React.ReactNode;
                    } = {};
                    return (
                        <Step key={label} {...stepProps} onClick={() => handleClickStep(index)}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
        </Box>
    );
}

export {StepperFP}