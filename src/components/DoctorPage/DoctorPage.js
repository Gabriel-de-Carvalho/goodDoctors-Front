import React, {useContext, useEffect, useState} from "react";
import Header from "../Header/Header";
import "./DoctorPage.css"
import { useLocation } from "react-router-dom";
import Rating from '@mui/material/Rating';
import API from "../../client/Client";
import { UserContext } from "../../session/user-context";
import { TextField, Button } from "@mui/material";

export default function DoctorPage(){
    const [value, setValue] = useState(0);
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState("")
    const user = useContext(UserContext)
    const state = useLocation();
    

    async function setRating(value, doctorID){
        var body = {"avaliation": value}
        const response = await API.post("changeAvaliation/" + doctorID, body, {
            headers: {
                'Authorization': user.user.userLogged.token
            }
        });

        response.status === 200 ? alert("Avaliação Realizada com Sucesso!") : alert("Falha no registro da avaliação.");
    }

    
    async function getComments(){
        console.log(state)
        console.log(state.state._id)
        console.log(user.user.userLogged.token)
        var comments =await API.get("/getComents/" + state.state._id, {
            headers: {
                'Authorization': user.user.userLogged.token
            }
        })
        console.log(comments.data)
        setComments(comments.data)
    }

    useEffect( () =>{
        console.log(user)
        console.log(state)
        getComments()
    },[])

     function OnChageComment(e){
        const comment = e.target.value
        setComment(comment);
    }
    
    async function createComment(){
        const retorno = await API.post("createComent/" + state.state._id, {"coments": comment}, {
            headers: {
                'Authorization': user.user.userLogged.token
            }
        })
        console.log(retorno)
    }

    return( 
        <div className="Doctor-Page">
            <Header/>
            <span class="dot"></span>
            <p className="doctorName">{state.state.name}</p>
            <p className="doctorSpecialty"> {state.state.specialty}</p>
            <p className="crm"> {"CRM: " + state.state.crm  + "-PB"}</p>

            <div className="Address">
                <p className="address"> {state.state.street + ", " + state.state.number + ", " + state.state.adress + ", " + state.state.city}</p>
                <p className="cep"> {"CEP: " + state.state.cep}</p>
            </div>
            
            <p className="phone"> {"Contato: " + state.state.phone}</p>

            {state.state.avaliation === undefined? <p>Ainda nao ha avaliacoes</p> : <Rating name="half-rating-read" value={state.state.avaliation.avg} precision={0.1} readOnly />}


            {user.isLogged && <p>Deixar uma avaliacao:</p>}

            {user.isLogged && <Rating name="simple-controlled" value={value} onChange={(event, newValue) => { setValue(newValue); }}/>}

            {user.isLogged && <Button sx= {{mr: 3}} variant="contained" onClick={ () => {setRating(value, state.state._id)}}>Avaliar</Button>}

            <div className="comment-section">
            {user.isLogged &&
            <TextField
                id="outlined-multiline-flexible"
                label="Comentario"
                multiline
                rowsMax="4"
                fullWidth
                variant="outlined"
                onChange={OnChageComment}
             />}
             {user.isLogged && <Button onClick={createComment}>Enviar Comentario</Button>}
             
            
            </div>
            <div>
                {user.isLogged && <p>Comentarios ({comments.lenght})</p>}
                {comments.map(
                    (comentario) => <p> {comentario}</p>
                
                )}

            </div>
        </div>
    )
}