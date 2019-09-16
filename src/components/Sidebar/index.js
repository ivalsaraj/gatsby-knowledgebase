import React from 'react'
import Link from 'gatsby-link'
import SearchBox from '../SearchBox'
import styled from 'styled-components'
import * as spacing from '../../theme/spacing'

const SidebarContainer = styled.div`
  width:  ${spacing.docSidebarWidth};
  margin: 0 16px 50px 0;

  font-size: 14px;
  h3 {
    font-size: 14px;
    line-height: 22px;
    margin: 0 0 8px 0 !important;
    text-transform: uppercase;
  }

  ul {
    margin: 0 0 16px 0 !important;
    list-style-type: none !important;
    li {
      margin: 0 !important;
    }
  }
`

const Sidebar = () => (
  <SidebarContainer>
    {process.env.GATSBY_DOCSEARCH_API_KEY && process.env.GATSBY_DOCSEARCH_INDEX && (
      <SearchBox />
    )}
    <h3><Link to="/quick-start">Quick start</Link></h3>
    <ul>
      <li><Link to="/getting-started">Getting Started</Link></li>
    </ul>
    <h3><Link to="/integrations">Integrations</Link></h3>
    <ul>
      <li><Link to="/bitbucket-cloud-integration">Bitbucket Cloud</Link></li>
      <li><Link to="/buildkite-integration">Buildkite</Link></li>
      <li><Link to="/github-integration">Github</Link></li>
      <li><Link to="/gitlab-integration">Gitlab</Link></li>
      <li><Link to="/heroku-integration">Heroku</Link></li>
      <li><Link to="/jira-integration">Jira</Link></li>
      <li><Link to="/squadlytics-cli">Squadlytics CLI</Link></li>
    </ul>
    <h3><Link to="/notifications">Notifications</Link></h3>
    <ul>
      <li><Link to="/slack-integration">Slack integration</Link></li>
      <li><Link to="/project-alerts">Project alerts</Link></li>
    </ul>
    <h3><Link to="/help-feedback">Help &amp; feedback</Link></h3>
    <ul>
      <li><Link to="/limitations">Limitations</Link></li>
      <li><Link to="/support">Support</Link></li>
    </ul>
    <h3><Link to="/legal">Legal</Link></h3>
    <ul>
      <li><Link to="/privacy-policy">Privacy</Link></li>
      <li><Link to="/terms-of-use">Terms</Link></li>
    </ul>
  </SidebarContainer>
)

export default Sidebar