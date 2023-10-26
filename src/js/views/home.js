import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import CardName from "../component/card.js";

export const Home = () => (
	
	const {store} = useContext(Context)

	//Body//
	return (
		<div className="container">
			{store.contacts.map((item, index) => {
				return (
					<CardName key= {item.id} item={item}/>
				)}
			)};	
		</div>
	)
);
