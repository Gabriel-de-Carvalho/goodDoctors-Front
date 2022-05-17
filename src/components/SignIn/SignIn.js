import { TextField, Button } from "@mui/material"
import React, {useState, useContext} from "react"
import { UserContext } from "../../session/user-context"
import Header from "../Header/Header"
import "./SignIn.css"
import API from "../../client/Client";


export default function SignIn() {
    const [userInfo, setUserInfo] = useState({})
    const userSession = useContext(UserContext)

    async function logInUser(){
        const newUserInfo = await API.get("/loginPatient", {data: userInfo})
        console.log(newUserInfo)
    }
    

    return (
        
        <div>
            <Header/>
            <div className="main-signIn">
            
            <TextField
                fullWidth
                required
                id="name"
                label="Nome"
                type="search"
                variant="standard"
            />                
            <TextField
                fullWidth
                required
                id="password"
                label="Senha"
                type="password"
                variant="standard"
            />
            <Button  variant="contained" onClick={ () => logInUser()}>Login</Button>
            </div>
        </div>
    )
} 