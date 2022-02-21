import React from 'react'
import {
    TiDevicePhone,
    TiLocationOutline,
    TiMail,
    TiSocialFacebookCircular
} from "react-icons/ti";
import {GoMarkGithub} from "react-icons/go";

import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  color: rgb(209, 216, 224);
  padding: 0;
  height: 18px;
  transition: .2s;

  :hover {
    color: rgb(0, 212, 99);
  }
`
export const FacebookIcon = arg => {
    return (
        <Wrapper {...arg}>
            <TiSocialFacebookCircular size={23}/>
        </Wrapper>
    )
}

export const PhoneIcon = arg => {
    return (
        <Wrapper {...arg}>
            <TiDevicePhone size={23}/>
        </Wrapper>
    )
}

export const HomeIcon = arg => {
    return (
        <Wrapper {...arg}>
            <TiLocationOutline size={20}/>
        </Wrapper>
    )
}


export const MailIcon = arg => {
    return (
        <Wrapper {...arg}>
            <TiMail size={25}/>
        </Wrapper>
    )
}


export const GithubIcon = arg => {
    return (
        <Wrapper {...arg}>
            <GoMarkGithub size={18}/>
        </Wrapper>
    )
}