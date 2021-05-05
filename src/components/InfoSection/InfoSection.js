import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  SubTitle,
  ImgWrapper,
  Img,
} from "./InfoSection.elements";
import { Container,Button } from "../../globalStyle";
import Aos from 'aos';
import 'aos/dist/aos.css'

export const InfoSection = ({
  lightBg,
  imgStart,
  lightTopLine,
  lightTextDesc,
  buttonLabel,
  description,
  headLine,
  lightText,
  topLine,
  primary,
  img,
  alt,
  start,
}) => {
 
  
useEffect(() => {
  Aos.init({
    duration:2000});
}, [])
  




  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                
                <TopLine data-aos="fade-right"  lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading  data-aos="fade-left" lightText={lightText}>{headLine}</Heading>
                <SubTitle data-aos="fade-right" lightTextDesc={lightTextDesc}>{description}</SubTitle>
                <Link to="/sign-up">
                  <Button data-aos="zoom-out-up" gib fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img data-aos="flip-up" src={img} alt={alt}/>
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};
