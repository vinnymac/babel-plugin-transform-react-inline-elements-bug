import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Another from './another'

class Main extends Component {
  static displayName = 'Main'

  render() {
    return (
      <div>
        Main Component
        <Another />
      </div>
    )
  }
}

export default Main
