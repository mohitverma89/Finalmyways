import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { Logo } from "../logo";
import Accessibility from "./Accessibility";
import { NavLinks } from "./navLinks";
import { DeviceSize } from "../responsive";
import { MobileNavLinks } from "./mobileNavLinks";

import Main from "../main/Main";

const NavbarContainer = styled.div`
  width: 100%;
  height: 70px;
  box-shadow: 0px 3px 6px #0000000F;;
  display: flex;
  align-items: center;
`;

const LeftSection = styled.div`
  display: flex;
`;

const MiddleSection = styled.div`
  display: flex;
  flex: 2;
  margin-top:24px;
  justify-content: center;
`;

const RightSection = styled.div`
  display: flex;
`;

export const Navbar=(props)=> {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
 
  return (
    <div>
    <NavbarContainer>
      <LeftSection>
        <Logo />
      </LeftSection>
      <MiddleSection>{!isMobile && <NavLinks />}</MiddleSection>
      <RightSection>
        {!isMobile && <Accessibility  />}
        {isMobile && <MobileNavLinks />}
      </RightSection>
    </NavbarContainer>
    <Main/>
    
    </div>   
  );
}