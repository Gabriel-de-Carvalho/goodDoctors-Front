import React, { useState } from "react";
import Header from "../Header/Header";
import { TextField, Button } from "@mui/material";
import "./SignUp.css";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import API from "../../client/Client";

export default function SignUpPacient() {
    const [pacient, setPacient] = useState({
        name: "name",
        age: "18",
        email: "email@gmail.com",
        cpf: "00000000000",
        number: "number",
        street:"rua",
        adress: "address",
        password: "phone",
        city: "city",
        zipCode: "cep",
        phone: "(99) 9999-9999"
    })
    
    function splitSymptoms(symptoms) {
        return symptoms.split(",")
    }

    function updatePacientSignUp(e) {
        let inputValue = e.target.value

        // if(e.target.id === "symptoms"){
        //     inputValue = splitSymptoms(e.target.value);
        // }

        const infoChange = { ...pacient, [e.target.id]: inputValue };
        console.log(infoChange)
        setPacient(infoChange)
    }

    async function createPacient(newPacient) {
        const response = await API.post("/createPatient", newPacient);

        response.status === 200 ? alert("Cadastro realizado com sucesso!") : alert("Falha no Cadastro.");
    }

    return (
        <div className="SignUp-Page">
            <Header />
            <div className="SignUp-Main">
                <div className="form-box">
                    <TextField
                        sx={{ mb: 3, mt: 3 }}
                        onChange={updatePacientSignUp}
                        fullWidth
                        required
                        id="name"
                        label="Nome"
                        type="search"
                        variant="standard"
                    />
                    <TextField
                        sx={{ mb: 3 }}
                        onChange={updatePacientSignUp}
                        fullWidth
                        required
                        id="password"
                        label="Senha"
                        type="password"
                        variant="standard"
                    />
                    <TextField
                        id="age"
                        fullWidth
                        variant="standard"
                        label="Data de nascimento"
                        type="date"
                        onChange={updatePacientSignUp}
                        defaultValue="2017-05-24"
                        sx={{ mb: 3 }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        sx={{ mb: 3 }}
                        onChange={updatePacientSignUp}
                        fullWidth
                        required
                        id="email"
                        label="E-mail"
                        type="search"
                        variant="standard"
                    />
                    <TextField
                        sx={{ mb: 3 }}
                        onChange={updatePacientSignUp}
                        fullWidth
                        required
                        id="number"
                        label="Número"
                        type="search"
                        variant="standard"
                    />
                    <TextField
                        sx={{ mb: 3 }}
                        onChange={updatePacientSignUp}
                        fullWidth
                        required
                        id="street"
                        label="Rua"
                        type="search"
                        variant="standard"
                    />
                    <TextField
                        sx={{ mb: 3 }}
                        onChange={updatePacientSignUp}
                        fullWidth
                        required
                        id="adress"
                        label="Bairro"
                        type="search"
                        variant="standard"
                    />
                    <TextField
                        sx={{ mb: 3 }}
                        onChange={updatePacientSignUp}
                        fullWidth
                        required
                        id="city"
                        label="Cidade"
                        type="search"
                        variant="standard"
                    />
                    <TextField
                        sx={{ mb: 3 }}
                        onChange={updatePacientSignUp}
                        fullWidth
                        required
                        id="zipCode"
                        label="CEP"
                        type="search"
                        variant="standard"
                    />
                    <TextField
                        sx={{ mb: 3 }}
                        onChange={updatePacientSignUp}
                        fullWidth
                        required
                        id="phone"
                        label="Telefone"
                        type="search"
                        variant="standard"
                    />
                    <Button variant="contained" onClick={() => { createPacient(pacient) }}>Realizar Cadastro</Button>
                </div>
            </div>
        </div>
    )
}