import React,{useState} from "react";
import styled from "styled-components";
import ther from "../../Instant logo.png";
import drop from "../../Path 2 (2).svg";
import Modal from 'react-modal';
import Tap from '../tap/Tap';

const NavLinksContainer = styled.div`
width:100%;
  height: 100%;
display: flex;
  flex-direction:column;
  margin-top:-12px;
  margin-Left:20px;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  margin-left:280px;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
  width:100%;

`;

const LinkItem = styled.li`
width:100%;
height: 100%;
padding: 0 1.1em;
color: #222;
font-weight: 500;
font-size: 20px;
width:auto;
align-items: center;
justify-content: center;
display: flex;
font-weight:500;






`;
// const image = styled.img``;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  display:flex;
  margin:24px;
  font-size: inherit;
  width:auto;
`;


export function NavLinks(props) {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <NavLinksContainer>
      <LinksWrapper>
        <LinkItem>
          
          <Link href="#" >
          <div   style={styles.navdrop} onClick={()=>setModalIsOpen(true)}>For You</div>
          <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}
          style={{
            overlay: {
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(255, 255, 255, 0.1)'
              
            },
            content: {
              position: 'absolute',
              top: '40px',
              left: '40px',
              right: '40px',
              bottom: '40px',
              border: '0px solid #ccc',
              background: 'rgba(255, 255, 255, 0)',
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '4px',
              outline: 'none',
              padding: '20px'
            }
          }}>
          <Tap />
          </Modal>
          <div   style={styles.navdrop} >
          <img src={drop} alt="thun" style={styles.image}>
          
         
          </img>
          </div>
          </Link>
          
        </LinkItem>

        <LinkItem>
          <Link href="#"><img src={ther} alt="thunder"></img>Instant Apply</Link>
        </LinkItem>
        <LinkItem>
          <Link href="#">Pricing</Link>
        </LinkItem>
        <LinkItem>
          <Link href="#">About Us</Link>
        </LinkItem>
      </LinksWrapper>
    </NavLinksContainer>
  );
}

const styles={
  navdrop:{
    opacity:1,
    
    marginTop:0
  },

  dropdown:{
    border:0,
    outline:0,
  },
  image:{
    marginLeft:5,
    marginBottom:4,
        scale:0.2
  }
};