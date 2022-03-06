import React from "react";
import { TextField } from "@mui/material";
import "./Search.css";

export default function Search(){
    const style = {
        margin:0
    }


    return(
        <div className="Search-Page">
            <div className="Search-Header">
                 <h1 style={style}>Good Doctors</h1>
            </div>
            <div className="Search-Main">
            <TextField
                id="outlined-password-input"
                label="Digite o que está sentindo"
                autoComplete="current-password"
                variant="standard"
                fullWidth
                />
            </div>
            
            
        </div>
    )
}