import React from "react";
import { GlobalStyles } from "assets/styles/GlobalStyles";
import { theme } from "assets/styles/theme";
import favicon from "assets/images/icon.png";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

export function MainTemplate({ children }) {
  return (
    <>
      <Helmet>
        <link rel="icon" href={favicon} />
      </Helmet>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Wrapper>{children}</Wrapper>
      </ThemeProvider>
    </>
  );
}

MainTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};
