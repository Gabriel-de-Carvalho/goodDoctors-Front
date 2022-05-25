import React, { useContext } from "react";
import "./UserView.css"
import { UserContext } from '../../session/user-context'
import { useNavigate } from 'react-router-dom'
import Header from "../Header/Header";
import EditIcon from '@mui/icons-material/Edit';

export default function UserView(){
    const user = useContext(UserContext)
    console.log(user.user.userLogged);
    const navigate = useNavigate()
    var birthdate = user.user.userLogged.age.substring(0, 10).split("-")

    return(
        <div>
            <Header/>
            <div className="User-View">
                <p className="name">{"Nome: " +user.user.userLogged.name}</p>
                <p className="birthDate">{"Data de nascimento: " + birthdate[2] + "/" + birthdate[1] + "/" + birthdate[0]}</p>
                <p className="cpf">{"CPF: " + user.user.userLogged.cpf}</p>
                <p className="email">{"E-mail: " + user.user.userLogged.email}</p>
                <div className="Address">
                    <p className="address"> {user.user.userLogged.street + ", " + user.user.userLogged.number + ", " + user.user.userLogged.adress + ", " + user.user.userLogged.city}</p>
                    <p className="cep"> {"CEP: " + user.user.userLogged.zipCode}</p>
                </div>
                <p className="phone"> {"Telefone: " + user.user.userLogged.phone}</p>
                <div>
                    <p>Alterar dados <EditIcon/></p>
                </div>
            </div> 
        </div>
    )
}