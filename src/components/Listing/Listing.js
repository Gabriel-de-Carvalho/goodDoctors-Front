import React, { useState, useEffect } from "react";
import DoctorCard from "../DoctorCard/DoctorCard";
import Header from "../Header/Header";
import "./Listing.css"
import { useLocation } from "react-router-dom";
import API from "../../client/Client"

export default function Listing(){
    const [listDoctors, setListDoctors] = useState([])
    const state = useLocation();

    useEffect( () =>{
        getAllDoctors()
        console.log(state.state)
        
    }, [])

    async function  getAllDoctors(){
        const response = await API.get("/getByPathologies/" + state.state)
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