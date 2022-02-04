import * as React from "react"
import {GlobalStyle} from "../styles/GlobalStyle"
import PropTypes from "prop-types"

import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`


const Layout = ({ children }) =>(
    <>
     <GlobalStyle/>
      <Wrapper >
       {children}
      </Wrapper>
    </>
  )

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
