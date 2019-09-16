import React from 'react'
import Link from 'gatsby-link'
import LogoSVG from './_images/logo.svg'
import MarginContainer from '../shared/MarginContainer'
import styled from 'styled-components'
import * as colors from '../../theme/colors'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 18px 0 60px 0;

  @media (max-width: 600px) {
    padding: 5px 0;
  }
`

const Logo = styled.div`
  a {
    line-height: auto;
    display: flex;
    font-size: 35px;
    img {
      height: 35px;

      @media (max-width: 600px) {
        height: 20px;
      }

      padding: 0;
      margin: 0;
      
    }
  }
  
`

const Nav = styled.nav`
  padding: 0;
  margin: 0;
  a {
    font-family: avertaSemibold;
    display: inline-block;
    color: ${colors.base} !important;
    margin: 0 0 0 50px;
    padding-bottom:18px;
    position: relative;
    top: 18px;
    border-bottom: 5px solid #F2E9E0;
    
    &.selected, &:hover {
      border-bottom: 5px solid ${colors.green};
    }
  }
  
  .signup {
    @media (max-width: 600px) {
      display: none;
    }
  }
`

const Header = () => (
  <MarginContainer>
    <HeaderContainer>
      <Logo>
        <Link to="/">
          <img src={LogoSVG} alt="Squadlytics" />
        </Link>
      </Logo>
      <div>
        <Nav>
          <a href="https://squadlytics.com/features">
            Features
          </a>
          <a href="https://squadlytics.com/pricing">
            Pricing
          </a>
          <a href="https://hq.squadlytics.com/squadlytics-development">
            Live Demo
          </a>
          <a href="https://squadlytics.com/signup">
            Signup
          </a>
        </Nav>
      </div>
    </HeaderContainer>
  </MarginContainer> 
)

export default Header
