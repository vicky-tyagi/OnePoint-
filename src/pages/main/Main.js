import React from 'react'
import PropTypes from 'prop-types'
import noop from 'lodash/noop'
import { connect } from 'react-redux'

function Main() {
  return (
    <div style={{ textAlign: 'center', marginTop: '5em' }}>Please Attract you Html Here ? </div>
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