import React, {useEffect} from "react";
import Header from "../Header/Header";
import "./DoctorPage.css"
import { useLocation } from "react-router-dom";

export default function DoctorPage(){
    const state = useLocation();

    return(
        <div className="Doctor-Page">
            <Header/>
            <span class="dot"></span>
            <p className="doctorName">{state.state.name}</p>
            <p className="doctorSpecialty"> {state.state.specialty}</p>
            <p className="crm"> {"CRM: " + state.state.crm  + "-PB"}</p>

            <div className="Address">
                <p className="address"> {state.state.street + ", " + state.state.number + ", " + state.state.adress + ", " + state.state.city}</p>
                <p className="city"> {"CEP: " + state.state.city}</p>
            </div>
            
            <p className="phone"> {"Contato: " + state.state.phone}</p>
        </div>
    )
}