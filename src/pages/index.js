import React from 'react';
import {
    FacebookIcon,
    GithubIcon,
    MailIcon,
    PhoneIcon
} from "../components/icons"
import Seo from "../components/seo"

import Layout from "../components/layout"
import styled, {keyframes} from 'styled-components';

const AppearAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;


const SecondRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

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
    right: -10px;
    transition: ease-in-out .4s;
  }

`
const Content = styled.div`
  display: grid;
  margin: 100px 30px;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100px;

  & div {
    width: 100%;
    color: rgb(209, 216, 224);
    height: 100%;

    & a, a:visited, a:link {
      color: rgb(209, 216, 224);
      text-decoration: none;
      transition: .2s;
    }

    & a:hover {
      color: rgb(0, 212, 99);
      text-decoration: none;
    }
  }
`;

const Wrapper = styled.div`
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
  display: grid;
  position: relative;
  grid-template-rows: 1fr 1fr;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100px;
  cursor: pointer;

  :hover ${FirstRow}::after {
    right: 7px;
  }

  :hover ${GreyText} {
    color: rgb(209, 216, 224);
  }
`
const Dashboard = styled.div`
  display: flex;
  width: 100vw;
  height: 50px;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  bottom: 20vh;
  animation: 0.3s ease-in-out 1 forwards ${AppearAnimation};
`;
let useClickOutside = (handler) => {
    let domNode = React.useRef();

    React.useEffect(() => {
        let maybeHandler = (event) => {
            if (!domNode.current.contains(event.target)) {
                handler();
            }
        };

        document.addEventListener("mousedown", maybeHandler);

        return () => {
            document.removeEventListener("mousedown", maybeHandler);
        };
    });

    return domNode;
};

const IndexPage = () => {
    const [isPhone, setIsPhone] = React.useState(false);
    const [isMail, setIsMail] = React.useState(false);

    const handlePhoneToggle = () => {
        setIsPhone(!isPhone);
        setIsMail(false);
    }
    const handleMailToggle = () => {
        setIsMail(!isMail);
        setIsPhone(false);
    }


    const domNode = useClickOutside(() => {
        setIsMail(false)
        setIsPhone(false)
    })

    return (
        <>
            <Seo title="START"/>
            <Layout>
                <Wrapper>
                    <Column>
                        <FirstRow>
                            NETTOM<GreyText>24</GreyText>
                        </FirstRow>
                        <SecondRow>
                            <div onClick={() => handlePhoneToggle()}
                                 role="button"
                                 tabIndex="-1">
                                <PhoneIcon/>
                            </div>
                            <div onClick={() => handleMailToggle()}
                                 role="button"
                                 tabIndex="-2">
                                <MailIcon/></div>
                            <div><a
                                href="https://www.facebook.com/KolodziejczykTomasz44"
                                target="_blank" rel="noopener noreferrer"
                                tabIndex="-3">
                                <FacebookIcon/></a></div>
                            <div><a
                                href="https://github.com/KolodziejczykTomasz"
                                target="_blank" rel="noopener noreferrer"
                                tabIndex="-4">
                                <GithubIcon/></a></div>
                        </SecondRow>
                    </Column>
                </Wrapper> <Dashboard ref={domNode}>
                <Content>
                    {isPhone ? (
                        <div><a href="tel: +48.512893100"> +48.512893100</a>
                        </div>) : null}
                    {isMail ? (
                        <div><a href="mailto:tomaszkolodziejczyk@wp.pl"
                                target="_blank" rel="noopener noreferrer">
                            tomaszkolodziejczyk@wp.pl</a>
                        </div>) : null}
                </Content>
            </Dashboard>
            </Layout>
        </>
    )
}

export default IndexPage
