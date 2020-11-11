import { AboutSection, IconContainer, Image, TitlesList } from '../styles'
import meme404 from '../img/meme404.jpg'
import styled from 'styled-components';
import { FiGithub, FiInstagram } from 'react-icons/fi';
import { FaSpotify } from 'react-icons/fa';
import {GiDiploma} from 'react-icons/gi';


const Experience = () => {
  return (
    <>
      <ExperienceSection>
        <Meme src={meme404} alt="" />
        <div>
          <h2>As a programmer</h2>
          <p>After my training at the Wild Code School,</p>
          <p>I will be doing a 4 month internship at the web agency Redmoot.</p>
          <p>In the meantime, you can check my projects on Github : </p>
          <div className="center"><FiGithub style={{ fontSize: '4rem' }} /></div>
        </div>
      </ExperienceSection>
      <ExperienceSection>
        <div>
          <h2>As a musician and a teacher</h2>
          <p>I've accumulated over 10M streams with my solo project Otaam over the years</p>
          <p>and played hundreds of shows in France and in Europe.</p>
          <p>I've been teaching guitar for private students</p>
          <p>and in music schools (La note bleue, Vacquiers (2014/15); EMIVA, Auterive (2015/16)</p>
        </div>
        <IconContainer>
          <FaSpotify style={{ fontSize: '4rem' }} />
          <h4>Listen</h4>
        </IconContainer>
        <IconContainer>
          <FiInstagram style={{ fontSize: '4rem' }} />
          <h4>Watch</h4>
        </IconContainer>
      </ExperienceSection>
      <div>
        <TitlesList>
          <li>
            <GiDiploma style={{ fontSize: '4rem' }} />
            <h3>Diplôme d'Etat de professeur de musique (jazz et musiques actuelles)</h3>
            <p>isdaT (Toulouse)</p>

          </li>
          <li>
            <GiDiploma style={{ fontSize: '4rem' }} />
            <h3>Diplôme d'interprétation en Guitare Jazz (DNSPM)</h3>
            <p>Musikene (Donostia-San Sebastian)</p>

          </li>
          <li>
            <GiDiploma style={{ fontSize: '4rem' }} />
            <h3>Diplôme Jazz Academy International</h3>
            <p>(Nancy)</p>
          </li>
          <li>
            <GiDiploma style={{ fontSize: '4rem' }} />
            <h3>Licence de lettres modernes</h3>
            <p>(Toulouse 3)</p>
          </li>
        </TitlesList>
      </div>
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
    padding-top: 2rem;
  }
`;

export default Experience;