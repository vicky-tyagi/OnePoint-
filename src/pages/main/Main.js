import React from 'react'
import PropTypes from 'prop-types'
import noop from 'lodash/noop'
import { connect } from 'react-redux'
import Booking from '../booking/Booking'
import Services from '../service/Services'
import TypeOfBrands from '../typeOfBrands/TypeOfBrands'
import ClientSide from '../clientSide/ClientSide'
import PartnerAndBooking from '../partnerAndBooking/PartnerAndBooking'
import Question from '../faq/Question'

function Main() {
  return (
    <>
      <Booking />
      <Services />
      <TypeOfBrands />
      <ClientSide />
      <PartnerAndBooking />
      <Question />
    </>
  )
}

Main.propTypes = {
  dispatch: PropTypes.func
}

Main.defaulProps = {
  dispatch: noop,
  loader: false,
}

const mapStateToProps = () => ({})

export default connect(mapStateToProps)(Main)