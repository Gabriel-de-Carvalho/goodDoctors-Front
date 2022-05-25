import React from "react";
import { Rating } from "@mui/material";
import "./DoctorCard.css"

export default function DoctorCard(props){
    return(
        <div onClick={props.onClick} className="DoctorCard-Main">
            <span class="dot"></span>
            <p className="doctorName">{props.name}</p>
            <p className="doctorSpecialty"> {props.specialty}</p>
            <p className="distancia">{props.distancia} km</p>
            {/*<Rating name="read-only" value={props.avaliationAvg} readOnly/> */}
        </div>
    )
}