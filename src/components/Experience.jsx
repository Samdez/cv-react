import {AboutSection, Image} from '../styles'
import meme404 from '../img/meme404.jpg'
import styled from 'styled-components';
import { FiGithub } from 'react-icons/fi';

const Experience = () => {
  return ( 
    <>
    <ExperienceSection>
      <div>
        <h2>As a programmer</h2>
        <p>After my training at the Wild Code School,</p>
        <p>I will be doing a 4 month internship at the web agency Redmoot.</p>
        <p>In the meantime, you can check my projects on my Github : </p>
        <div className="center"><FiGithub style={{ fontSize: '4rem' }} /></div>
      </div>
        <Meme src={meme404} alt=""/>
    </ExperienceSection>
    </>
   );
}
 
const Meme = styled(Image)`
object-fit: none;
`;
const ExperienceSection = styled(AboutSection)`
  .center{
    display: flex;
    justify-content: center;
  }
`;

export default Experience;