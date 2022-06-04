import React, { useContext, useState } from "react";
import "./UserView.css"
import { UserContext } from '../../session/user-context'
import { useNavigate } from 'react-router-dom'
import Header from "../Header/Header";
import EditIcon from '@mui/icons-material/Edit';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from "@mui/material";
import API from "../../client/Client";

export default function UserView() {

    const [appointments, setAppointments] = useState([])

    const user = useContext(UserContext)
    console.log(user.user.userLogged);
    const navigate = useNavigate()
    var birthdate = user.user.userLogged.age.substring(0, 10).split("-")


    async function getAppointmentsById(){
        const consultas = await API.get("getByIdAppointments/" + user.user.userLogged._id, {
            headers: {
                "Authorization": user.user.userLogged.token
            }
        })
        console.log(consultas.data.data)
        setAppointments(consultas.data.slice(2, 4))
    }

    return (
        <div>
            <Header />
            <div className="User-View">
                <p className="name">{"Nome: " + user.user.userLogged.name}</p>
                <p className="birthDate">{"Data de nascimento: " + birthdate[2] + "/" + birthdate[1] + "/" + birthdate[0]}</p>
                <p className="cpf">{"CPF: " + user.user.userLogged.cpf}</p>
                <p className="email">{"E-mail: " + user.user.userLogged.email}</p>
                <div className="Address">
                    <p className="address"> {user.user.userLogged.street + ", " + user.user.userLogged.number + ", " + user.user.userLogged.adress + ", " + user.user.userLogged.city}</p>
                    <p className="cep"> {"CEP: " + user.user.userLogged.zipCode}</p>
                </div>
                <p className="phone"> {"Telefone: " + user.user.userLogged.phone}</p>

                <div>
                    <p>Alterar dados <EditIcon /></p>
                </div>

                <Button onClick={getAppointmentsById}>mostrar atendimentos</Button>

                {appointments.length > 0 && <div>
                    {appointments.map(
                        (appointment) => <div>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header">

                                    <Typography>
                                         data da consulta: {appointment.dateConsult}
                                    </Typography>
                                </AccordionSummary>

                                <AccordionDetails>
                                    <Typography>
                                        <ul>
                                            <li>
                                                data da consulta: {appointment.dateConsult}
                                            </li>
                                            <li>
                                                Doutor: {appointment.doctor.name}
                                            </li>
                                            <li>
                                                descrição: {appointment.description}
                                            </li>
                                       </ul>
                                    </Typography>
                                </AccordionDetails>

                            </Accordion>
                            
                        </div>
                    )}
                </div>}

            </div>
        </div>
    )
}