import React from 'react'
import { RepairLocation } from '../../constants/globalConstants'

function Question() {
    return (
        <>
            <section className="sectionsWrapper bg-light  py-5" id="FAQ">
                <div className="container px-5 px-sm-0">
                    <h2 className="text-center mb-4 headTitles fw-light text-uppercase">FAQ</h2>
                    <div className="questions" id="accordionExample">
                        <div className="accordion-item step position-relative">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#ques1"
                                aria-expanded="true" aria-controls="ques1">
                                Question No 1
                            </button>
                            <div id="ques1" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam itaque eos earum
                                    reiciendis, repellat unde laborum esse, ducimus ex placeat quasi fuga suscipit autem
                                    vero qui doloribus, doloremque reprehenderit aliquid?
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item step position-relative">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Question no 2
                            </button>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam itaque eos earum
                                    reiciendis, repellat unde laborum esse, ducimus ex placeat quasi fuga suscipit autem
                                    vero qui doloribus, doloremque reprehenderit aliquid?
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item step position-relative">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Question no 3
                            </button>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam itaque eos earum
                                    reiciendis, repellat unde laborum esse, ducimus ex placeat quasi fuga suscipit autem
                                    vero qui doloribus, doloremque reprehenderit aliquid?
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* usefull links */}

            <section className="sectionsWrapper py-5">
                <div className="container text-center">
                    <h2 className="text-center mb-4 headTitles fw-light text-uppercase">Usefull
                        <span className="text-warning fw-bold">Links</span></h2>
                    {RepairLocation?.map((RepairLocationItem, RepairLocationIndex) => {
                        return (
                            <button type="button" className="btn btn-outline-secondary mb-2 me-1" key={RepairLocationIndex}>{`AC Repair in ${RepairLocationItem}`}</button>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default Question