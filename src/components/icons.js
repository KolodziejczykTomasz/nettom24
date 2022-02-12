import React from 'react'
import { TiSocialFacebookCircular, TiMail, TiLocationOutline, TiDevicePhone } from "react-icons/ti";

import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width:45px;
  color: rgb(209, 216, 224);
  padding: 0;
  font-size: ${({ isSmall }) => (isSmall ? "12px" : "20px")};
  transition: .2s;
  :hover{
    color: rgb(0, 212, 99);
  }
`
export const FacebookIcon = arg => {
    return (
        <Wrapper {...arg}>
            <TiSocialFacebookCircular />
        </Wrapper>
    )
}

export const PhoneIcon = arg => {
    return (
        <Wrapper {...arg}>
            <TiDevicePhone />
        </Wrapper>
    )
}

export const HomeIcon = arg => {
    return (
        <Wrapper {...arg}>
            <TiLocationOutline />
        </Wrapper>
    )
}


export const MailIcon = arg => {
    return (
        <Wrapper {...arg}>
            <TiMail />
        </Wrapper>
    )
}