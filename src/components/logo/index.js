import React from "react";
import styled from "styled-components";
import MywaysImg from "../../WhatsApp_Image_2020-08-13_at_2.42.29_PM-removebg-preview.png";

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.div`
margin-top: 2px;
margin-left: 98px;
width: 66px;
height: 66px;
img {
  width: 100%;
  height: 100%;
}  
`;


export function Logo(props) {
  return (
    <LogoWrapper>
      <LogoImg>
        <img src={MywaysImg} alt="Myways logo" />
      </LogoImg>
    </LogoWrapper>
  );
}