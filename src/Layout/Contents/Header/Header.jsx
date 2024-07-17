import React from "react";
import  profile from'../../../Images/mohammed_profile.jpg' ;
import { Codepen, Github, Linkedin, Twitter } from "../../../shared/component/Svg";
import ListItem from "../../../shared/component/ListItem";
import { Link, NavLink } from "react-router-dom";
function Header(){  
    return (
     	<>
        <header className="header text-center">	    
        <div className="force-overflow">
            <h1 className="blog-name pt-lg-4 mb-0"><a className="no-text-decoration" href="https://themes.3rdwavemedia.com/devcard/bs5/2.0/index.html">MOHAMMED</a></h1>
            
            <nav className="navbar navbar-expand-lg navbar-dark">
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div id="navigation" className="collapse navbar-collapse flex-column">
                    <div className="profile-section pt-3 pt-lg-0">
                        <img className="profile-image mb-3 rounded-circle mx-auto" src={profile} alt="image"/>			
                        
                        <div className="bio mb-3">Hi, my name is Simon Doe and I'm a senior software engineer. Welcome to my personal website!</div>
                        <ul className="social-list list-inline py-2 mx-auto">
                            <ListItem item={{svg:<Twitter/>,link:"#"}}/> 
                            <ListItem item={{svg:<Github/>,link:"#"}}/> 
                            <ListItem item={{svg:<Codepen/>,link:"#"}}/> 
                            <ListItem item={{svg:<Linkedin/>,link:"#"}}/> 
                        </ul>
                        <hr/> 
                    </div>
                    
                    <ul className="navbar-nav flex-column text-start">
                        <li className="nav-item">
                            
                        <NavLink  className="nav-link"  to='/' exact  ><svg className="svg-inline--fa fa-user fa-fw me-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"></path></svg>
                              About Me <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/portfolio'><svg className="svg-inline--fa fa-laptop-code fa-fw me-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="laptop-code" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M64 96c0-35.3 28.7-64 64-64H512c35.3 0 64 28.7 64 64V352H512V96H128V352H64V96zM0 403.2C0 392.6 8.6 384 19.2 384H620.8c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8H76.8C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"></path></svg>
                            Portfolio</NavLink>
                        </li>
  
                        <li className="nav-item">
                            <NavLink className="nav-link"  to='/contact'><svg className="svg-inline--fa fa-envelope-open-text fa-fw me-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope-open-text" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M215.4 96H144 107.8 96v8.8V144v40.4 89L.2 202.5c1.6-18.1 10.9-34.9 25.7-45.8L48 140.3V96c0-26.5 21.5-48 48-48h76.6l49.9-36.9C232.2 3.9 243.9 0 256 0s23.8 3.9 33.5 11L339.4 48H416c26.5 0 48 21.5 48 48v44.3l22.1 16.4c14.8 10.9 24.1 27.7 25.7 45.8L416 273.4v-89V144 104.8 96H404.2 368 296.6 215.4zM0 448V242.1L217.6 403.3c11.1 8.2 24.6 12.7 38.4 12.7s27.3-4.4 38.4-12.7L512 242.1V448v0c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64v0zM176 160H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16z"></path></svg>
                            Contact</NavLink>
                        </li>
                    
                    </ul>
                    
                    <div className="my-2">
                        <a className="btn btn-primary" href="https://themes.3rdwavemedia.com/devcard/bs5/2.0/contact.html" target="_blank"><svg className="svg-inline--fa fa-paper-plane me-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="paper-plane" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"></path></svg>
                        Hire Me</a>
                    </div>
                    <div className="my-2">
                        <a className="btn btn-primary" href="https://themes.3rdwavemedia.com/devcard/bs5/2.0/contact.html" target="_blank"><svg className="svg-inline--fa fa-paper-plane me-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="paper-plane" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                            <path fill="currentColor" d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z">
                            </path>
                            </svg>
                       Resume</a>
                    </div>
                    

                    {/* <div className="dark-mode-toggle text-center w-100">
                        <hr className="mb-4"/>
                        <h4 className="toggle-name mb-3 "><svg className="svg-inline--fa fa-circle-half-stroke me-1" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-half-stroke" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"></path></svg>
                        Dark Mode
                        </h4>
                        
                        <input className="toggle" id="darkmode" type="checkbox"/>
                        <label className="toggle-btn mx-auto mb-0" for="darkmode"></label>
                        
                    </div> */}
                    
                </div>
            </nav>
        </div>
        </header>

        </>
	
);
}
export default Header;