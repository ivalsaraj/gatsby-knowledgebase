// @flow
import styled from 'styled-components'
import * as spacing from '../../theme/spacing'

const MarginContainer = styled.div`
  margin: 0 auto;
  max-width: ${spacing.siteWidth};
  width: 100%;
  padding-top: 0;

  @media (max-width: 600px) {
   padding: 0 20px;
  }
`

export default MarginContainer
