import { motion } from 'framer-motion';
import styled from 'styled-components';
import {AboutSection} from '../styles';
import {pageAnimation} from '../animation'

const Contact = () => {
  return ( 
    <motion.div variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
    <ContactSection>
      <h1>De Zaldua Samuel</h1>
      <p>31/08/1987</p>
      <p>Nationality: french</p>
      <p>16 avenue du 8 mai 1945 64100 Bayonne (France)</p>
      <a href="mailto: samuel.dezaldua@gmail.com"><strong>samuel.dezaldua@gmail.com</strong></a>
      <p></p>
    </ContactSection>
    </motion.div>
   );
}
 
const ContactSection = styled(AboutSection)`
  flex-direction: column;
  margin-top: 10vh;
  a{
    font-size: 2rem;
    &:hover{
  color: black;
  transition: all 0.5s ease;
}
  }
  h1{
    color: white;
  }
`;

export default Contact;