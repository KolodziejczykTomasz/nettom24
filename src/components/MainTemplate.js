import * as React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'assets/styles/GlobalStyles';
import { theme } from 'assets/styles/theme';

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

export function MainTemplate({ children }) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Wrapper>
          {children}
        </Wrapper>
      </ThemeProvider>
    </>
  );
}

MainTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};
