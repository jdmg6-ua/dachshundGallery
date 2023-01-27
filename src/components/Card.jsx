import React from "react";

export default function Card({url}) {
	return(
		<div
			className="shadow-lg rounded-lg bg-white overflow-hidden h-[400px] md:h-[300px] lg:h-[400] bg-center bg-cover bg-no-repeat"
			style={{backgroundImage: `url(${url})`}}
		/>	
	)
}
