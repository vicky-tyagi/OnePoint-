import React, { useEffect, useState } from 'react'
import { createData, EMPTY_ARRAY } from '../../constants/globalConstants'

function ClientSide() {
    const [review, setReview] = useState(EMPTY_ARRAY)
    const [stars, setStars] = useState(EMPTY_ARRAY)

    useEffect(() => {
        const reviewData = createData('Manish Jha', 7)
        const startData = createData('star', 6)
        setReview(reviewData)
        setStars(startData)
    }, [EMPTY_ARRAY])
    return (
        <>
            <section className="sectionsWrapper bg-light py-5" id="custmerReviews">
                <div className="container">
                    <h2 className="text-center mb-4 headTitles fw-light text-uppercase">Customer <span
                        className="text-warning fw-bold">Reviews</span></h2>
                    <div className="row">
                        {review?.map((reviewListItem, reviewListIndex) => {
                            return (
                                <div className="col-sm-6 mb-4" data-aos="fade-up" data-aos-duration="500" key={reviewListIndex}>
                                    <div className="card p-0 mb-3" >
                                        <div className="row g-0" >
                                            <div className="col-3">
                                                <img src={require(`../../assets/images/${reviewListItem?.val}.jpg`)} className="img-fluid rounded-start" alt="..." />
                                            </div>
                                            <div className="col-9">
                                                <div className="card-body">
                                                    <figure className="mb-0" >
                                                        <blockquote className="blockquote mb-4 ">
                                                            <p><i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nemo, amet quisquam nisi optio, tempore, sed necessitatibus ad accusantium</i></p>
                                                        </blockquote>
                                                        <figcaption className="blockquote-footer  mb-0"> {reviewListItem?.text}
                                                            <cite className="ms-3" title="Source Title">
                                                                <i className="fas fa-location-pin"> </i> Gola Gokran Nath, Lakhimpur
                                                            </cite>
                                                        </figcaption>
                                                    </figure>
                                                    <div className="rating text-warning mb-3">
                                                        {stars?.map((starsItem, starsIndex) => {
                                                            return (
                                                                <i key={starsIndex} className={`fa fa-${starsItem?.text}`}></i>
                                                            )
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section >
        </>
    )
}

export default ClientSide