import styled from "styled-components";

export const InfoContainer = styled.div`
   color: #fff;
   background: ${({lightBg}) => (lightBg ? '#364638' : '#364638')};

   @media screen and (max-width: 768px){
       padding: 100px 0;
   }
`;

export const InfoWrapper = styled.div`
   display: grid;
   z-index: 1;
   height: 630px;
   width: 100%;
   max-width: 1100px;
   margin-right: auto;
   margin-left: auto;
   padding: 0 24px;
   justify-content: center;
`;

export const InfoRow = styled.div`
   display: grid;
   grid-auto-columns: minmax(auto, 1fr);
   align-items: center;
   grid-template-areas: ${({imgStart}) => (imgStart ? `'col2' 'col1'` : `'col1 col2'`)};

   @media screen and (max-width: 768px){
       grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}
   };
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
    margin-top: 150px;
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 -10px;
    grid-area: col2;
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`;

export const TopLine = styled.p`
   color: #EA92A2 ;
   font-size: 30px;
   line-height: 16px;
   letter-spacing: 1.4px;
   text-transform: uppercase;
   margin-bottom: 16px;
   font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightText}) => (lightText ? 'white' : 'white')};
    
    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`;

export const Subtitle = styled.p`
   max-width: 440px;
   margin-bottom: 35px;
   font-size: 18px;
   line-height: 24px;
   color: ${({darkText}) => (darkText ? 'white' : 'white')};
`;

export const BtnWrap = styled.div`
   display: flex;
   justify-content: flex-start;
`;


