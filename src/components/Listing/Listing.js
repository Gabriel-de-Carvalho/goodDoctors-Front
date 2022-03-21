import React, { useState, useEffect } from "react";
import DoctorCard from "../DoctorCard/DoctorCard";
import Header from "../Header/Header";
import "./Listing.css"
import { useLocation, useNavigate } from "react-router-dom";
import API from "../../client/Client"

export default function Listing(){
    const [listDoctors, setListDoctors] = useState([])
    const searchInfo = useLocation();
    const navigate = useNavigate();

    useEffect( () =>{
        getAllDoctors()
<<<<<<< HEAD
        
=======
>>>>>>> 8c65f8597c4978955eb3d6fa8609fcc52558e893
    }, [])

    async function  getAllDoctors(){
        const response = await API.get("/getByPathologies/" + searchInfo.state)
        setListDoctors(response.data)
    }

    function navigateListing(doctor){
        const setInfo = doctor
        navigate("/doctorPage", {state: setInfo}) 
    }

    return(
        <div className="Listing-Page">
            <Header/>
            <div className="Listing-Main">
               {listDoctors.map(
                   (doctor) => <DoctorCard name = {doctor.name} specialty = {doctor.specialty} rating = {doctor.rating} onClick={ () => {navigateListing(doctor)}}/>
               )}
            </div>
        </div>
    )
} 