import React, { useState } from "react";
import DoctorCard from "../DoctorCard/DoctorCard";
import Header from "../Header/Header";
import "./Listing.css"

export default function Listing(){
    const [listDoctors, setListDoctors] = useState([
        {
            "name": "João da Silva",
            "specialty": "Cardiologista",
            "rating": 5
        },
        {
            "name": "Fábio Cardoso",
            "specialty": "Cardiologista",
            "rating": 4
        },
        {
            "name": "Carla Guedes",
            "specialty": "Cardiologista",
            "rating": 5
        },
        {
            "name": "Sandra Tavares",
            "specialty": "Cardiologista",
            "rating": 5
        },
        {
            "name": "Serafim Nunes",
            "specialty": "Cardiologista",
            "rating": 3
        },
        {
            "name": "Carlos Jr.",
            "specialty": "Cardiologista",
            "rating": 4
        },
    ])

    return(
        <div className="Listing-Page">
            <Header/>
            <div className="Listing-Main">
               {listDoctors.map(
                   (doctor) => <DoctorCard name = {doctor.name} specialty = {doctor.specialty} rating = {doctor.rating}/>
               )}
            </div>
        </div>
    )
}