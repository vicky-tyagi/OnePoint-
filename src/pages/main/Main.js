import React from 'react'
import PropTypes from 'prop-types'
import noop from 'lodash/noop'
import { connect } from 'react-redux'
import Booking from '../booking/Booking'

function Main() {
  return (
    <Booking />
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