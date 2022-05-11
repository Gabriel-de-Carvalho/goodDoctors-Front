import React, {useState, useEffect} from "react";
import Header from "../Header/Header";
import { TextField, Button, Radio, FormControlLabel, FormControl, FormLabel, RadioGroup } from "@mui/material";
import "./Search.css";
import { useNavigate } from "react-router-dom";
import { positions } from "@mui/system";

export default function Search(){
    const navigate = useNavigate()
    const [searchParam, setSearchParam] = useState("");
    const [searchType, setSearchType] = useState();

    function handleChangeSearchParam(newSearchParam){
        setSearchParam(newSearchParam)
    }

    const handleChangeSearchType = (event) => {
        setSearchType(event.target.value)
      };

    // useEffect(() =>{
    //     navigator.geolocation.getCurrentPosition(showPositions)
    // }, [])

    // function showPositions(position){
    //     console.log(position)
    // }

    function navigateListing(){
        const search = {
            searchParam : searchParam.replaceAll(" ", "_"),
            searchType: searchType
        }

        navigate("/doctors", {state: search}) 
    }

    return(
        <div className="Search-Page">
            <Header/>
            <div className="Search-Main">
                <div className="search-field">
                    <FormControl className="searchOptions" component="fieldset">
                        <FormLabel component="legend">Deseja pesquisar como?</FormLabel>
                            <RadioGroup aria-label="searchType" name="searchType" value={searchType} onChange={handleChangeSearchType}>
                                <FormControlLabel value="symptoms" control={<Radio />} label="Sintomas" />
                                <FormControlLabel value="speciality" control={<Radio />} label="Especialidade" />
                            </RadioGroup>
                    </FormControl>
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

                    <Button sx= {{mr: 3}} variant="contained" onClick={ () => {navigateListing()}}>Pesquisar</Button>
                    <Button sx= {{mr: 3}} variant="contained" onClick={ () => {navigate("/signup") }}>Cadastrar Médico</Button>
                    <Button variant="contained" onClick={ () => {navigate("/signupPacient") }}>Cadastrar Paciente</Button> 
                </div>      
            </div>
        </div>
    )
}