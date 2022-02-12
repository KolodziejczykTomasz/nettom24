import * as React from "react"
import { FacebookIcon, PhoneIcon, HomeIcon, MailIcon } from "../components/icons"
import Seo from "../components/seo"

import Layout from "../components/layout"
import styled from "styled-components"

const FirstRow = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  font-weight: 600;
  letter-spacing: 1px;
  ::after {
    content: '';
    position: absolute;
    display: inline-block;
    border: 2px solid rgb(209, 216, 224);
    color: rgb(209, 216, 224);
    width: 22%;
    height: 2.2rem;
    right: -9px;
    transition: ease-in-out .4s;
  }

`

const  Wrapper= styled.div`
  display: flex; 
  justify-content: center;
  align-items: center;
  height: 100%;
   width: 100%;
  color: rgb(0, 212, 99);
   
`
const GreyText = styled.span`
  transition: ease-in-out .4s;
`

const Column = styled.div` 
  display:grid;
  grid-template-rows: 1fr 1fr;
justify-content: center;
align-items: center;
width: 200px;
height: 100px;
  cursor: pointer;
  :hover ${FirstRow}::after{
  right:7px;  
}
  :hover ${GreyText} {
    color: rgb(209, 216, 224);
  } 
`

const SecondRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center  
`


const IndexPage = () => (
    <>
    <Seo title="Start" />
        <Layout>
    <Wrapper>
        <Column>
        <FirstRow>
            NETTOM<GreyText>24</GreyText>
        </FirstRow>
            <SecondRow>
                <HomeIcon/>
                <PhoneIcon/>
                <MailIcon/>
                <FacebookIcon/>
            </SecondRow>
        </Column>
    </Wrapper>
</Layout>
</>
)

export default IndexPage
