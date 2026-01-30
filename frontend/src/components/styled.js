import {styled} from "@mui/material"

export const NavbarContainer=styled("div")`
    display:flex;
    background-color: #FFE2AF;
    padding:15px 30px;
    justify-content: space-between;
    margin: 0px 0px 10px 0px;
`

export const TitleContainer=styled("div")`
    font-size:32px;
    font-weight:bold;
    color:#3F9AAE;
`

export const StyledButton=styled("button")`
    display:flex;
    padding: 5px 15px;
    font-size: 16px;
    align-items:center;
    justify-content:center;
    background-color: #3F9AAE;
    color: #FFE2AF;
    border:none;
    border-radius:5px;
`

export const NoteContainer = styled("div")`
    background: #F96E5B;
    padding:20px;
    margin:10px;
    width:400px;
    align-items:center;
    justify-content: left
`
export const NoteTitle = styled("div")`
    font-size:18px;
    font-weight:1000;
    color: #3F9AAE
`
export const NoteContent = styled("div")`
    margin: 15px 0px;
    font-size:18px;
    font-weight:200;
    color: #002455;
`
export const NoteFooter = styled("div")`
    display:flex;
    justify-content: space-between;
    align-items:center;
    color: #002455;
`