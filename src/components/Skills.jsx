import styled from 'styled-components';
import {AboutSection} from '../styles';

const Skills = () => {
  return ( 
    <SkillsSection>
      <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO' rel="noreferrer" target="_blank" ><button>See my portfolio</button></a>
        <div className="skills-sub-section">
          <h2>My skills</h2>
        </div>
        <div className="skills-sub-section">
          <h3>Programming languages and frameworks/libraries</h3>
          <p>I studied Javascript, React, and NodeJS.</p>
          <div className="line"></div>
        </div>
        <div className="skills-sub-section">
          <h3>Soft Skills</h3>
          <p>During my training, I worked on several projects using the AGILE methodology.</p>
          <p>I've worked as a solo artist and in different professional bands,</p>
          <p>which taught me how to balance independent work and teamwork.</p>
          <div className="line"></div>
        </div>
        <div className="skills-sub-section">
          <h3>Miscellaneous</h3>
          <p>I speak french, english and spanish</p>
          <p>I'm willing to work on remote or to move for short to mid-terms missions.</p>
          <div className="line"></div>
        </div>
      </SkillsSection>
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

export default Skills;