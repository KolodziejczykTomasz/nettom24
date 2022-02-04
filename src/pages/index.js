import * as React from "react"
import Seo from "../components/seo"

import Layout from "../components/layout"
import styled from "styled-components"

const  Wrapper= styled.div`
  display: flex; 
  justify-content: center;
  align-items: center;
  height: 100%;
   width: 100%;
  color: #02D463;

`
const Column = styled.div` 
  display:grid;
  grid-template-rows: 2fr 1fr;
justify-content: center;
align-items: center;
width: 200px;
height: 200px;
border: 2px solid #02D463;`

const FirstRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
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
            NETTOM24
        </FirstRow>
            <SecondRow>
                icons
            </SecondRow>
        </Column>
    </Wrapper>
</Layout>
</>
)

export default IndexPage
