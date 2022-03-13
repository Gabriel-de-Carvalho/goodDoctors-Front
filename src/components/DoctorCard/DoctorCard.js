import React from "react";
import { Rating } from "@mui/material";
import "./DoctorCard.css"

export default function DoctorCard(props){
    return(
        <div className="DoctorCard-Main">
            <span class="dot"></span>
            <p className="doctorName">{props.name}</p>
            <p className="doctorSpecialty"> {props.specialty}</p>
            {/* <Rating name="read-only" value={props.rating} readOnly/> */}
        </div>
    )
}