import React, {useState, useEffect} from "react";
import Header from "../Header/Header";
import { TextField, Button } from "@mui/material";
import "./Search.css";
import { useNavigate } from "react-router-dom";
import { positions } from "@mui/system";

export default function Search(){
    const navigate = useNavigate()
    const [searchParam, setSearchParam] = useState("");

    function handleChangeSearchParam(newSearchParam){
        setSearchParam(newSearchParam)
    }

    useEffect(() =>{
        navigator.geolocation.getCurrentPosition(showPositions)
    }, [])

    function showPositions(position){
        console.log(position)
    }

    function navigateListing(){
        const stateParam = searchParam.replaceAll(" ", "_")
        console.log(stateParam)
        navigate("/doctors", {state: stateParam}) 
    }

    return(
        <div className="Search-Page">
            <Header/>
            <div className="Search-Main">
                <div className="search-field">
                    <TextField
                        sx = {
                            {mb: 3}
                        }
                        onChange={(event) => {handleChangeSearchParam(event.target.value)}}
                        id="outlined-search-input"
                        label="Digite o que está sentindo"
                        autoComplete="current-password"
                        variant="standard"
                        fullWidth
                        />

                    <Button sx= {{mr: 3}}variant="contained" onClick={ () => {navigateListing()}}>Pesquisar</Button>
                    <Button variant="contained" onClick={ () => {navigate("/signup") }}>Cadastrar Médico</Button>
                </div>      
            </div>
        </div>
    )
}