import {styled} from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export const UploadContainer = styled('div')(() => ({
    borderRadius: '10px',
    boxShadow: '-1px 0px 50px -19px rgba(0,0,0,0.75)',
    padding: '20px',
    margin: '10px 0',
    minHeight: '100%'
}))

export const UploadCard = styled('div')(() => ({
    width: '100%',
    height: '400px',
    border: '1px solid #333333',
    borderRadius: '10px',
    background: '#c6fcb1',
    position: 'relative',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
}))

export const UploadPlusButton = styled(AddCircleOutlineIcon)(() => ({
    width: '200px',
    height: '200px',
    padding: '10px',
    color: '#bdbdbd'
}))

export const HiddenInput = styled('input')(() => ({
    display: 'none'
}))

export const UploadedFileName = styled('div')(() => ({
    color: '#5e5e5e',
    marginTop: '15px',
    fontSize: '18px'
}))