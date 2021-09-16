import React from 'react';
import {FaBars} from 'react-icons/fa'
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink 
} from './NavbarElements';

const Navbar = ({toggle}) => {
  
    return (
        <>
          <Nav>
            <NavbarContainer>
                <NavLogo to="/"> Hello!</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                         <NavLinks 
                         to="about"
                         smooth={true} 
                         duration={500} 
                         spy={true} 
                         exact='true' 
                         offset={-80}
                         >About</NavLinks>
                    </NavItem>
                    <NavItem>
                         <NavLinks 
                         to="services"
                         smooth={true} 
                         duration={500} 
                         spy={true} 
                         exact='true' 
                         offset={-80}
                         >Services</NavLinks>
                    </NavItem>
                    <NavItem>
                         <NavLinks 
                         to="portfilo"
                         smooth={true} 
                         duration={500} 
                         spy={true} 
                         exact='true' 
                         offset={-80}
                         >Portfilo</NavLinks>
                    </NavItem>
                    <NavItem>
                         <NavLinks 
                         to="contactme"
                         smooth={true} 
                         duration={500} 
                         spy={true} 
                         exact='true' 
                         offset={-80}
                         >Contact Me</NavLinks>
                    </NavItem>
                    <NavItem>
                         <NavLinks 
                         to="signup"
                         smooth={true} 
                         duration={500} 
                         spy={true} 
                         exact='true' 
                         offset={-80}
                         >Sign Up</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink  
                    to="/signin"
                    smooth={true} 
                    duration={500} 
                    spy={true} 
                    exact='true' 
                    offset={-80}
                    >Sign In</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
          </Nav>
        </>
    );
};

export default Navbar;
