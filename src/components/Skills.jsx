
import styled from 'styled-components';
import { AboutSection } from '../styles';
import Toggle from './Toggle';

const Skills = () => {
  return (
    <SkillsSection>
      <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO' rel="noreferrer" target="_blank" ><button>See my portfolio</button></a>
      <div className="skills-sub-section">
        <h2>My skills</h2>
      </div>
      <div className="skills-sub-section">
        <Toggle title='Programming languages and frameworks/libraries'>
          <p className="skill-content">I studied Javascript, React, and NodeJS.</p>
        </Toggle>
      </div>
      <div >
        <Toggle title='Soft Skills' className="skills-sub-section">
          <div className="skill-content">
            <p>During my training, I worked on several projects using the AGILE methodology.</p>
            <p>I've worked as a solo artist and in different professional bands,</p>
            <p>which taught me how to balance independent work and teamwork.</p>
          </div>
        </Toggle>
      </div>
      <div className="skills-sub-section">
        <Toggle title="Miscellaneous">
        <div className="skill-content">
          <p>I speak french, english and spanish</p>
          <p>I'm willing to work on remote or to move for short to mid-terms missions.</p>
        </div>
        </Toggle>
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
  .skills-sub-section, .skill-content{
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