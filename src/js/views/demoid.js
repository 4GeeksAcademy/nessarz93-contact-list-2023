import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const DemoId = () => {
	const { store, actions } = useContext(Context);
	const [data, setData] = useState({full_name:"", email:"", phone:"", address:"", agenda_slug:""})
	const {id} = useParams();

    useEffect(() => {
        actions.upgrade(id)
        .then(contactData => {setData(contactData);})
     .catch(error => {
        console.log("error", error)
    }); }, [actions,id]);

    const save = (e) => {
		e.preventDefault();
		actions.createContact(data);
		setData({full_name:"", email:"", phone:"", address:"", agenda_slug:""})
	}
	const info = (e) => {
		setData({
			...data,[e.target.name]: e.target.value
		})
	}

	return (

		<div className="container-fluid" style={{width: "800px"}}>
			<h1>Add New Contact</h1>
				<div className="mb-3">
					<label for="input1" className="form-label">Full Name</label>
					<input onChange={info} name="full_name" value={data.full_name} type="text" className="form-control" id="input1" placeholder="Enter Full Name"/>
				</div>
				<div className="mb-3">
					<label for="input2" className="form-label">Email</label>
					<input onChange={info} name="email" value={data.email} type="text" className="form-control" id="input2" placeholder="Enter Email"/>
				</div>
				<div className="mb-3">
					<label for="input3" className="form-label">Phone number</label>
					<input onChange={info} name="phone" value={data.phone} type="text" className="form-control" id="input3" placeholder="Enter Phone Number"/>
				</div>
				<div className="mb-3">
					<label for="input4" className="form-label">Address</label>
					<input onChange={info} name="address" value={data.address} type="text" className="form-control" id="input4" placeholder="Enter Address"/>
				</div>
				<div className="mb-3">
					<label for="input5" className="form-label">Agenda</label>
					<input onChange={info} name="agenda_slug" value={data.agenda_slug} type="textl" className="form-control" id="input5" placeholder="Enter Agenda"/>
				</div>
			<div class="d-grid gap-2">
  				<button class="btn btn-primary" type="button" onClick={save}>Save</button>
			</div>
			<Link to="/">
				Get back to contacts
		 	</Link>
		</div>

		
	);
};