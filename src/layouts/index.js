import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Link from 'gatsby-link'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import MarginContainer from '../components/shared/MarginContainer'
import Favicon from './favicon.ico'
import * as colors from '../theme/colors'
import * as spacing from '../theme/spacing'

import AvertaStandard from './_fonts/AvertaStd-Light.otf'
import AvertaStandardRegular from './_fonts/AvertaStd-Regular.otf'
import AvertaStandardSemibold from './_fonts/AvertaStd-Semibold.otf'
import AvertaStandardRegularItalic from './_fonts/AvertaStd-RegularItalic.otf'
import AvertaStandardSemiboldItalic from './_fonts/AvertaStd-SemiboldItalic.otf'

import './index.css'
require("prismjs/themes/prism-okaidia.css");

const SiteContainer = styled.div`
  height: 100vh;

  overflow: auto;
  display: flex;
	flex-direction: column;
  color: ${colors.base};
  @font-face {
    font-family: avertaStandard;
    src: url(${AvertaStandard});
  }
  @font-face {
    font-family: avertaRegular;
    src: url(${AvertaStandardRegular});
  }
  @font-face {
    font-family: avertaSemibold;
    src: url(${AvertaStandardSemibold});
  }
  @font-face {
    font-family: avertaRegularItalic;
    src: url(${AvertaStandardRegularItalic});
  }
  @font-face {
    font-family: avertaSemiboldItalic;
    src: url(${AvertaStandardSemiboldItalic});
  }
  
  font-family: avertaRegular;
  font-size: 16px;
  line-height: 24px;

  a {
    text-decoration: none;
    color: ${colors.linkPrimary};
    
    &:hover {
      filter: brightness(120%);
    }
  }

  p {
    margin-bottom: 12px;
  }

  h1 {
    font-family: avertaSemibold;
    font-size: 36px;
    line-height: 44px;
    margin-bottom: 12px;
  }

  h2 {
    font-family: avertaSemibold;
    font-size: 24px;
    line-height: 36px;
    margin: 30px 0 12px 0;
    
  }

  h3 {
    font-family: avertaSemibold;
    font-size: 18px;
    line-height: 22px;
    margin: 22px 0 16px 0;
    text-transform: uppercase;

    a {
      color: ${colors.base};
    }
  }

  h4 {
    font-family: avertaSemibold;
    color: ${colors.green};
    text-transform: uppercase;
    margin-bottom: 22px;
    font-size: 20px;
    line-height: 28px;
  }

  ul {
    list-style-type: disc;
    
    li {
      margin-left: 2rem;
      margin-bottom: 0.8rem;
    }
  }

  ol {
    list-style-type: decimal;
    
    li {
      margin-left: 2rem;
      margin-bottom: 1rem;
    }
  }

  strong, b {
    font-family: avertaSemibold;
  }

  em {
    font-family: avertaRegularItalic;
  }

  em b, b em, em strong, strong em {
    font-family: avertaSemiboldItalic;
  }

  pre {
    font-size: 14px;
  }

  a.button {
    background-color: ${colors.green};
    font-family: avertaRegular;
    color: ${colors.beige} !important;
    font-size: 16px;
    padding: 10px 16px;
    border: 2px solid ${colors.green};
    cursor: pointer;
    display: inline-block;
    text-decoration: none;
    
    &:hover {
      filter: brightness(110%);
      text-decoration: none;
    }
  }
`

const Content = styled.div`
  display: flex;
  flex: 1 0 auto;
`

const InnerContent = styled.div`
  display: flex;
`

const Main = styled.div`
  flex: 1;
  width: ${spacing.docMainWidth};
`

class TemplateWrapper extends Component {
  render() {
    return (
      <SiteContainer>
        <Helmet
          title="Squadlytics docs | Team analytics for product teams"
          meta={[
            {
              name: 'description',
              content: 'Squadlytics monitors your productivity tools and provides you data to improve your team flow. ' +
                      'We detect anomalies and risks in your project activity and automatically share it with your team.'
            }
          ]}
        >
          <link rel="shortcut icon" type="image/x-icon" href={Favicon} />
          <script>{`
            window.intercomSettings = {
              app_id: "n2i7k1aa"
            };
          `}</script>
          <script type="text/javascript">{`
            (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',intercomSettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Intercom=i;function l(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/n2i7k1aa';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})()
          `}</script>
          <script>{`
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

            ga('create', 'UA-108365742-3', 'auto');
            ga('send', 'pageview');

          `}</script>
          
        </Helmet>
        <Header />
        <Content>
          <MarginContainer>
            <InnerContent>      
              <Sidebar />
              <Main>
                {this.props.children()}
              </Main>
            </InnerContent>
          </MarginContainer>
        </Content>
        <Footer />
      </SiteContainer>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
