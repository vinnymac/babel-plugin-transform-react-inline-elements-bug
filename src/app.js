// For debugging the issue using phantomjs
if (!document.getElementById('content')) {
  const div = document.createElement('div')
  div.id = 'content'
  document.body.appendChild(div)
}

require('babel-polyfill')

import React from 'react'
import { render } from 'react-dom'

import Main from './main'

render(<Main />, document.getElementById('content'))
