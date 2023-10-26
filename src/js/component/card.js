import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const CardName = (props) => {

    const {store} = useContext(Context)
    console.log(store.contacts)

	return (
        <div className="container" style={{width: "1000px"}}>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" className="img-fluid" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div>
                            <div className="card-body">
                                <h5 className="card-title">{props.item.name}</h5>
                                <span className="card-text">{props.item.address}</span>
                                <span className="card-text"><small className="text-body-secondary">{props.item.phone}</small></span>
                                <span className="card-text"><small className="text-body-secondary">{props.item.email}</small></span>
                            </div>
                            <div>
                                {/*Aquí va el ícono de lapiz*/}
                                {/*Aquí va el ícono de borrar*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    };

    export default CardName;