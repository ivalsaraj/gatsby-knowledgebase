import React, { Component } from 'react'
import Link from 'gatsby-link'
import { mixpanelTrack } from '../utils/mixpanel'

class IndexPage extends Component {
  componentDidMount() {
    mixpanelTrack("docs.notifications.visit")
  }

  render() {
    return (
      <div>
        <h1>Notifications</h1>
        <ul>
          <li><Link to="/project-alerts">Project alerts</Link></li>
        </ul>
      </div>
    )
  }
} 

export default IndexPage
