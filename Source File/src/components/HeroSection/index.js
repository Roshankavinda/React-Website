import React, {useState} from 'react'
import Video from '../../videos/video 4.mp4';
import { Button } from '../ButtonElements';
import Profile from '../../images/profile.svg';
import { 
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroH2,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight,
} from './HeroElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <img src={Profile} style={{width:"450px", marginLeft:"-750px", marginTop:"0px", height:"600px"}} alt="profile"/>
            <HeroContent>
                <HeroH1>Hello!</HeroH1>
                <HeroH2>I'm Roshan Wickramasooriya</HeroH2>
                <HeroP>
                    Undergraduate Software Engineering student. I will do Web Development & UI UX Design.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="signup" onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary= 'true'
                    dark = 'true'>
                     Contact {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
                
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;
