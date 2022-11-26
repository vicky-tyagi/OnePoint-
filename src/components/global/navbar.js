import React from 'react'
import { connect } from 'react-redux'
import noop from 'lodash/noop'
import PropTypes from 'prop-types'
function NavbarComponent() {
	return (
		<header>
			<nav className="navbar navbar-expand-lg bg-white shadow shadow-sm">
				<div className="container">
					<a className='navbar-brand' href=''>
						<img src="https://onepointservices.co.in/images/assets/logo.png" width="50px" alt="One Point Services" />
						{/* <img src={Logo} width="60px" alt="mapco" /> */}
					</a>

					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarID"
						aria-controls="navbarID" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse " id="navbarSupportedContent">
						<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<a href='' className="nav-link active">Home</a>
							</li>
							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Service </a>
								<ul className="dropdown-menu">
									<li>
										<a className="dropdown-item" href=''>Refrigerator Repair</a>
									</li>
									<li>
										<a className="dropdown-item" href=''>Air Conditioner Service</a>
									</li>
									<li>
										<a className="dropdown-item" href=''>Electrician</a>
									</li>
									<li>
										<a className="dropdown-item" href=''>Washing Machine Repair</a>
									</li>
									<li>
										<a className="dropdown-item" href=''>Microwave Repair</a>
									</li>
									<li>
										<a className="dropdown-item" href=''>All Services</a>
									</li>
								</ul>
							</li>
							<li className="nav-item">
								<a href='#' className="nav-link">About Us</a>
							</li>
							<li className="nav-item ">
								<a href='#' className="nav-link">Contact</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	)
}

{/* <nav class="navbar navbar-expand-lg bg-white shadow shadow-sm">
        <div class="container"> 
		<a class="navbar-brand" href="https://onepointservices.co.in/"> 
		<img src="https://onepointservices.co.in/images/assets/logo.png" width="50px" alt="One Point Services">
            </a> 
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> 
			</button>
            <div class="collapse navbar-collapse " id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
					<a class="nav-link active" href="https://onepointservices.co.in/">Home</a>
                    </li>
                    <li class="nav-item dropdown"> 
					<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Service </a>
                        <ul class="dropdown-menu">
                            <li>
							   <a class="dropdown-item" href="https://onepointservices.co.in/service/fridge-repair">Refrigerator Repair</a>
                            </li>
                            <li>
							   <a class="dropdown-item" href="https://onepointservices.co.in/service/ac-service">Air Conditioner Service</a>
							   </li>
                            <li>
							   <a class="dropdown-item"  href="https://onepointservices.co.in/service/electrician">Electrician</a>
							</li>
                            <li>
							   <a class="dropdown-item" href="https://onepointservices.co.in/service/washing-machine-repair-service">Washing Machine Repair</a>
							</li>
                            <li>
							   <a class="dropdown-item" href="https://onepointservices.co.in/service/microwave-repair">Microwave Repair</a>
                            </li>
                            <li> 
							  <a class="dropdown-item" href="https://onepointservices.co.in/services">All Services</a>
							</li>
                        </ul>
                    </li>
                    <li class="nav-item"><a class="nav-link" href="https://onepointservices.co.in/about-us">About Us</a>
                    </li>
                    <li class="nav-item"><a class="nav-link" href="https://onepointservices.co.in/contact-us">Contact
                            Us</a></li>
                </ul>
            </div>
        </div>
    </nav> */}


NavbarComponent.propTypes = {
	dispatch: PropTypes.func,
}

NavbarComponent.defaulProps = {
	dispatch: noop,
}

function mapStateToProps() {
	return {}
}
export default connect(mapStateToProps)(NavbarComponent)
