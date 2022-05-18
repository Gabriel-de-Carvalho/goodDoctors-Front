import React, { useContext } from "react";
import "./UserView.css"
import { UserContext } from '../../session/user-context'
import { useNavigate } from 'react-router-dom'
import Header from "../Header/Header";
import EditIcon from '@mui/icons-material/Edit';

export default function UserView(){
    const user = useContext(UserContext)
    const navigate = useNavigate()
    var birthdate = user.user.age.substring(0, 10).split("-")

    return(
        <div>
            <Header/>
            <div className="User-View">
                <p className="name">{"Nome: " + user.user.name}</p>
                <p className="birthDate">{"Data de nascimento: " + birthdate[2] + "/" + birthdate[1] + "/" + birthdate[0]}</p>
                <p className="cpf">{"CPF: " + user.user.cpf}</p>
                <p className="email">{"E-mail: " + user.user.email}</p>
                <div className="Address">
                    <p className="address"> {user.user.street + ", " + user.user.number + ", " + user.user.adress + ", " + user.user.city}</p>
                    <p className="cep"> {"CEP: " + user.user.zipCode}</p>
                </div>
                <p className="phone"> {"Telefone: " + user.user.phone}</p>
                <div>
                    <p>Alterar dados <EditIcon/></p>
                </div>
            </div> 
        </div>
    )
}