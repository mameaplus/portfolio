import React from "react";
import  pro1 from'../../../Images/project-1.jpg' ;
import ProjectCard from "../../../shared/component/ProjectCard";

function Portfolio({projects})
{
	console.info(projects);
    return(
    <>
    <section className="cta-section theme-bg-light py-5">
		    <div className="container text-center single-col-max-width">
			    <h2 className="heading">Portfolio</h2>
			    <div className="intro">
			    <p>Welcome to my online portfolio. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. I'm taking on freelance work at the moment. Want some help building your software?</p>
			    
			    </div>
			    <a className="btn btn-primary" href="https://themes.3rdwavemedia.com/devcard/bs5/2.0/contact.html" target="_blank"><svg className="svg-inline--fa fa-paper-plane me-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="paper-plane" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"></path></svg>
			    Hire Me</a>
			    
		    </div>
	</section>
	<section className="projects-list px-3 py-5 p-md-5">
		    {/* <div className="container">
			    <div className="text-center">
				    <ul id="filters" className="filters mb-5 mx-auto   ps-0">
		                <li className="type active mb-3 mb-lg-0" data-filter="*">All</li>
		                <li className="type  mb-3 mb-lg-0" data-filter=".webapp">We App</li>
		                <li className="type  mb-3 mb-lg-0" data-filter=".mobileapp">Mobile App</li>
		                <li className="type  mb-3 mb-lg-0" data-filter=".frontend">Frontend</li>
		                <li className="type  mb-3 mb-lg-0" data-filter=".backend">Backend</li>
		            </ul>

			    </div>
			</div> */}
			<h2 class="section-title font-weight-bold mb-5">Featured Projects</h2>

			<div className="row">
			{
				projects.map((project)=><ProjectCard project={project}/>)
			}	
            
        	</div>
	</section>
 
    </>
    );
}

export default Portfolio;