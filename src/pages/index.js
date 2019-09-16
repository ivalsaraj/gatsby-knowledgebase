import React, { Component } from 'react'
import Link from 'gatsby-link'
import { mixpanelTrack } from '../utils/mixpanel'
import styled from "styled-components"

import JiraLogo from './images/jira-logo.svg'
import BitbucketLogo from './images/bitbucket-logo.svg'
import BuildkiteLogo from './images/buildkite-logo.svg'
import GithubLogo from './images/github-logo.png'
import GitlabLogo from './images/gitlab_cloud-logo.svg'
import HerokuLogo from './images/heroku-logo.svg'
import SquadlyticsLogo from './images/squadlytics-logo.svg'

const LogosContainer = styled.div`
  display: flex;
  margin: 24px 0;
  justify-content: center;
  > div {
    flex: 1;
    margin: 0 16px;
    text-align: center;
  }
  a div {
    height: 100px;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    
    img {
      filter: grayscale(100);
      max-height: 72px;
      max-width: 80px;
      
    }
  }

`

class IndexPage extends Component {
  componentDidMount() {
    mixpanelTrack("docs.home.visit")
  }

  render() {
    return (
      <div>
        <h1>Documentation</h1>
        <p>
          Welcome to Squadlytics! You'll find here articles to help you get started, connect your tools and manage your
          workspace.
        </p>
        <h2>Getting started with Squadlytics</h2>
        <p>
          See how you can <Link to="/getting-started">set up your account</Link> within minutes and start
          getting activity reports for your projects.
        </p>
        <h2>Integrations</h2>
        <p>See how you can integrate your tools with Squadlytics.</p>
        <LogosContainer>
          <div>
            <Link to="/jira-integration">
              <div>
                <img src={JiraLogo} alt="Jira" />
              </div>
              Jira
            </Link>
          </div>
          <div>
            <Link to="/bitbucket-cloud-integration">
              <div>
                <img src={BitbucketLogo} alt="Bitbucket Cloud" />
              </div>
              Bitbucket
            </Link>
          </div>
          <div>
            <Link to="/github-integration">
              <div>
                <img src={GithubLogo} alt="Github" />
              </div>
              Github
            </Link>
          </div>
          <div>
            <Link to="/gitlab-integration">
              <div>
                <img src={GitlabLogo} alt="Gitlab" />
              </div>
              Gitlab
            </Link>
          </div>
        </LogosContainer>
        <LogosContainer>
          <div>
            <Link to="/buildkite-integration">
              <div>
                <img src={BuildkiteLogo} alt="Buildkite" />
              </div>
              Buildkite
            </Link>
          </div>
          <div>
            <Link to="/heroku-integration">
              <div>
                <img src={HerokuLogo} alt="Heroku" />
              </div>
              Heroku
            </Link>
          </div>
          <div>
            <Link to="/squadlytics-cli">
              <div>
                <img src={SquadlyticsLogo} alt="Squadlytics CLI" />
              </div>
              Squadlytics CLI
            </Link>
          </div>
        </LogosContainer>
      </div>
    )
  }
} 

export default IndexPage
