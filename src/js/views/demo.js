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

		// <div classNameName="container">
		// 	<ul classNameName="list-group">
		// 		{store.demo.map((item, index) => {
		// 			return (
		// 				<li
		// 					key={index}
		// 					classNameName="list-group-item d-flex justify-content-between"
		// 					style={{ background: item.background }}>
		// 					<Link to={"/single/" + index}>
		// 						<span>Link to: {item.title}</span>
		// 					</Link>
		// 					{// Conditional render example
		// 					// Check to see if the background is orange, if so, display the message
		// 					item.background === "orange" ? (
		// 						<p style={{ color: item.initial }}>
		// 							Check store/flux.js scroll to the actions to see the code
		// 						</p>
		// 					) : null}
		// 					<button classNameName="btn btn-success" onClick={() => actions.changeColor(index, "orange")}>
		// 						Change Color
		// 					</button>
		// 				</li>
		// 			);
		// 		})}
		// 	</ul>
		// 	<br />
		// 	<Link to="/">
		// 		<button classNameName="btn btn-primary">Back home</button>
		// 	</Link>
		// </div>
	);
};
