import React from 'react';
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin
} from 'react-icons/fa';

import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
           <FooterWrap>
               <FooterLinksContainer>
                   <FooterLinksWrapper>
                       <FooterLinkItems>
                           <FooterLinkTitle> About </FooterLinkTitle>
                               <FooterLink to="/">How get Services</FooterLink>
                               <FooterLink to="/">Offers</FooterLink>
                               <FooterLink to="/">Careers</FooterLink>
                               <FooterLink to="/">Terms of Services</FooterLink>
                       </FooterLinkItems>
                       <FooterLinkItems>
                       <FooterLinkTitle> Lets's See! </FooterLinkTitle>
                               <FooterLink to="/">My Works</FooterLink>
                               <FooterLink to="/">My Clients</FooterLink>
                               <FooterLink to="/">My Blog</FooterLink>
                       </FooterLinkItems>
                   </FooterLinksWrapper>
                   <FooterLinksWrapper>
                       <FooterLinkItems>
                           <FooterLinkTitle> Contact Me </FooterLinkTitle>
                               <FooterLink to="/">Contact</FooterLink>
                               <FooterLink to="/">Support</FooterLink>
                       </FooterLinkItems>
                       <FooterLinkItems>
                           <FooterLinkTitle> Social Media </FooterLinkTitle>
                               <FooterLink to="/">Instagram</FooterLink>
                               <FooterLink to="/">Facebook</FooterLink>
                               <FooterLink to="/">Youtube</FooterLink>
                               <FooterLink to="/">Twitter</FooterLink>
                       </FooterLinkItems>
                   </FooterLinksWrapper>
               </FooterLinksContainer>
               <SocialMedia>
                   <SocialMediaWrap>
                       <SocialLogo to='/'>
                           Hello!
                       </SocialLogo>
                       <WebsiteRights>Hello!  Ⓒ {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                       <SocialIcons>
                           <SocialIconLink href="" target="_blank" aria-label="Facebook">
                               <FaFacebook/>
                           </SocialIconLink>
                           <SocialIconLink href="" target="_blank" aria-label="Instagram">
                               <FaInstagram/>
                           </SocialIconLink>
                           <SocialIconLink href="" target="_blank" aria-label="Youtube">
                               <FaYoutube/>
                           </SocialIconLink>
                           <SocialIconLink href="" target="_blank" aria-label="Twitter">
                               <FaTwitter/>
                           </SocialIconLink>
                           <SocialIconLink href="" target="_blank" aria-label="Linkedin">
                               <FaLinkedin/>
                           </SocialIconLink>
                       </SocialIcons>
                   </SocialMediaWrap>
               </SocialMedia>
           </FooterWrap>
        </FooterContainer>
    )
};

export default Footer;
