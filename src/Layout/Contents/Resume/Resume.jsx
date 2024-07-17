import React from "react";
import  p1 from'../../../Images/mohammed_profile.jpg' ;

function Resume(props)
{
    return(
    <>
    	<section className="cta-section theme-bg-light py-5">
			<div className="container text-center single-col-max-width">
				<h2 className="heading mb-3">Online Resume</h2>
				<a className="btn btn-primary" href="https://themes.3rdwavemedia.com/resources/sketch-template/resume-sketch-sketch-resume-template-for-software-developers/" target="_blank"><svg className="svg-inline--fa fa-file-pdf me-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="file-pdf" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V304H176c-35.3 0-64 28.7-64 64V512H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128zM176 352h32c30.9 0 56 25.1 56 56s-25.1 56-56 56H192v32c0 8.8-7.2 16-16 16s-16-7.2-16-16V448 368c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24H192v48h16zm96-80h32c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H304c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H320v96h16zm80-112c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H448v32h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H448v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V432 368z"></path></svg>
				Download PDF Version</a>
			</div>

		</section>
		<div className="container resume-container px-3 px-lg-1 id='content-to-print'">
			<article className="resume-wrapper mx-auto theme-bg-light p-5 mb-5 my-5 shadow-lg">
				<div className="resume-header">
					<div className="row align-items-center">
						<div className="resume-title col-12 col-md-6 col-lg-8 col-xl-9">
							<h2 className="resume-name mb-0 text-uppercase">Simon Doe</h2>
							<div className="resume-tagline mb-3 mb-md-0">Senior Software Engineer</div>
						</div>
						<div className="resume-contact col-12 col-md-6 col-lg-4 col-xl-3">
							<ul className="list-unstyled mb-0">
								<li className="mb-2"><svg className="svg-inline--fa fa-square-phone fa-fw fa-lg me-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="square-phone" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm90.7 96.7c9.7-2.6 19.9 2.3 23.7 11.6l20 48c3.4 8.2 1 17.6-5.8 23.2L168 231.7c16.6 35.2 45.1 63.7 80.3 80.3l20.2-24.7c5.6-6.8 15-9.2 23.2-5.8l48 20c9.3 3.9 14.2 14 11.6 23.7l-12 44C336.9 378 329 384 320 384C196.3 384 96 283.7 96 160c0-9 6-16.9 14.7-19.3l44-12z"></path></svg>
									<a className="resume-link" href="tel:#">0123 4567 890</a></li>
								<li className="mb-2"><svg className="svg-inline--fa fa-square-envelope fa-fw fa-lg me-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="square-envelope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM218 271.7L64.2 172.4C66 156.4 79.5 144 96 144H352c16.5 0 30 12.4 31.8 28.4L230 271.7c-1.8 1.2-3.9 1.8-6 1.8s-4.2-.6-6-1.8zm29.4 26.9L384 210.4V336c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V210.4l136.6 88.2c7 4.5 15.1 6.9 23.4 6.9s16.4-2.4 23.4-6.9z"></path></svg>
									<a className="resume-link" href="mailto:#">simon@yourwebsite.com</a></li>
								<li className="mb-2"><svg className="svg-inline--fa fa-globe fa-fw fa-lg me-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="globe" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"></path></svg>
									<a className="resume-link" href="https://themes.3rdwavemedia.com/devcard/bs5/2.0/resume.html#">www.yourwebsite.com</a></li>
								<li className="mb-0"><svg className="svg-inline--fa fa-location-dot fa-fw fa-lg me-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-dot" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"></path></svg>
								New York</li>
							</ul>
						</div>
					</div>
				</div>
				<hr/>
				<div className="resume-intro py-3">
					<div className="row align-items-center">
						<div className="col-12 col-md-3 col-xl-2 text-center">
						    <img className="resume-profile-image mb-3 mb-md-0 me-md-5  ms-md-0 rounded mx-auto" src={p1} alt="image"/>
						</div>
						
						<div className="col text-start">
							<p className="mb-0">Summarise your career here. <a className="theme-link" href="https://themes.3rdwavemedia.com/resources/sketch-template/resume-sketch-sketch-resume-template-for-software-developers/" target="_blank">You can make a PDF version of your resume using our free Sketch template here</a>. Donec quam felis, ultricies nec, pellentesque eu. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.  Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. </p>
						</div>

					</div>
				</div>

				<hr/>
				<div className="resume-body">
					<div className="row">
						<div className="resume-main col-12 col-lg-8 col-xl-9   pe-0   pe-lg-5">
							<section className="work-section py-3">
								<h3 className="text-uppercase resume-section-heading mb-4">Work Experiences</h3>
								<div className="item mb-3">
									<div className="item-heading row align-items-center mb-2">
										<h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">Senior Software Engineer</h4>
										<div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-start text-md-end">Google | 2019 - Present</div>
										
									</div>
									<div className="item-content">
										<p>Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis.</p>
										<ul className="resume-list">
											<li>Lorem ipsum dolor sit amet, consectetuer.</li>
											<li>Aenean commodo ligula eget dolor.</li>
											<li>Etiam ultricies nisi vel augue.</li>
										</ul>
									</div>
								</div>
							</section>


							
							<section className="project-section py-3">
								<h3 className="text-uppercase resume-section-heading mb-4">Projects</h3>
								<div className="item mb-3">
									<div className="item-heading row align-items-center mb-2">
										<h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">Project Lorem Ipsum</h4>
										<div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-start text-md-end">Open Source</div>
										
									</div>
									<div className="item-content">
										<p>You can use this section for your side projects. You can <a href="https://themes.3rdwavemedia.com/devcard/bs5/2.0/resume.html#" className="theme-link">provide a project link here</a> as well. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
										
										
									</div>
								</div>
 

							</section>

						</div>

						<aside className="resume-aside col-12 col-lg-4 col-xl-3 px-lg-4 pb-lg-4">
							<section className="skills-section py-3">
								<h3 className="text-uppercase resume-section-heading mb-4">Skills</h3>
								<div className="item">
									<h4 className="item-title">Technical</h4>
									<ul className="list-unstyled resume-skills-list">
										<li className="mb-2">JavaScript/Angular/React/Vue</li>
										<li className="mb-2">Python/Ruby/PHP</li><li>
											</li><li className="mb-2">Node.js/ASP.NET</li>
											<li className="mb-2">PostgreSQL/MySQL</li>
											<li className="mb-2">Object-oriented design</li>
											<li className="mb-2">Design and implement database structures</li>
											<li>Lead and deliver complex software systems</li>
										</ul>
									</div>

									<div className="item">
										<h4 className="item-title">Professional</h4>
										<ul className="list-unstyled resume-skills-list">
											<li className="mb-2">Effective communication</li>
											<li className="mb-2">Team player</li><li>
												</li><li className="mb-2">Strong problem solver</li>
												<li>Good time management</li>
											</ul>
										</div>

									</section>

									<section className="education-section py-3">
										<h3 className="text-uppercase resume-section-heading mb-4">Education</h3>
										<ul className="list-unstyled resume-education-list">
											<li className="mb-3">
												<div className="resume-degree font-weight-bold">MSc in Computer Science</div>
												<div className="resume-degree-org text-muted">University College London</div>
												<div className="resume-degree-time text-muted">2010 - 2011</div>
											</li>
											<li>
												<div className="resume-degree font-weight-bold">BSc Maths and Physics</div>
												<div className="resume-degree-org text-muted">Imperial College London</div>
												<div className="resume-degree-time text-muted">2007 - 2010</div>
											</li>
										</ul>
									</section>

									<section className="education-section py-3">
										<h3 className="text-uppercase resume-section-heading mb-4">Awards</h3>
										<ul className="list-unstyled resume-awards-list">
											<li className="mb-3">
												<div className="font-weight-bold">Award Lorem Ipsum</div>
												<div className="text-muted">Microsoft lorem ipsum (2019)</div>
											</li>
											<li>
												<div className="font-weight-bold">Award Donec Sodales</div>
												<div className="text-muted">Oracle Aenean (2017)</div>
											</li>
										</ul>
									</section>

									<section className="skills-section py-3">
										<h3 className="text-uppercase resume-section-heading mb-4">Languages</h3>
										<ul className="list-unstyled resume-lang-list">
											<li className="mb-2">English <span className="text-muted">(Native)</span></li>
											<li>Spanish <span className="text-muted">(Professional)</span></li>
										</ul>
									</section>

									<section className="skills-section py-3">
										<h3 className="text-uppercase resume-section-heading mb-4">Interests</h3>
										<ul className="list-unstyled resume-interests-list mb-0">
											<li className="mb-2">Climbing</li>
											<li className="mb-2">Snowboarding</li>
											<li className="mb-2">Photography</li>
											<li>Travelling</li>
										</ul>
									</section>

									
						</aside>
						</div>
						</div>
						<hr/>
					</article>
		</div> 
    </>
	
    );
}


export default Resume;