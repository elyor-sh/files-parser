import React from 'react';
import {Box, Grid} from '@mui/material';
import {useStore} from "effector-react";
import {UploadFormStepOneType} from "./utils";
import {
    $uploadForm, handleKeyDownUpload,
} from "../../store/upload/stepOne";
import {drawFormUploadStepOne} from "./drawForm";

const UploadFPForm = () => {

    const elements: UploadFormStepOneType[] = useStore($uploadForm)

    return (
        <Box
            component="div"
            sx={{
                margin: '40px 0 20px'
            }}
            onKeyDown={handleKeyDownUpload}
        >
            <Grid container spacing={3} alignItems='flex-start'>
                {
                    elements.map(element => (
                        <Grid
                            key={element.name}
                            item
                            xs={6}
                        >
                            {drawFormUploadStepOne(element)}
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    );
};

export default UploadFPForm;