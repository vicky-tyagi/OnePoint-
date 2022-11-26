import React, { useState } from 'react'
import split from '../../assets/images/service_icons/AC/split.svg'
import portable from '../../assets/images/service_icons/AC/portable.svg'
import window from '../../assets/images/service_icons/AC/window.svg'
// import { IonButton } from '@ionic/react'

import { BookingSectionHeader, facilityListPortable, facilityListSplit } from '../../constants/globalConstants'
import Faclity from '../faclity/faclity'

function Booking() {
    const [selectedService, setSelectedService] = useState()
    console.log('selectedService', selectedService)


    const handleServiceSelection = (idPerService) => {
        setSelectedService(idPerService)
    }

    return (
        <>
            <section className="headerSection  bg-warning text-white bg-replace" id="main-Banner-Top">
                <div className="container text-center p-5">
                    <h1 className="text-dark fw-light mt-4 text-white  ">Trusted. Exceptional. Affordable.<br />
                        <span className="fw-bold text-primary">Best rated AC Service in Sitapur</span> <br /> by our customers.
                    </h1>
                </div>
            </section>

            {/* section for Booking Section */}
            <section className="services position-relative mb-5" id="bookingSection">
                <div className="container">
                    <div className="overPlaced p-4">
                        <div className="row" id="bookList" role="tablist">
                            {BookingSectionHeader?.map((BookingHeaderItem, BookingHeaderIndex) => {
                                return (
                                    <div className="col" role="presentation" key={BookingHeaderIndex}>
                                        <button className={`btn btn-outline-warning w-100 serviceThumbs ${BookingHeaderItem?.id === selectedService ? 'active' : ''}`} onClick={() => handleServiceSelection(BookingHeaderItem?.id)} >
                                            <img src={BookingHeaderItem?.imageSrc === 'split' ? split : BookingHeaderItem?.imageSrc === 'portable' ? portable : BookingHeaderItem?.imageSrc === 'window' ? window : ''} alt="Air Conditioner Repair" className="img-fluid" />
                                            <h4>{BookingHeaderItem?.serviceName}</h4>
                                        </button>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className="tab-content" id="bookListContent">
                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">
                            <div className="row">
                                <div className="col-sm-8" id="serviceList">
                                    <ul className="productList">
                                        {(selectedService === 1 || selectedService === 3) ?
                                            facilityListSplit?.map((facilityListSplitItem, facilityListSplitIndex) => {
                                                return (
                                                    <li className="shadow bg-white p-3" key={facilityListSplitIndex}>
                                                        <div className="row  d-flex justify-content-between align-items-center">
                                                            <div className="col-md-2 col-lg-2 col-4 mb-3 mb-sm-0">
                                                                <img src="/assets/images/ac-servicing.jpg" className="img-fluid rounded-3" alt="Cotton T-shirt" />
                                                            </div>
                                                            <div className="col-md-5 col-lg-4 col-8 mb-3 mb-sm-0">
                                                                <h5 className="text-black">{facilityListSplitItem?.facilityName}</h5>
                                                                <h6 className="text-muted mb-0">{facilityListSplitItem?.facilityMessage}.</h6>
                                                            </div>
                                                            <div className="col-md-2 col-lg-2 col-4 d-flex  mb-sm-0 ">
                                                                <button className="btn btn-link px-2" onClick="this.parentNode.querySelector('input[type=number]').stepDown()" >
                                                                    <i className="fas fa-minus"></i>
                                                                </button>

                                                                <input id="form1" min="0" name="quantity" value="1" type="number" className="form-control form-control-sm" />

                                                                <button className="btn btn-link px-2" onClick="this.parentNode.querySelector('input[type=number]').stepUp()">
                                                                    <i className="fas fa-plus"></i>
                                                                </button>
                                                            </div>
                                                            <div className="col-md-2 col-lg-2 col-4  mb-sm-0">
                                                                <h4 className="mb-0 text-center fw-bold">{facilityListSplitItem?.facilityAmount}</h4>
                                                            </div>
                                                            <div className="col-md-1 col-lg-1 col-4 text-end">
                                                                <a className="btn btn-primary w-100 text-white" href="">Book</a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                )
                                            }) :
                                            facilityListPortable?.map((facilityListPortableItem, facilityListPortableIndex) => {
                                                return (
                                                    <li className="shadow bg-white p-3" key={facilityListPortableIndex}>
                                                        <div className="row  d-flex justify-content-between align-items-center">
                                                            <div className="col-md-2 col-lg-2 col-4 mb-3 mb-sm-0">
                                                                <img src="/assets/images/ac-servicing.jpg" className="img-fluid rounded-3"
                                                                    alt="Cotton T-shirt" />
                                                            </div>
                                                            <div className="col-md-5 col-lg-4 col-8 mb-3 mb-sm-0">
                                                                <h5 className="text-black">{facilityListPortableItem?.facilityName}</h5>
                                                                <h6 className="text-muted mb-0">{facilityListPortableItem?.facilityMessage}.</h6>
                                                            </div>
                                                            <div className="col-md-2 col-lg-2 col-4 d-flex  mb-sm-0 ">
                                                                <button className="btn btn-link px-2" onClick="this.parentNode.querySelector('input[type=number]').stepDown()">
                                                                    <i className="fas fa-minus"></i>
                                                                </button>

                                                                <input id="form1" min="0" name="quantity" value="1" type="number" className="form-control form-control-sm" />

                                                                <button className="btn btn-link px-2" onClick="this.parentNode.querySelector('input[type=number]').stepUp()" >
                                                                    <i className="fas fa-plus"></i>
                                                                </button>
                                                            </div>
                                                            <div className="col-md-2 col-lg-2 col-4  mb-sm-0">
                                                                <h4 className="mb-0 text-center fw-bold">{facilityListPortableItem?.facilityAmount}</h4>
                                                            </div>
                                                            <div className="col-md-1 col-lg-1 col-4 text-end">
                                                                <a className="btn btn-primary w-100 text-white" href="javascript:;">Book</a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                                <Faclity />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Booking