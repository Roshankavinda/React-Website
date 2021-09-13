import React from 'react'
import {Button} from '../ButtonElements';
import Service from '../../images/service.svg';

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
} from './ServiceElements';

const ServiceSection = ({
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
                     <img src={Service} style={{width:"500px",marginTop:"-80px",marginRight:"500px", height:"400px"}} alt="service"/>
                     </Column1>
                     <Column2>
                      
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
                     </Column2>
                 </InfoRow>
             </InfoWrapper>
          </InfoContainer>  
        </>
    );
};

export default ServiceSection;
