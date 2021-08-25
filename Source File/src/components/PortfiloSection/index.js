import React from 'react'
import {Button} from '../ButtonElements';
import Contact from '../../images/portfilo.jpg';

import { 
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
} from './PortfiloElements';

const PortfiloSection = ({
    lightBg, 
    id, 
    imgStart, 
    topLine, 
    lightText, 
    headLine, 
    darkText, 
    description, 
    buttonLabel, 
    primary,
    dark,
    dark2,
}) => {
    return (
        <>
          <InfoContainer lightBg={lightBg} id={id}> 
             <InfoWrapper>
                 <InfoRow imgStart={imgStart}>
                     <Column1>
                       <TextWrapper>
                           <TopLine>{topLine}</TopLine>
                           <Heading lightText={lightText}>{headLine}</Heading>
                           <Subtitle darkText={darkText}>{description}</Subtitle>
                           <BtnWrap>
                               <Button to='home'
                               smooth={true}
                               duration={500}
                               spy={true}
                               exact="true"
                               offset={-80}
                               primary={primary ? 1 : 0}
                               dark={dark ? 1 : 0}
                               dark2={dark2 ? 1: 0}
                               >{buttonLabel}</Button>
                           </BtnWrap>
                       </TextWrapper>
                     </Column1>
                     <Column2>
                       <img src={Contact} style={{width:"550px",borderRadius:"5%",borderStyle:"inset", marginTop:"80px", height:"380px"}} alt="contact"/>
                     </Column2>
                 </InfoRow>
             </InfoWrapper>
          </InfoContainer>  
        </>
    );
};

export default PortfiloSection;
