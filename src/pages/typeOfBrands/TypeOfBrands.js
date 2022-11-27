import React, { useEffect, useState } from 'react'
import { createData, EMPTY_ARRAY, imagesUrlsForBrands } from '../../constants/globalConstants'

function TypeOfBrands() {
    const [benifit, setBenfits] = useState(EMPTY_ARRAY)

    useEffect(() => {
        const benifitData = createData('Best Service On Time', 5)
        setBenfits(benifitData)
    }, [EMPTY_ARRAY])
    return (
        <>
            <section className="services mt-5 mb-5" id="brandWeRepair">
                <div className="container">
                    <h2 className="text-center my-4 headTitles fw-light text-uppercase">Types of <span
                        className="text-warning fw-bold">Brand we Repair</span></h2>
                    <div className="owl-carousel d-none d-sm-block noDotsView" id="owlCar">
                        {imagesUrlsForBrands?.map((imagesUrlsForBrandsItem, imagesUrlsForBrandsIndex) => {
                            return (
                                <div key={imagesUrlsForBrandsIndex}>
                                    <img src={imagesUrlsForBrandsItem?.png} key={imagesUrlsForBrandsIndex} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Benifits of Booking */}
            <section className="sectionsWrapper border-top p-2 bg-business py-5" id="benefitOfBookings">
                <div className="container">
                    <h2 className="text-center mb-4 mt-3 headTitles fw-light text-uppercase">Benifits of Booking
                        <span className="text-danger fw-bold">Why?</span>
                    </h2>
                    <div className="row mt-5">
                        <div className="col-12 col-sm-6 offset-sm-2">
                            <p>
                                We have a large team of Expert Technician for Home Appliance Repair Services & A Skilled
                                Handy-Man Professional to solve your day to day Home Maintenance Problem
                            </p>
                            <div className="row g-4 mt-3">
                                {benifit?.map((bookingBenifitsItem, bookingBenifitsIndex) => {
                                    return (
                                        <div className="col-12 mb-3" key={bookingBenifitsIndex}>
                                            <div className="row align-items-center" >
                                                <div className="col-auto" >
                                                    <img height="60px" src={require('../../assets/images/hand.png')} />
                                                </div>
                                                <div className="col">
                                                    <h5 className="m-0">{bookingBenifitsItem?.text}</h5>
                                                    {bookingBenifitsIndex === 0 ? <small>lorem ipsum doller sit ama, lorem ipsum dollersit amat lorem ipsum doller sit ama</small> :
                                                        <small>lorem ipsum doller sit ama, lorem ipsum dollersit amat lorem<br /> ipsum doller sit ama</small>}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="col-12 d-block d-sm-none"> <img src="./assets/images/section_img.png" className="img-fluid" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default TypeOfBrands