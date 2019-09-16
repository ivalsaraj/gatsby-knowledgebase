import React, { Component } from 'react'
import Link from 'gatsby-link'
import { mixpanelTrack } from '../utils/mixpanel'

class IndexPage extends Component {
  componentDidMount() {
    mixpanelTrack("docs.legal.visit")
  }

  render() {
    return (
      <div>
        <h1>Legal</h1>
        <ul>
          <li><Link to="/privacy">Privacy</Link></li>
          <li><Link to="/terms">Terms</Link></li>
        </ul>
      </div>
    )
  }
} 

export default IndexPage
