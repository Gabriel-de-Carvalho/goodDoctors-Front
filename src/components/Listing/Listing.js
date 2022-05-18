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
        getAllDoctors(searchInfo)
    }, [])

    async function  getAllDoctors(search){

        if(search.state.searchType === "symptoms"){
            const response = await API.get("/getByPathologies/" + search.state.searchParam)
            const newDoctors = response.data
            for( let i = 0; i < newDoctors.length; i++){
                newDoctors[i] = {...newDoctors[i], distance: distanciaRandom()}
            }

            setListDoctors(response.data)
        }else{
            const response = await API.get("/getBySpecialty/" + search.state.searchParam)
            const newDoctors = response.data
            for( let i = 0; i < newDoctors.length; i++){
                newDoctors[i] = {...newDoctors[i], distance: distanciaRandom()}
            }

            setListDoctors(response.data)
        }

    }

    function sortDoctors(){
       return listDoctors.sort((a,b) => a.distance - b.distance)
    }

    function distanciaRandom(){
        if(Math.random() < 0.5){
            return Math.round(Math.random() * 100) / 10 
        }
        return Math.round(Math.random() * 10 + 0.7) / 10 
    }

    function navigateListing(doctor){
        const setInfo = doctor
        navigate("/doctorPage", {state: setInfo}) 
    }

    return(
        <div className="Listing-Page">
            <Header/>
            <div className="Listing-Main">
               {sortDoctors().map(
                   (doctor) => <DoctorCard name = {doctor.name} specialty = {doctor.specialty} distancia={doctor.distance} onClick={ () => {navigateListing(doctor)}}/>
               )}
            </div>
        </div>
    )
} 