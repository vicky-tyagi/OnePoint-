import React from 'react'
import moment from 'moment'

function FooterComponent() {
    return (
        <footer className="bg-dark mt-3 text-light">
            <div className="container">
                <div className="footIn">
                    <ul className="nav">
                        <li className="nav-item"><a className="nav-link" title="Home" href="https://onepointservices.co.in/">Home</a></li>
                        <li className="nav-item"><a className="nav-link" title="Services" href="https://onepointservices.co.in/services">Services</a></li>
                        <li className="nav-item"><a className="nav-link" title="About Us" href="https://onepointservices.co.in/about-us">About Us</a></li>
                        <li className="nav-item"><a className="nav-link" title="Contact" href="https://onepointservices.co.in/contact-us">Contact Us</a></li>
                    </ul>
                </div>
                <div className="border-top">
                    <h4>Top Cities</h4>
                    <ul className="nav">
                        <li className="nav-item"><a className="nav-link" title="Dehradun" href="https://onepointservices.co.in/city/dehradun">Dehradun</a></li>
                        <li className="nav-item"><a className="nav-link" title="Jaipur" href="https://onepointservices.co.in/city/jaipur">Jaipur</a></li>
                        <li className="nav-item"><a className="nav-link" title="Varanasi" href="https://onepointservices.co.in/city/varanasi">Varanasi</a></li>
                        <li className="nav-item"><a className="nav-link" title="Agra" href="https://onepointservices.co.in/city/agra">Agra</a></li>
                        <li className="nav-item"><a className="nav-link" title="Kanpur" href="https://onepointservices.co.in/city/kanpur">Kanpur</a></li>
                        <li className="nav-item"><a className="nav-link" title="Patna" href="https://onepointservices.co.in/city/patna">Patna</a></li>
                        <li className="nav-item"><a className="nav-link" title="Indore" href="https://onepointservices.co.in/city/Expert Repair in Indore. Repairing Service Center -One Point Services">Indore</a></li>
                        <li className="nav-item"><a className="nav-link" title="Bhopal" href="https://onepointservices.co.in/city/bhopal">Bhopal</a></li>
                        <li className="nav-item"><a className="nav-link" title="Pune" href="https://onepointservices.co.in/city/pune">Pune</a></li>
                        <li className="nav-item"><a className="nav-link" title="Lucknow" href="https://onepointservices.co.in/city/lucknow">Lucknow</a></li>
                        <li className="nav-item"><a className="nav-link" title="Bareilly" href="https://onepointservices.co.in/city/bareilly">Bareilly</a></li>
                        <li className="nav-item"><a className="nav-link" title="Sitapur" href="https://onepointservices.co.in/city/sitapur">Sitapur</a></li>
                    </ul>
                </div>
                <div className="border-top row pt-2 ">
                    <div className="col">
                        <p className="copyR ">घर में कुछ भी हो खराब, करें One Point को याद</p>
                    </div>
                    <div className="col-sm-auto col-12">
                        <ul className="nav">
                            <li className="nav-item">
                                <a className="nav-link" href="mailto:support@onepointservices.co.in"> <i className="fa fa-envelope m10"></i> support@onepointservices.co.in</a>
                            </li>
                            <li className="nav-item">
                                <a href="tel:8400900581" className="nav-link"> <i className="fa fa-mobile-alt m10"></i>8400900581</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="row align-items-center border-top pt-3 pb-4 ">
                    <div className="col-auto">
                        <a href="">
                            <img width="60px" src="https://onepointservices.co.in/images/assets/logo.png" alt="one point services logo" />
                        </a>
                    </div>
                    <div className="col-sm col-8">
                        <small className="copyR ">©
                            {moment().calendar()} 2022 One Point Multiple Services LLP. All rights reserved.
                        </small>
                    </div>
                    <div className="col-sm col-7">
                        <ul className="homefootSocial footer__top__nav footer__top__nav--contact p-0 m-0 my-3">
                            <li className="facebook">
                                <a title="Facebook" href="https://www.facebook.com/onepointservices.co.in">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                            </li>
                            <li className="youtube">
                                <a title="Youtube" href="https://www.youtube.com/channel/UCB42xIRtrg9PrVBCnrxxcgg">
                                    <i className="fab fa-youtube"></i>
                                </a>
                            </li>
                            <li className="instagram">
                                <a title="Instagram" href="https://www.instagram.com/onepointservices.co.in/">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </li>
                            <li className="twitter">
                                <a title="Instagram" href="https://twitter.com/One_Point_">
                                    <i className="fa-brands fa-twitter"></i>
                                </a>
                            </li>
                            <li className="blog">
                                <a title="Instagram" href="https://medium.com/@onepointservice">
                                    <i className="fa-solid fa-rss"></i>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-auto p-0">
                        <div className="playstore-icon">
                            <a title="Google Play" style={{marginTop: '5px'}} href="https://play.google.com/store/apps/details?id=app.onepointservices.onepointservices" className="banner-apps__download__android">
                                <img src="https://onepointservices.co.in/images/assets/google-play.png" alt="google-play" width="160px" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterComponent