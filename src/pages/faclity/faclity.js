import React, { useEffect, useState } from 'react'
import { createData, EMPTY_ARRAY } from '../../constants/globalConstants'

function Faclity() {
    const [textRen, setTextData] = useState()
    const [serRen, setSerText] = useState()

    useEffect(() => {
        const textData = createData('Lorem, ipsum dolor sit amet consectetur adipisicing elit.', 5)
        const serText = createData('AC Repair', 7)
        setSerText(serText)
        setTextData(textData)
    }, [EMPTY_ARRAY])

    return (
        <div className="col" id="serviceDate">
            <div className="shadow p-4">
                <h1 className="fw-bold text-primary">AC Service</h1>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, doloribus quis
                    ipsam quos nam molestiae in delectus quisquam quasi laborum, possimus
                    consectetur accusamus incidunt, nihil inventore molestias eos ullam dolorum?
                </p>
                <hr />
                <h4 className="mt-3">Benifits of our service</h4>
                <ul className="listingBullets">
                    {textRen?.map((textRenItem, textRenIndex) => {
                        return (
                            <li key={textRenIndex}>{textRenItem?.text}</li>
                        )
                    })}
                </ul>
                <h4 className="mt-3">What we can repair</h4>
                {serRen?.map((serRenItem, serRenIndex) => {
                    return (
                        <a className="btn btn-outline-primary m-2" key={serRenIndex}>{serRenItem?.text}</a>
                    )
                })}
            </div>
        </div>
    )
}

export default Faclity