import React, { useEffect, useState } from 'react'
import { createData, EMPTY_ARRAY } from '../../constants/globalConstants'

function PartnerAndBooking() {
    const [partner, setPartner] = useState(EMPTY_ARRAY)
    const [stars, setStars] = useState(EMPTY_ARRAY)
    useEffect(() => {
        const partnerData = createData('Partner Name', 7)
        const startData = createData('star', 6)
        setPartner(partnerData)
        setStars(startData)
    }, [EMPTY_ARRAY])
    return (
        <>
            <section className=" sectionsWrapper p-2  py-5" id="topPartners">
                <div className="container">
                    <h2 className="text-center mb-4 mt-3 headTitles fw-light text-uppercase">Our Top
                        <span className="text-warning fw-bold">Partners</span>
                    </h2>
                    <div className="row g-3 partnerPofile">
                        {partner?.map((partnerItem, partnerIndex) => {
                            return (
                                <div className="col-sm-4" data-aos="zoom-in" data-aos-duration="500" key={partnerIndex}>
                                    <div className="card p-0">
                                        <div className="row align-items-center">
                                            <div className="col-4">
                                                <img src="assets/images/1.jpg" className="avatarImg img-fluid " alt="..." />
                                            </div>
                                            <div className="col">
                                                <h4 className="card-title fw-bold mb-0">{partnerItem?.text}</h4>
                                                <small className="card-text text-muted "><i className="fa fa-location-pin"></i> Munsiganj, Lakhimpur</small>
                                                <div className="d-flex align-items-center mt-3">
                                                    <div className="rating text-warning ">
                                                        {stars?.map((starsItem, starsIndex) => {
                                                            return (
                                                                <i key={starsIndex} className={`fa fa-${starsItem?.text}`}></i>
                                                            )
                                                        })}
                                                    </div>
                                                    <p className="mb-0 ms-3 fw-bold border-start ps-3">400+ Jobs</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </section>

            {/* how we work  */}

            <section className="sectionsWrapper overflowHidden  bg-light py-5" id="howWeWork">
                <div className="container">
                    <h2 className="text-center mb-4 headTitles fw-light text-uppercase">How We
                        <span className="text-warning fw-bold">Work</span>
                    </h2>

                    <div className="row">
                        <div className="col-md-5 position-relative">
                            <div className="process-box process-left" data-aos="fade-right" data-aos-duration="500">
                                <div className="row">
                                    <div className="col-md-5 position-relative">
                                        <div className="process-step">
                                            <p className="m-0 p-0">Step</p>
                                            <h2 className="m-0 p-0">01</h2>
                                        </div>
                                    </div>
                                    <div className="col-md-7">
                                        <h5>What is Lorem Ipsum?</h5>
                                        <p><small>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        </small></p>
                                    </div>
                                </div>
                                <div className="process-line-l"></div>
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                        <div className="col-md-5 position-relative">
                            <div className="process-point-right"></div>
                        </div>
                    </div>
                    {/* ============ step 2 ===========  */}
                    <div className="row">
                        <div className="col-md-5 position-relative">
                            <div className="process-point-left"></div>
                        </div>
                        <div className="col-md-2"></div>
                        <div className="col-md-5 position-relative">
                            <div className="process-box process-right" data-aos="fade-left" data-aos-duration="500">
                                <div className="row">
                                    <div className="col-md-5 position-relative">
                                        <div className="process-step">
                                            <p className="m-0 p-0">Step</p>
                                            <h2 className="m-0 p-0">02</h2>
                                        </div>
                                    </div>
                                    <div className="col-md-7">
                                        <h5>What is Lorem Ipsum?</h5>
                                        <p><small>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</small></p>
                                    </div>
                                </div>
                                <div className="process-line-r"></div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- ============ step 3 ========== */}
                    <div className="row">
                        <div className="col-md-5 position-relative">
                            <div className="process-box process-left" data-aos="fade-right" data-aos-duration="500">
                                <div className="row">
                                    <div className="col-md-5 position-relative">
                                        <div className="process-step">
                                            <p className="m-0 p-0">Step</p>
                                            <h2 className="m-0 p-0">03</h2>
                                        </div>
                                    </div>
                                    <div className="col-md-7">
                                        <h5>What is Lorem Ipsum?</h5>
                                        <p><small>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        </small></p>
                                    </div>
                                </div>
                                <div className="process-line-l"></div>
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                        <div className="col-md-5 position-relative">
                            <div className="process-point-right"></div>
                        </div>
                    </div>
                    {/* <!-- ============ step 4 =========== --> */}
                    <div className="row">
                        <div className="col-md-5 position-relative">
                            <div className="process-point-left"></div>
                        </div>
                        <div className="col-md-2"></div>
                        <div className="col-md-5 position-relative">
                            <div className="process-box process-right" data-aos="fade-left" data-aos-duration="500">
                                <div className="row">
                                    <div className="col-md-5 position-relative">
                                        <div className="process-step">
                                            <p className="m-0 p-0">Step</p>
                                            <h2 className="m-0 p-0">04</h2>
                                        </div>
                                    </div>
                                    <div className="col-md-7">
                                        <h5>What is Lorem Ipsum?</h5>
                                        <p><small>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        </small></p>
                                    </div>
                                </div>
                                <div className="process-line-r"></div>
                            </div>
                        </div>


                    </div>
                    {/* <!-- ============ step 3 =========== --> */}
                    <div className="row">
                        <div className="col-md-5 position-relative">
                            <div className="process-box process-left" data-aos="fade-right" data-aos-duration="500">
                                <div className="row">
                                    <div className="col-md-5 position-relative">
                                        <div className="process-step">
                                            <p className="m-0 p-0">Step</p>
                                            <h2 className="m-0 p-0">05</h2>
                                        </div>
                                    </div>
                                    <div className="col-md-7">
                                        <h5>What is Lorem Ipsum?</h5>
                                        <p><small>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        </small></p>
                                    </div>
                                </div>
                                <div className="process-line-l"></div>
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                        <div className="col-md-5 position-relative">
                            <div className="process-point-right process-last"></div>
                        </div>
                    </div>
                    {/* <!-- ============ --> */}

                </div>
            </section>


            {/* recent booking */}

            <section className="sectionsWrapper py-5" id="recent-booking">
                <div className="container">
                    <h2 className="text-center mb-4 headTitles fw-light text-uppercase">Recent <span
                        className="text-warning fw-bold">Bookings</span></h2>

                    <div className="owl-carousel " id="recentBooking">

                        <div className="card-body card bg-white border border-primary">
                            <div className="d-flex align-items-center mb-3">
                                <img src="/assets/images/avatar.png" height="30px" width="30px"
                                    className="rounded-circle border" />
                                <h5 className="mb-0 me-auto ms-3 fw-bold">Manish Kumar</h5>
                            </div>
                            <h5 className="fw-bold text-muted m-0">AC Service Repair</h5>
                            <small className="text-muted pb-2 mb-2 border-bottom">My ac is not working, its not cooling
                                and nither operating well.</small>
                            <small className="text-muted"><i className="fas fa-location-pin text-secondary"></i> Ramnagar,
                                Lakhimpur (UP)</small>
                        </div>


                        <div className="card-body card bg-white border border-primary">
                            <div className="d-flex align-items-center mb-3">
                                <img src="/assets/images/avatar.png" height="30px" className="rounded-circle border" />
                                <h5 className="mb-0 me-auto ms-3 fw-bold">Manish Kumar</h5>
                            </div>
                            <h5 className="fw-bold text-muted m-0">AC Service Repair</h5>
                            <small className="text-muted pb-2 mb-2 border-bottom">My ac is not working, its not cooling
                                and nither operating well.</small>
                            <small className="text-muted"><i className="fas fa-location-pin text-secondary"></i> Ramnagar,
                                Lakhimpur (UP)</small>
                        </div>


                        <div className="card-body card bg-white border border-primary">
                            <div className="d-flex align-items-center mb-3">
                                <img src="/assets/images/avatar.png" height="30px" className="rounded-circle border" />
                                <h5 className="mb-0 me-auto ms-3 fw-bold">Manish Kumar</h5>
                            </div>
                            <h5 className="fw-bold text-muted m-0">AC Service Repair</h5>
                            <small className="text-muted pb-2 mb-2 border-bottom">My ac is not working, its not cooling
                                and nither operating well.</small>
                            <small className="text-muted"><i className="fas fa-location-pin text-secondary"></i> Ramnagar,
                                Lakhimpur (UP)</small>
                        </div>


                        <div className="card-body card bg-white border border-primary">
                            <div className="d-flex align-items-center mb-3">
                                <img src="/assets/images/avatar.png" height="30px" className="rounded-circle border" />
                                <h5 className="mb-0 me-auto ms-3 fw-bold">Manish Kumar</h5>
                            </div>
                            <h5 className="fw-bold text-muted m-0">AC Service Repair</h5>
                            <small className="text-muted pb-2 mb-2 border-bottom">My ac is not working, its not cooling
                                and nither operating well.</small>
                            <small className="text-muted"><i className="fas fa-location-pin text-secondary"></i> Ramnagar,
                                Lakhimpur (UP)</small>
                        </div>

                        <div className="card-body card bg-white border border-primary">
                            <div className="d-flex align-items-center mb-3">
                                <img src="/assets/images/avatar.png" height="30px" width="30px"
                                    className="rounded-circle border" />
                                <h5 className="mb-0 me-auto ms-3 fw-bold">Manish Kumar</h5>
                            </div>
                            <h5 className="fw-bold text-muted m-0">AC Service Repair</h5>
                            <small className="text-muted pb-2 mb-2 border-bottom">My ac is not working, its not cooling
                                and nither operating well.</small>
                            <small className="text-muted"><i className="fas fa-location-pin text-secondary"></i> Ramnagar,
                                Lakhimpur (UP)</small>
                        </div>


                        <div className="card-body card bg-white border border-primary">
                            <div className="d-flex align-items-center mb-3">
                                <img src="/assets/images/avatar.png" height="30px" className="rounded-circle border" />
                                <h5 className="mb-0 me-auto ms-3 fw-bold">Manish Kumar</h5>
                            </div>
                            <h5 className="fw-bold text-muted m-0">AC Service Repair</h5>
                            <small className="text-muted pb-2 mb-2 border-bottom">My ac is not working, its not cooling
                                and nither operating well.</small>
                            <small className="text-muted"><i className="fas fa-location-pin text-secondary"></i> Ramnagar,
                                Lakhimpur (UP)</small>
                        </div>


                        <div className="card-body card bg-white border border-primary">
                            <div className="d-flex align-items-center mb-3">
                                <img src="/assets/images/avatar.png" height="30px" className="rounded-circle border" />
                                <h5 className="mb-0 me-auto ms-3 fw-bold">Manish Kumar</h5>
                            </div>
                            <h5 className="fw-bold text-muted m-0">AC Service Repair</h5>
                            <small className="text-muted pb-2 mb-2 border-bottom">My ac is not working, its not cooling
                                and nither operating well.</small>
                            <small className="text-muted"><i className="fas fa-location-pin text-secondary"></i> Ramnagar,
                                Lakhimpur (UP)</small>
                        </div>

                        <div className="card-body card bg-white border border-primary">
                            <div className="d-flex align-items-center mb-3">
                                <img src="/assets/images/avatar.png" height="30px" className="rounded-circle border" />
                                <h5 className="mb-0 me-auto ms-3 fw-bold">Manish Kumar</h5>
                            </div>
                            <h5 className="fw-bold text-muted m-0">AC Service Repair</h5>
                            <small className="text-muted pb-2 mb-2 border-bottom">My ac is not working, its not cooling
                                and nither operating well.</small>
                            <small className="text-muted"><i className="fas fa-location-pin text-secondary"></i> Ramnagar,
                                Lakhimpur (UP)</small>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PartnerAndBooking