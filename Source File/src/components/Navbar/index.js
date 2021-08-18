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
                <NavLogo to='/'> Hello!</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                         <NavLinks to="home">Home</NavLinks>
                    </NavItem>
                    <NavItem>
                         <NavLinks to="about">About</NavLinks>
                    </NavItem>
                    <NavItem>
                         <NavLinks to="skills">Skills</NavLinks>
                    </NavItem>
                    <NavItem>
                         <NavLinks to="services">Services</NavLinks>
                    </NavItem>
                    <NavItem>
                         <NavLinks to="portfilo">Portfilo</NavLinks>
                    </NavItem>
                    <NavItem>
                         <NavLinks to="contactme">Contact Me</NavLinks>
                    </NavItem>
                    <NavItem>
                         <NavLinks to="signup">Sign Up</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink  to='/signin'>Sign In</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
          </Nav>
        </>
    );
};

export default Navbar;
