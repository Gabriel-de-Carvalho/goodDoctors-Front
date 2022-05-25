import React, { useContext } from 'react'
import "./Header.css"
import { Avatar } from '@mui/material'
import { UserContext } from '../../session/user-context'
import { useNavigate } from 'react-router-dom'


export default function Header() {
    const user = useContext(UserContext)
    const navigate = useNavigate()

    function navigateSignInPage(){
        navigate("/signIn")
    }

    function navigateUserView(){
        navigate("/userView");
    }

    const style = {
        marginLeft: "20%",
        margin:0
    }

    return(
        <div className="main-header">
             <h1 style={style}>Good Doctors</h1>
             <div classname="user-header">
                 
                { user.isLogged ? <span onClick={navigateUserView}>Ver meu perfil</span> : <span onClick={navigateSignInPage}>Acessar minha conta</span> }
             </div>
        </div>
    )
}