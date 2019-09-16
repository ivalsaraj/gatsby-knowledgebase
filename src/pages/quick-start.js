import React, { Component } from 'react'
import Link from 'gatsby-link'
import { mixpanelTrack } from '../utils/mixpanel'

class IndexPage extends Component {
  componentDidMount() {
    mixpanelTrack("docs.quick-start.visit")
  }

  render() {
    return (
      <div>
        <h1>Quick start</h1>
        <ul>
          <li><Link to="/getting-started">Getting started</Link></li>
        </ul>
      </div>
    )
  }
} 

export default IndexPage
