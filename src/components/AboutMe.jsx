import styled from 'styled-components';
import { Image, AboutSection, IconsContainer, IconsSubContainer } from '../styles'
import pic2 from '../img/pic2.jpg';
import { IoLogoJavascript } from 'react-icons/io';
import { DiReact } from 'react-icons/di';
import { FiGithub } from 'react-icons/fi';
import { FaNode } from 'react-icons/fa';

const AboutMe = () => {
  return (
    <>
      <AboutSection>
        <div>
          <h2>From beatmaker...</h2>
          <p>After studying jazz in prestigious music schools</p>
          <p>I became a producer/composer/arranger</p>
          <p>and worked with many different genres.</p>
        </div>
        <Image src={pic2} alt="" />
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
          <h2>... to programmer</h2>
          <p>But now I'm ready for a new challenge.</p>
          <p>I'm currently studying web development at the Wild Code School in Biarritz</p>
          <p>and I'm looking forward to working on new projects!</p>
        </div>
      </AboutSection>
      <SkillsSection>
      <button>See my portfolio</button>
        <div className="skills-sub-section">
          <h2>My skills</h2>
        </div>
        <div className="skills-sub-section">
          <h3>Programming languages and frameworks/libraries</h3>
          <p>I studied Javascript, React, and NodeJS.</p>
          <div className="line"></div>
        </div>
        <div className="skills-sub-section">
          <h3>Teamwork</h3>
          <p>During my training, I worked on several projects using the AGILE methodology.</p>
          <div className="line"></div>
        </div>
        <div className="skills-sub-section">
          <h3>Miscellaneous</h3>
          <p>I speak french, english and spanish</p>
          <p>I'm willing to work on remote or to move for short to mid-terms missions.</p>
          <div className="line"></div>
        </div>
      </SkillsSection>
    </>
  );
}

const SkillsSection = styled(AboutSection)`
display: flex;
flex-direction: column;
  .line{
    background: white;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .skills-sub-section{
display: flex;
flex-direction: column;
align-items: center;
  }
  h2{
    margin-bottom: 6rem;
  }
  h3{
    font-size: 1.5rem;
    margin-bottom: 2rem;
    margin-top: 2rem;
  }
`;

export default AboutMe;