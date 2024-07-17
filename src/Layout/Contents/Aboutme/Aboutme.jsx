import React from "react";
import  p1 from'../../../Images/profile-3.png' ;
import  blog1 from'../../../Images/blog-post-thumb-card-1.jpg' ;
import  project1 from'../../../Images/project-1.jpg' ;
import SkillCard from "../../../shared/component/SkillCard";




function Aboutme({skills})
{
    return(
    <>

		
<section className="overview-section p-3 p-lg-5">
    <div className="container">
        <h2 className="section-title font-weight-bold mb-3">What I do</h2>
        <div className="section-intro mb-5">I have more than 10 years' experience building software for clients all over the world. Below is a quick overview of my main technical skill sets and technologies I use. Want to find out more about my experience? Check out my <a className="text-link" href="https://themes.3rdwavemedia.com/devcard/bs5/2.0/resume.html">online resume</a> and <a className="text-link" href="https://themes.3rdwavemedia.com/devcard/bs5/2.0/portfolio.html">project portfolio</a>.</div>
        <div className="row"> 
     
        {skills.length!=0 && skills.map((skill)=><SkillCard skill={skill}/>)}

        </div>
        <div className="text-center py-3"><a href="https://themes.3rdwavemedia.com/devcard/bs5/2.0/services.html" className="btn btn-primary"><svg className="svg-inline--fa fa-circle-right me-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM294.6 135.1l99.9 107.1c3.5 3.8 5.5 8.7 5.5 13.8s-2 10.1-5.5 13.8L294.6 376.9c-4.2 4.5-10.1 7.1-16.3 7.1C266 384 256 374 256 361.7l0-57.7-96 0c-17.7 0-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32l96 0 0-57.7c0-12.3 10-22.3 22.3-22.3c6.2 0 12.1 2.6 16.3 7.1z"></path></svg>
            Services &amp; Pricing
            
        </a></div>
        
    </div>
</section>


<section className="testimonials-section p-3 p-lg-5">
    <div className="container">
        <h2 className="section-title font-weight-bold mb-5">Testimonials</h2>
        <div className="testiomonial-carousel-container">
            <div className="tns-outer" id="tns1-ow">
                <div className="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span className="current">9 to 11</span>  of 6</div>
                <div id="tns1-mw" className="tns-ovh">
                <div className="tns-inner" id="tns1-iw">
                <div className="testimonial-carousel  tiny-slider  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal" id="tns1" style={{transform: 'translate3d(-50%, 0px, 0px)'}}>
                    {/* Start Listing */}
                    <div className="item tns-item tns-slide-cloned" aria-hidden="true" tabindex="-1">
                        <div className="item-inner">
                            <div className="quote-holder">
                                <blockquote className="quote-content">
                                    Mohammed is a brilliant software engineer! Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis.
                                </blockquote>
                                <svg className="svg-inline--fa fa-quote-left" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"></path></svg>
                                
                            </div>
                            <div className="source-holder">
                                <div className="source-profile">
                                    <img src={p1} src1="./profile-5.png" alt="image"/>
                                </div>
                                <div className="meta">
                                    <div className="name">Olivia White</div>
                                    <div className="info">Product Manager, Dropbox</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item tns-item tns-slide-cloned" aria-hidden="true" tabindex="-1">
                        <div className="item-inner">
                            <div className="quote-holder">
                                <blockquote className="quote-content">
                                    Mohammed is a brilliant software engineer! Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis.
                                </blockquote>
                                <svg className="svg-inline--fa fa-quote-left" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"></path></svg>
                                
                            </div>
                            <div className="source-holder">
                                <div className="source-profile">
                                    <img src={p1} src1="./profile-5.png" alt="image"/>
                                </div>
                                <div className="meta">
                                    <div className="name">Olivia White</div>
                                    <div className="info">Product Manager, Dropbox</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* End Listing */}


                </div>
                </div>
                </div>
                <div className="tns-nav" aria-label="Carousel Pagination"><button type="button" data-nav="0" aria-controls="tns1"   aria-label="Carousel Page 1" className="" tabindex="-1"></button><button type="button" data-nav="1" aria-controls="tns1"   aria-label="Carousel Page 2 (Current Slide)" className="tns-nav-active"></button><button type="button" data-nav="2" tabindex="-1" aria-controls="tns1" style={{display:'none'}} aria-label="Carousel Page 3"></button><button type="button" data-nav="3" tabindex="-1" aria-controls="tns1" style={{display:'none'}} aria-label="Carousel Page 4"></button><button type="button" data-nav="4" tabindex="-1" aria-controls="tns1" style={{display:'none'}} aria-label="Carousel Page 5"></button><button type="button" data-nav="5" tabindex="-1" aria-controls="tns1" style={{display:'none'}} aria-label="Carousel Page 6"></button>
                </div>
                </div>
        </div>
    </div>
</section>
 
<section className="latest-blog-section p-3 p-lg-5">
    <div className="container">
        <h2 className="section-title font-weight-bold mb-5">Latest Blog Posts</h2>
        <div className="row">
            <div className="col-md-4 mb-5">
                <div className="card blog-post-card">
                    <img src={blog1} className="card-img-top" src1="./blog-post-thumb-card-1.jpg" alt="image"/>
                    <div className="card-body">
                        <h5 className="card-title"><a className="theme-link" href="https://themes.3rdwavemedia.com/devcard/bs5/2.0/blog-post.html">Top 3 JavaScript Frameworks</a></h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient...</p>
                        <p className="mb-0"><a className="text-link" href="https://themes.3rdwavemedia.com/devcard/bs5/2.0/blog-post.html">Read more →</a></p>
                        
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Published 2 days ago</small>
                    </div>
                </div>
            </div>
         
        </div>
        <div className="text-center py-3"><a href="https://themes.3rdwavemedia.com/devcard/bs5/2.0/blog-home.html" className="btn btn-primary"><svg className="svg-inline--fa fa-circle-right me-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM294.6 135.1l99.9 107.1c3.5 3.8 5.5 8.7 5.5 13.8s-2 10.1-5.5 13.8L294.6 376.9c-4.2 4.5-10.1 7.1-16.3 7.1C266 384 256 374 256 361.7l0-57.7-96 0c-17.7 0-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32l96 0 0-57.7c0-12.3 10-22.3 22.3-22.3c6.2 0 12.1 2.6 16.3 7.1z"></path></svg>
        View Blog</a></div>
    </div>
    
</section>

<footer className="footer text-center py-4">
    <small className="copyright">Template Copyright © <a href="https://themes.3rdwavemedia.com/" target="_blank">3rd Wave Media</a></small>
</footer>

    </>
    );
}

export default Aboutme;