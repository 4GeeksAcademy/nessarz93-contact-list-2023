import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const CardName = (props) => {

    // const {store, actions} = useContext(Context)

	return (
        <div className="container" style={{width: "1000px"}}>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Name</h5>
                            <span className="card-text">Dirección</span>
                            <span className="card-text"><small className="text-body-secondary">Teléfono</small></span>
                            <span className="card-text"><small className="text-body-secondary">Email</small></span>
                        </div>
                        <div>
                            {/*Aquí va el ícono de lapiz*/}
                            {/*Aquí va el ícono de borrar*/}
                        </div>
                    </div>
                </div>
            </div>

            {/* <div classNameName="card m-2" style={{width: "18rem"}}>
                <img src={"https://starwars-visualguide.com/assets/img/characters/"+props.idc+".jpg"} classNameName="card-img-top" alt="..."/>
            <div classNameName="card-body">
                <h5 classNameName="card-title">Name: {props.name}</h5>
                <p classNameName="card-text">
                    Gender: {props.gender} <br/> 
                    Hair color: {props.hair_color} <br/>
                    Eye-color: {props.eye_color}
                </p>
                <Link to={"/single/" + props.idc} classNameName="btn btn-primary">Learn more</Link>
                <button type="button" className="btn btn-warning m-3" onClick={()=> actions.agregarFav()}>Add</button>
            </div>
            </div> */}
        </div>
    )
    };

    export default CardName;