import React, { Component } from 'react'
import Link from 'gatsby-link'
import { mixpanelTrack } from '../utils/mixpanel'

class IndexPage extends Component {
  componentDidMount() {
    mixpanelTrack("docs.integrations.visit")
  }

  render() {
    return (
      <div>
        <h1>Integrations</h1>
        
        <ul>
          <li><Link to="/bitbucket-cloud-integration">Bitbucket Cloud</Link></li>
          <li><Link to="/buildkite-integration">Buildkite</Link></li>
          <li><Link to="/github-integration">Github</Link></li>
          <li><Link to="/heroku-integration">Heroku</Link></li>
          <li><Link to="/jira-integration">Jira</Link></li>
          <li><Link to="/squadlytics-cli">Squadlytics CLI</Link></li>
        </ul>
      </div>
    )
  }
} 

export default IndexPage
