import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (

		<nav class="navbar navbar-light mb-3">
			<div>
			</div>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-success">Add new contact</button>
		 		</Link>
		 	</div>
		</nav>

	);
};
