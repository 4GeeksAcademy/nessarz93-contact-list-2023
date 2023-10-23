import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (

		<div className="container-fluid" style={{width: "800px"}}>
			<h1>Add New Contact</h1>
			<form>
				<div className="mb-3">
					<label for="input1" className="form-label">Full Name</label>
					<input type="email" className="form-control" id="input1" placeholder="Enter Full Name"/>
				</div>
				<div className="mb-3">
					<label for="input2" className="form-label">Email</label>
					<input type="email" className="form-control" id="input2" placeholder="Enter Email"/>
				</div>
				<div className="mb-3">
					<label for="input3" className="form-label">Phone number</label>
					<input type="email" className="form-control" id="input3" placeholder="Enter Phone Number"/>
				</div>
				<div className="mb-3">
					<label for="input4" className="form-label">Address</label>
					<input type="email" className="form-control" id="input4" placeholder="Enter Address"/>
				</div>
			</form>
			<div class="d-grid gap-2">
  				<button class="btn btn-primary" type="button">Save</button>
			</div>
			<Link to="/">
				Get back to contacts
		 	</Link>
		</div>

		
	);
};
