import React from "react";
import {UploadFormStepOneType} from "./utils";
import {FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {handleChangeInputStepOne} from "../../store/upload/stepOne";

export const drawFormUploadStepOne = (element: UploadFormStepOneType) => {
    switch (element.type) {
        case "input":
            return (
                <TextField
                    fullWidth={true}
                    name={element.name}
                    error={element.error}
                    id={element.name}
                    label={element.label}
                    helperText={element.error ? element.helperText : ''}
                    required={element.required}
                    value={element.value}
                    onChange={(e: any) => handleChangeInputStepOne(e)}
                />
            )
        case "select":
            return (
                <FormControl
                    sx={{m: 0, minWidth: 120,}} error={element.required && element.error}
                    fullWidth
                    required={element.required}
                >
                    <InputLabel id="demo-simple-select-error-label">{element.label}</InputLabel>
                    <Select
                        labelId="demo-simple-select-error-label"
                        name={element.name}
                        id={element.name}
                        label={element.label}
                        required={element.required}
                        onChange={handleChangeInputStepOne}
                        value={element.value}
                    >
                        {
                            element?.options?.map(option => (
                                <MenuItem
                                    value={option.value}
                                    key={option.label}
                                >
                                    {option.label}
                                </MenuItem>
                            ))
                        }
                    </Select>
                    {
                        element.required && element.error
                            ?
                            <FormHelperText>{element.helperText}</FormHelperText>
                            :
                            ''
                    }
                </FormControl>
            )
        default:
            return null
    }
}