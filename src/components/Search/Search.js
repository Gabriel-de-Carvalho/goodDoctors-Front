import React from "react";
import Header from "../Header/Header";
import { TextField, Button } from "@mui/material";
import "./Search.css";
import { useNavigate } from "react-router-dom";

export default function Search(){
    const navigate = useNavigate()


    return(
        <div className="Search-Page">
            <Header/>
            <div className="Search-Main">
                <div className="search-field">
                    <TextField
                        sx = {
                            {mb: 3}
                        }
                        id="outlined-search-input"
                        label="Digite o que está sentindo"
                        autoComplete="current-password"
                        variant="standard"
                        fullWidth
                        />

                    <Button sx= {{mr: 3}}variant="contained" onClick={ () => {navigate("/doctors") }}>Pesquisar</Button>
                    <Button variant="contained" onClick={ () => {navigate("/signup") }}>Cadastrar Médico</Button>
                </div>


            
            </div>
            
            
        </div>
    )
}