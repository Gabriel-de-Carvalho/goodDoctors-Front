import { TextField, Button } from "@mui/material"
import React, {useState, useContext} from "react"
import { UserContext } from "../../session/user-context"
import Header from "../Header/Header"
import "./SignIn.css"
import API from "../../client/Client";
import { useNavigate } from "react-router-dom"


export default function SignIn() {
    const [userInfo, setUserInfo] = useState({})
    const userSession = useContext(UserContext)
    const navigate = useNavigate()

    async function logInUser(){
        console.log(userInfo)
        const newUserInfo = await API.post("/loginPatient", userInfo)
        console.log(newUserInfo)
        let userLogged = newUserInfo.data.patient;
        userLogged.token = "Bearer " + newUserInfo.data.token;
        console.log(userLogged)
        userSession.setUser({
            userLogged
        })

        navigate("/")
    }

    function updateUserInfo(e){
        let input = e.target.value

        const infoChanges = {...userInfo, [e.target.id]: input}
        setUserInfo(infoChanges);
        console.log(userInfo)
        console.log(infoChanges)
    }
    

    return (
        
        <div>
            <Header/>
            <div className="main-signIn">
            
            <TextField
                fullWidth
                required
                id="email"
                label="Email"
                type="search"
                variant="standard"
                onChange= {updateUserInfo}
            />                
            <TextField
                fullWidth
                required
                id="password"
                label="Senha"
                type="password"
                variant="standard"
                onChange={updateUserInfo}
            />
            <Button  variant="contained" onClick={ () => logInUser()}>Login</Button>
            </div>
        </div>
    )
} 