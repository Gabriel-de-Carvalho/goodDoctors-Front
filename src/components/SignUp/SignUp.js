import React from "react";
import Header from "../Header/Header";
import { TextField } from "@mui/material";
import "./SignUp.css"

export default function SignUp(){
    return(
        <div className="SignUp-Page">
            <Header/>
            <div className="SignUp-Main">
                <div className="form-box">
                    <TextField
                        fullWidth 
                        required
                        id="name-input"
                        label="Nome"
                        type="search"
                        variant="standard"
                    />
                    <TextField
                        fullWidth
                        required
                        id="crm-input"
                        label="CRM"
                        type="search"
                        variant="standard"
                    />
                    <TextField
                        fullWidth
                        required
                        id="specialty-input"
                        label="Especialidade"
                        type="search"
                        variant="standard"
                    />
                    <TextField
                        fullWidth
                        required
                        id="symptoms-input"
                        label="Sintomas"
                        type="search"
                        variant="standard"
                    />
                    <TextField
                        fullWidth
                        required
                        id="placeOfService-input"
                        label="Local de Atendimento"
                        type="search"
                        variant="standard"
                    />
                </div>
            </div>
        </div>
    )
}