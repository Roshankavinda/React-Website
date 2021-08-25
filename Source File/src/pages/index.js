import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import ServiceSection from '../components/ServiceSection';
import PortfiloSection from '../components/PortfiloSection';
import ContactSection from '../components/ContactSection';
import { homeObjOne} from '../components/InfoSection/Data';
import { homeObjTwo } from '../components/ServiceSection/Data';
import { homeObjThree } from '../components/PortfiloSection/Data';
import { homeObjFour } from '../components/ContactSection/Data';

const Home = () => {
    const[isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };


    return (
        <>
          <Sidebar isOpen={isOpen} toggle={toggle}/>
          <Navbar toggle={toggle}/>  
          <HeroSection/>
          <InfoSection {...homeObjOne}/>
          <ServiceSection {...homeObjTwo}/>
          <PortfiloSection {...homeObjThree}/>
          <ContactSection {...homeObjFour}/>
        </>
    );
};

export default Home;
