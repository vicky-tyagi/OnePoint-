import React from 'react'

function RefHeaderComponent() {
    return (
        <section className="topBar bg-primary text-white p-2">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-sm t-c-m"> <img src="https://onepointservices.co.in/images/call.png" width="30px" alt="call now" />
                        <a className="text-white  callNo" href="tel:8400900581">Helpline number: 8400 900 581</a> </div>
                    <div className="col-sm-auto t-c-m col-12 mt-2 mt-sm-0 socialLinks">
                        <a className="btn text-white " href="#"><i className="fab fa-facebook"></i></a>
                        <a className="btn text-white " href="#"><i className="fab fa-instagram"></i></a>
                        <a className="btn text-white border-0 " href="#"><i className="fab fa-youtube"></i></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RefHeaderComponent