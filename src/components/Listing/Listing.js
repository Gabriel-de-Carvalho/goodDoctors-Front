import React, { useState, useEffect } from "react";
import DoctorCard from "../DoctorCard/DoctorCard";
import Header from "../Header/Header";
import "./Listing.css"
import API from "../../client/Client"

export default function Listing(){
    const [listDoctors, setListDoctors] = useState([])


    useEffect( () =>{
        getAllDoctors()

        
    }, [])

    async function  getAllDoctors(){
        const response = await API.get("/getAllDoctors")
        setListDoctors(response.data)
    }

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