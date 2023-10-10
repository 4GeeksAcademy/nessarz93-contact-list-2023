import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const CardName = (props) => {

    const {store, actions} = useContext(Context)

	return (
        <>
            <div className="card m-2" style={{width: "18rem"}}>
                <img src={"https://starwars-visualguide.com/assets/img/characters/"+props.idc+".jpg"} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Name: {props.name}</h5>
                <p className="card-text">
                    Gender: {props.gender} <br/> 
                    Hair color: {props.hair_color} <br/>
                    Eye-color: {props.eye_color}
                </p>
                <Link to={"/single/" + props.idc} className="btn btn-primary">Learn more</Link>
                <button type="button" class="btn btn-warning m-3" onClick={()=> actions.agregarFav()}>Add</button>
            </div>
            </div>
        </>
    )
    };

    export default CardName;