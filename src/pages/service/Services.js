import React from 'react'
import customerImage from '../../assets/images/Customare_care_service.png'

function Services() {
    return (
        <>
            <section className="sectionsWrapper bg-light py-5" id="serviceWeOffer">
                <div className="container">
                    <h2 className="text-center mb-4 headTitles fw-light text-uppercase">Service We <span
                        className="text-warning fw-bold">Offers</span></h2>
                    <div className="row  g-4 mb-3 mt-4 justify-content-center align-items-center ">
                        <div className="col-sm-auto col-12 me-sm-5 ">
                            <h4 className="fw-lighter titleText">Best Online<br /><span className="text-primary fw-bold">Customer Care</span>
                                <br /> for <b>Expert Technician</b>
                            </h4>
                        </div>
                        <div className="col-sm-4 col-12">
                            <img src={customerImage} className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="sectionsWrapper m-0" id="serviceTypesSection">
                <div className="row align-items-center  g-0 blockDesign ">
                    <div className="col-12 col-sm-6 boxBlock order-sm-0 order-0  image1"> </div>
                    <div className="col-12 col-sm-6  order-sm-1 order-1 ">
                        <div className="p-5 blocks   ">
                            <h1 className="fw-light">AC Service</h1>
                            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, adipisci
                                necessitatibus eaque ea corrupti non iste amet commodi aliquid.</p>
                            <ul className="listingBullets">
                                <li>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                </li>
                                <li>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                </li>
                                <li>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                </li>
                                <li>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center bg-light  g-0 blockDesign ">
                    <div className="col-12 col-sm-6 text-end  order-sm-0 order-1 ">
                        <div className="p-5 blocks t-l-m   ">
                            <h1 className="fw-light">AC Service</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, adipisci necessitatibus eaque
                                ea corrupti non iste amet commodi aliquid.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, adipisci necessitatibus eaque
                                ea corrupti non iste amet commodi aliquid.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, adipisci necessitatibus eaque
                                ea corrupti non iste amet commodi aliquid.</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 boxBlock order-sm-1 order-0 image2"> </div>
                </div>
            </section>
        </>
    )
}

export default Services