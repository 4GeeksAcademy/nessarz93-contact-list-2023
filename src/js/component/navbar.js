import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (

		<nav class="navbar navbar-light bg-light mb-3">
			<div>
				<span class="navbar-brand mb-0 h1">Contact List</span>
			</div>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Add new contact</button>
		 		</Link>
		 	</div>
		</nav>

	);
};
