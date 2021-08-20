import styled from "styled-components";
import {Link} from 'react-scroll'

export const Button = styled(Link)`
   border-radius: 50px;
   background: ${({primary}) => (primary ? '#D891EF' : '#6A5ACD')};
   white-space: nowrap;
   padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
   color: ${({dark}) => (dark ? '#010606' : 'black')};
   font-weight: bold;
   font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
   outline: none;
   border-style: solid;
   border-color: Black;
   cursor: pointer;
   display: flex;
   justify-content: center;
   align-items: center;
   transition: all 0.2s ease-in-out;
   font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

   &:hover{
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? '#6A5ACD' : '#36F57F')};
   }
`