import React, { useState } from "react";
import styled from "styled-components";

import { MenuToggle } from "./menuToggle";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
  background-color: #fff;
  width: 100%;
  flex-direction: column;
  position: fixed;
  margin-left: 0;
`;

const LinkItem = styled.li`
  margin-top: 12px;
  margin-left: 515px;
  width: 110px;
  height: 22px;
font: normal normal normal 16px/22px Open Sans;
letter-spacing: 0.49px;
color: #000000;
opacity: 1;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`;

const Marginer = styled.div`
  height: 2em;
`;

export function MobileNavLinks(props) {
  const [isOpen, setOpen] = useState(false);

  return (
    <NavLinksContainer>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <LinksWrapper>
          <LinkItem>
            <Link href="#">About us</Link>
          </LinkItem>
          <LinkItem>
            <Link href="#">How it works</Link>
          </LinkItem>
          <LinkItem>
            <Link href="#">Explore</Link>
          </LinkItem>
          <LinkItem>
            <Link href="#">Impact</Link>
          </LinkItem>
          <Marginer />
          {/*<Accessibility />*/}
        </LinksWrapper>
      )}
    </NavLinksContainer>
  );
}