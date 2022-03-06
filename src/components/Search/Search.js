import React from "react";
import Header from "../Header/Header";
import { TextField } from "@mui/material";
import "./Search.css";

export default function Search(){



    return(
        <div className="Search-Page">
            <Header/>
            <div className="Search-Main">
            <TextField
                id="outlined-search-input"
                label="Digite o que está sentindo"
                autoComplete="current-password"
                variant="standard"
                fullWidth
                />
            </div>
            
            
        </div>
    )
}