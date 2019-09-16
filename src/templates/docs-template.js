import React, { Component } from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { mixpanelTrack } from '../utils/mixpanel'

const Container = styled.div`
  margin-bottom: 150px;
`

const Header = styled.header`
  margin-bottom: 30px;

  span{
    opacity: 0.6;
    font-size: 20px;
    line-height: 24px;
    display: inline-block;
    margin: 8px 0;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  img {
    
  }

  blockquote {
    margin-left: 24px;
  }

  hr {
    width: 100%;
    border-top: 1px solid #333;
    height: 0;
    background: transparent;
  }
`

class Template extends Component {
  componentDidMount() {
    const { data } = this.props;
    const { markdownRemark: page } = data;
    mixpanelTrack(`docs.view:${page.frontmatter.path}`)
  }

  render() {
    const { data } = this.props;
    const { markdownRemark: page } = data;
    return (
      <Container>
        <Helmet title={`Squadlytics docs | ${page.frontmatter.title}`} />
        <div className="page">
          <Header>
            <h1>{page.frontmatter.title}</h1>
            <span>{page.frontmatter.baseline}</span>
          </Header>
          <Content dangerouslySetInnerHTML={{ __html: page.html }} />
        </div>
      </Container>
    );
  }
}

export default Template

export const pageQuery = graphql`
  query DocsByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        baseline
      }
    }
  }
`
;