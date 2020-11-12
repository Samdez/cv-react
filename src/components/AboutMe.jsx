
import { AnimateSharedLayout, motion } from 'framer-motion';

import { useScroll } from './useScroll';
import { pageAnimation, textAnim, container, pictureAnimation, logoAnimation } from '../animation';
import { Image, AboutSection, IconsContainer, IconsSubContainer } from '../styles'
import pic2 from '../img/pic2.jpg';
import { IoLogoJavascript } from 'react-icons/io';
import { DiReact } from 'react-icons/di';
import { FiGithub } from 'react-icons/fi';
import { FaNode } from 'react-icons/fa';
import Skills from './Skills';
import { useState } from 'react';

const AboutMe = () => {

  const [jsLogo, setJsLogo] = useState(false);
  const [reactLogo, setReactLogo] = useState(false);
  const [githubLogo, setGithubLogo] = useState(false);
  const [nodeLogo, setNodeLogo] = useState(false);
  const [element, controls] = useScroll();

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
          <IconsContainer ref={element} variants={container} initial='hidden' animate={controls}>
            <IconsSubContainer>
              <div>
                <IoLogoJavascript style={{ fontSize: '4rem', cursor: 'pointer' }} onClick={() => setJsLogo(!jsLogo)} />
                {jsLogo && <motion.p variants={logoAnimation} initial='hidden' animate='show' >Javascript</motion.p>}
              </div>
              <div>
                <DiReact style={{ fontSize: '4rem', cursor: 'pointer' }} onClick={() => setReactLogo(!reactLogo)} />
                {reactLogo && <motion.p variants={logoAnimation} initial='hidden' animate='show' >React</motion.p>}
              </div>
            </IconsSubContainer>
            <IconsSubContainer>
              <div>
                <FiGithub style={{ fontSize: '4rem', cursor: 'pointer' }} onClick={() => setGithubLogo(!githubLogo)}/>
                {githubLogo && <motion.p variants={logoAnimation} initial='hidden' animate='show' >Github</motion.p>}
              </div>
              <div>
                <FaNode style={{ fontSize: '4rem', cursor: 'pointer' }} onClick={() => setNodeLogo(!nodeLogo)}/>
                {nodeLogo && <motion.p variants={logoAnimation} initial='hidden' animate='show' >NodeJS</motion.p>}
              </div>
            </IconsSubContainer>
          </IconsContainer>
          <motion.div ref={element} variants={container} initial='hidden' animate={controls}>
            <h2>... to <strong>programmer</strong></h2>
            <p>But now I'm ready for a new challenge.</p>
            <p>I'm currently studying web development at the Wild Code School in Biarritz</p>
            <p>and I'm looking forward to working on new projects!</p>
          </motion.div>
      </AboutSection>
      <Skills />
    </motion.div>
  );
}



export default AboutMe;