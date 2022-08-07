import {Button, styled} from "@mui/material";

export const CancelButton = styled(Button)(() => ({
    background: '#bdbdbd',
    color: '#333333',
    '&:hover': {
        background: '#ffa8a8',
    }
}))

export const SaveButton = styled(Button)(() => ({
    background: '#82ff64',
    color: '#333333',
    '&:hover': {
        background: '#5aff32',
    }
}))