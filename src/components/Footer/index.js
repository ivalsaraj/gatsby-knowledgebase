import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import MarginContainer from '../shared/MarginContainer'
import Ionicon from 'react-ionicons'
import LogoSVG from './_images/logo.svg'
import * as colors from '../../theme/colors'

const FooterContainer = styled.footer`
  padding: 32px 0;
  background-color: ${colors.darkBlue};
  color: ${colors.beige};
  
`
const FooterContent = styled.nav`
  font-family: avertaRegular;
  display: flex;
  justify-content: space-between;
`

const Copy = styled.div`
  margin: 20px 0;
`

const LinkList = styled.div`
  display: flex;
`

const LinkBlock = styled.nav`
  margin-right: 50px;
  a {
    color: ${colors.beige} !important;
    display: block;
    text-decoration: none;
  }
`

const SocialList = styled.nav`
  display: flex;
  align-items: flex-start;
  a {
    margin-left: 32px;
  }
  img {
    padding: 4px 0;
    height: 24px;
    
  }
`

const Footer = () => (
  <FooterContainer>
    <MarginContainer>
      <FooterContent>
        <LinkList>
          <LinkBlock>
            <Link to="/">
              <img src={LogoSVG} alt="Squadlytics" />
            </Link>
          </LinkBlock>
          <LinkBlock>
            <Link to="/privacy-policy">
              Privacy
            </Link>
            <Link to="/terms-of-use">
              Terms
            </Link>
          </LinkBlock>
        </LinkList>
        <LinkList>
          <LinkBlock>
            <a href="https://blog.squadlytics.com">Blog</a>
          </LinkBlock>
          <LinkBlock>
            <a href="https://squadlytics.com/features">
              Features
            </a>
            <a href="https://squadlytics.com/pricing">
              Pricing
            </a>
            <a href="https://squadlytics.com/signup">
              Signup
            </a>
            <a href="https://hq.squadlytics.com/squadlytics-development">
              Live demo
            </a>
          </LinkBlock>
          <SocialList>
            <a href="https://twitter.com/squadlytics">
              <Ionicon icon="logo-twitter" fontSize="24px" color={colors.beige} />
            </a>
          </SocialList>
        </LinkList>
      </FooterContent>
      <Copy>
        Copyright &copy; 2018 Squadlytics
      </Copy>
    </MarginContainer>
  </FooterContainer>
)

export default Footer
