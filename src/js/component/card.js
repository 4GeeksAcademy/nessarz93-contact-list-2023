import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const CardName = (props) => {

    // const {store, actions} = useContext(Context)

	return (
        <>
            <div className="card mb-3" style={{width: "540px;"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="..." className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Name</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
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
        </>
    )
    };

    export default CardName;