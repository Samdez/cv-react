
import styled from 'styled-components';
import {motion} from 'framer-motion';

import {pageAnimation} from '../animation';
import { Image, AboutSection, IconsContainer, IconsSubContainer } from '../styles'
import pic2 from '../img/pic2.jpg';
import { IoLogoJavascript } from 'react-icons/io';
import { DiReact } from 'react-icons/di';
import { FiGithub } from 'react-icons/fi';
import { FaNode } from 'react-icons/fa';
import Skills from './Skills';

const AboutMe = () => {

  const textAnim = {
    hidden: {opacity: 0},
    show: {opacity: 1, transition: {duration: 0.5}},
    transition: {when:'beforeChildren'}
  }
  
  const container = {
    hidden: {x: 100},
    show: {x: 0, transition: {duration: 1, ease: 'easeOut', staggerChildren: 0.25, when:'afterChildren'}} 
  }

  const pictureAnimation = {
    hidden: {scale: 1.5, opacity: 0},
    show: {scale: 1, opacity: 1, transition: {ease: 'easeOut', duration: 0.8}}
  }
 

  return (
    <motion.div variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
      <AboutSection>
        <motion.div variants={container} initial='hidden' animate='show' className='hidden'>
          <motion.h2 variants={textAnim} >From <strong>beatmaker...</strong></motion.h2>
          <motion.p variants={textAnim} >After studying jazz in prestigious music schools</motion.p>
          <motion.p variants={textAnim} >I became a producer/composer/arranger</motion.p>
          <motion.p variants={textAnim} >and worked with many different genres.</motion.p>
        </motion.div>
        <Image src={pic2} alt="" variants={pictureAnimation} initial='hidden' animate='show' />
        
      </AboutSection>
      
      <AboutSection>
        <IconsContainer>
          <IconsSubContainer>
            <IoLogoJavascript style={{ fontSize: '4rem' }} />
            <DiReact style={{ fontSize: '4rem' }} />
          </IconsSubContainer>
          <IconsSubContainer>
            <FiGithub style={{ fontSize: '4rem' }} />
            <FaNode style={{ fontSize: '4rem' }} />
          </IconsSubContainer>
        </IconsContainer>
        <div>
          <h2>... to <strong>programmer</strong></h2>
          <p>But now I'm ready for a new challenge.</p>
          <p>I'm currently studying web development at the Wild Code School in Biarritz</p>
          <p>and I'm looking forward to working on new projects!</p>
        </div>
      </AboutSection>
      <Skills />
    </motion.div>
  );
}



export default AboutMe;