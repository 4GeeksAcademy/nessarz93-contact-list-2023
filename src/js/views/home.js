import React from "react";
import "../../styles/home.css";

export const Home = () => (
	<div classNameName="text-center mt-5">
		
		<div className="card mb-3">
			<div className="row g-0">
				<div className="col-md-2">
					<img Link="..." className="img-fluid rounded-start" alt="..."/>
				</div>
				<div className="col-md-10">
					<div className="card-body">
						<h3 className="card-title">Nombre</h3>
						<h6 className="card-text text-secondary">Dirección</h6>
						<p className="card-text text-secondary">Teléfono</p>
						<p className="card-text text-secondary">Correo</p>
					</div>
				</div>
			</div>
		</div>

	</div>
);
