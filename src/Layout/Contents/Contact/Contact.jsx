import React from "react";

function Contact(props)
{
    return(
    <>
	    <section className="cta-section theme-bg-light py-5">
		    <div className="container text-center single-col-max-width">
			    <h2 className="heading">Contact</h2>
			    <div className="intro">
			    <p>Interested in hiring me for your project or just want to say hi? You can fill in the contact form below or send me an email to <a className="text-link" href="mailto:#">simon.doe@yourwebsite.com</a></p>
			    <p>Want to get connected? Follow me on the social channels below.</p>
			    <ul className="list-inline mb-0">
		            <li className="list-inline-item mb-3"><a className="twitter" href="https://themes.3rdwavemedia.com/devcard/bs5/2.0/contact.html#"><svg className="svg-inline--fa fa-twitter fa-fw fa-lg" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
		            </a></li>
		            
	                <li className="list-inline-item mb-3"><a className="linkedin" href="https://themes.3rdwavemedia.com/devcard/bs5/2.0/contact.html#"><svg className="svg-inline--fa fa-linkedin-in fa-fw fa-lg" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
	                </a></li>
	                <li className="list-inline-item mb-3"><a className="github" href="https://themes.3rdwavemedia.com/devcard/bs5/2.0/contact.html#"><svg className="svg-inline--fa fa-github-alt fa-fw fa-lg" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 512" data-fa-i2svg=""><path fill="currentColor" d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"></path></svg>
	                </a></li>
	                <li className="list-inline-item"><a className="instagram" href="https://themes.3rdwavemedia.com/devcard/bs5/2.0/contact.html#"><svg className="svg-inline--fa fa-instagram fa-fw fa-lg" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
	                </a></li>
	                <li className="list-inline-item mb-3"><a className="stack-overflow" href="https://themes.3rdwavemedia.com/devcard/bs5/2.0/contact.html#"><svg className="svg-inline--fa fa-stack-overflow fa-fw fa-lg" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="stack-overflow" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M290.7 311L95 269.7 86.8 309l195.7 41zm51-87L188.2 95.7l-25.5 30.8 153.5 128.3zm-31.2 39.7L129.2 179l-16.7 36.5L293.7 300zM262 32l-32 24 119.3 160.3 32-24zm20.5 328h-200v39.7h200zm39.7 80H42.7V320h-40v160h359.5V320h-40z"></path></svg>
	                </a></li>
	                <li className="list-inline-item mb-3"><a className="medium" href="https://themes.3rdwavemedia.com/devcard/bs5/2.0/contact.html#"><svg className="svg-inline--fa fa-medium fa-fw fa-lg" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="medium" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M180.5,74.262C80.813,74.262,0,155.633,0,256S80.819,437.738,180.5,437.738,361,356.373,361,256,280.191,74.262,180.5,74.262Zm288.25,10.646c-49.845,0-90.245,76.619-90.245,171.095s40.406,171.1,90.251,171.1,90.251-76.619,90.251-171.1H559C559,161.5,518.6,84.908,468.752,84.908Zm139.506,17.821c-17.526,0-31.735,68.628-31.735,153.274s14.2,153.274,31.735,153.274S640,340.631,640,256C640,171.351,625.785,102.729,608.258,102.729Z"></path></svg>
	                </a></li>
	                <li className="list-inline-item mb-3"><a className="codepen" href="https://themes.3rdwavemedia.com/devcard/bs5/2.0/contact.html#"><svg className="svg-inline--fa fa-codepen fa-fw fa-lg" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="codepen" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z"></path></svg>
	                </a></li>
	                
	                
	                
	                
	                
	                
	            </ul>
	            
			    
			</div>
			
	    </div></section>
	    <section className="contact-section px-3 py-5 p-md-5">
		    <div className="container">
			    <form id="contact-form" className="contact-form col-lg-8 mx-lg-auto" method="post" action="https://themes.3rdwavemedia.com/devcard/bs5/2.0/contact.html">
			        <h3 className="text-center mb-3">Get In Touch</h3>
			        <div className="row g-3">                                                           
		                <div className="col-12 col-md-6">
		                    <label className="sr-only" for="cname">Name</label>
		                    <input type="text" className="form-control" id="cname" name="name" placeholder="Name" minlength="2" required="" aria-required="true"/>
		                </div>                    
		                <div className="col-12 col-md-6">
		                    <label className="sr-only" for="cemail">Email</label>
		                    <input type="email" className="form-control" id="cemail" name="email" placeholder="Email" required="" aria-required="true"/>
		                </div>
		                <div className="col-12">
			                <select id="services" className="form-select" name="services">
								<option selected="">Select a service package you're interested in...</option>
								<option value="basic">Basic</option>
								<option value="standard">Standard</option>
								<option value="premium">Premium</option>
								<option value="not sure">Not sure</option>
							</select>
							<div className="mt-2">
							    <small className="form-text text-muted pt-1"><svg className="svg-inline--fa fa-circle-info me-2 text-primary" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-info" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path></svg>
							    	Want to know what's included in each package? Check the <a className="text-link" href="https://themes.3rdwavemedia.com/devcard/bs5/2.0/services.html" target="_blank">Services &amp; Pricing</a> page.</small>
							</div>
						</div>
		                <div className="col-12">
		                    <label className="sr-only" for="cmessage">Your message</label>
		                    <textarea className="form-control" id="cmessage" name="message" placeholder="Enter your message" rows="10" required="" aria-required="true"></textarea>
		                </div>
		                 <div className="form-group col-12">
		                    <button type="submit" className="btn btn-block btn-primary py-2">Send Now</button>
		                </div>                           
		            </div>
		            
		        </form>
		    </div>
		    
	    </section>
	    
	    <footer className="footer text-center py-4">
			<small className="copyright">Template Copyright © <a href="https://themes.3rdwavemedia.com/" target="_blank">3rd Wave Media</a></small>
		</footer>
    
    </>
    );
}

export default Contact;