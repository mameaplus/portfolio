import React from "react";
import  animalbre from '../../../Images/animalbre.png' ;

function ProjectDetail({projects})
{
	let headerStyle=
	{
		backgroundImage:`url(${animalbre})`,
	};
    return(
    <>
    <section className="cta-section theme-bg-light" >
		    <div className="container text-center single-col-max-width py-5" >
		    </div>
	</section>
	 
 
    </>
    );
}

export default ProjectDetail;