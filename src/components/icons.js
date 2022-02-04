import { FaFacebook } from 'react-icons/fa';

import styled from "styled-components"

const Wrapper = styled.div`
  padding: 0 5px;
  font-size: ${({ isSmall }) => (isSmall ? "12px" : "18px")};
  margin-top: -3px;
`
export const FacebookIcon = arg => {
    return (
        <Wrapper {...arg}>
            <FaFacebook />
        </Wrapper>
    )
}