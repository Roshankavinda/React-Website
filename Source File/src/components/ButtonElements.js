import styled from "styled-components";
import {Link} from 'react-scroll'

export const Button = styled(Link)`
   border-radius: 50px;
   background: ${({primary}) => (primary ? '#76F9BD' : '#6A5ACD')};
   white-space: nowrap;
   padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
   color: ${({dark}) => (dark ? '#010606' : 'black')};
   font-weight: bold;
   font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
   outline: none;
   border-style: solid;
   border-color: white;
   cursor: pointer;
   display: flex;
   justify-content: center;
   align-items: center;
   transition: all 0.2s ease-in-out;
   font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

   &:hover{
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? '#FD9DB4' : '#D891EF')};
   }
`