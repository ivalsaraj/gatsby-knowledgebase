import React, { Component } from 'react'
import Link from 'gatsby-link'
import { mixpanelTrack } from '../utils/mixpanel'

class IndexPage extends Component {
  componentDidMount() {
    mixpanelTrack("docs.help-feedback.visit")
  }

  render() {
    return (
      <div>
        <h1>Help & feedback</h1>
        <ul>
          <li><Link to="/limitations">Limitations</Link></li>
          <li><Link to="/support">Support</Link></li>
        </ul>
      </div>
    )
  }
} 

export default IndexPage
