import React, { useState} from "react";
import Header from "../Header/Header";
import { TextField, Button } from "@mui/material";
import "./SignUp.css";
import API from "../../client/Client";

export default function SignUp(){
    const [doctor, setDoctor] = useState({
        name : "name",
        crm: "crm",
        email: "email",
        street: "street",
        number: "number",
        address: "address",
        phone: "phone",
        speciality: "speciality",
        symptoms : [],
        city: "city",
        cep: "cep",
    })

    function splitSymptoms(symptoms){
        return symptoms.split(",")
    }

    function updateDoctorSignUp(e){
        let inputValue = e.target.value
        
        if(e.target.id === "symptoms"){
            inputValue = splitSymptoms(e.target.value);
        }

        const infoChange = {...doctor, [e.target.id]: inputValue};
        setDoctor(infoChange)
        console.log(doctor)
    }

    async function createDoctor(newDoctor){
        const response = await API.post("/createDoctor", newDoctor);

        response.status === 200? alert("Cadastro realizado com sucesso!") : alert("Falha no Cadastro.");
    }

    return(
        <div className="SignUp-Page">
            <Header/>
            <div className="SignUp-Main">
                <div className="form-box">
                    <TextField
                        sx={{mb: 3, mt: 3}} 
                        onChange={updateDoctorSignUp}
                        fullWidth 
                        required
                        id="name"
                        label="Nome"
                        type="search"
                        variant="standard"
                    />
                    <TextField
                        sx={{mb: 3}} 
                        onChange={updateDoctorSignUp}
                        fullWidth
                        required
                        id="crm"
                        label="CRM"
                        type="search"
                        variant="standard"
                    />
                    <TextField
                        sx={{mb: 3}} 
                        onChange={updateDoctorSignUp}
                        fullWidth 
                        required
                        id="email"
                        label="E-mail"
                        type="search"
                        variant="standard"
                    />
                    <TextField
                        sx={{mb: 3}} 
                        onChange={updateDoctorSignUp}
                        fullWidth 
                        required
                        id="number"
                        label="Número"
                        type="search"
                        variant="standard"
                    />
                    <TextField
                        sx={{mb: 3}} 
                        onChange={updateDoctorSignUp}
                        fullWidth 
                        required
                        id="address"
                        label="Endereço"
                        type="search"
                        variant="standard"
                    />
                    <TextField
                        sx={{mb: 3}} 
                        onChange={updateDoctorSignUp}
                        fullWidth 
                        required
                        id="city"
                        label="Cidade"
                        type="search"
                        variant="standard"
                    />
                    <TextField
                        sx={{mb: 3}} 
                        onChange={updateDoctorSignUp}
                        fullWidth 
                        required
                        id="cep"
                        label="CEP"
                        type="search"
                        variant="standard"
                    />
                    <TextField
                        sx={{mb: 3}} 
                        onChange={updateDoctorSignUp}
                        fullWidth 
                        required
                        id="phone"
                        label="Telefone"
                        type="search"
                        variant="standard"
                    />
                    <TextField
                        sx={{mb: 3}} 
                        onChange={updateDoctorSignUp}
                        fullWidth
                        required
                        id="specialty"
                        label="Especialidade"
                        type="search"
                        variant="standard"
                    />
                    <TextField
                        sx={{mb: 3}} 
                        onChange={updateDoctorSignUp}
                        fullWidth
                        required
                        id="symptoms"
                        label="Sintomas"
                        type="search"
                        variant="standard"
                    />
                    <Button variant="contained" onClick={ () => {createDoctor(doctor)}}>Realizar Cadastro</Button>
                </div>
            </div>
        </div>
    )
}