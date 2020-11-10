import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AboutSection = styled.div`
display: flex;
min-height: 80vh;
align-items: center;
justify-content: space-around;
`;

export const Image = styled.img`
  width: 40%;
  height: 60vh;
  object-fit: cover;
  border-radius: 5%;
`;

export const IconsContainer = styled.div`
display: flex;
justify-content: space-around;
width: 40%;
`;

export const IconsSubContainer = styled.div`
display: flex;
justify-content: space-around;
width: 50%;
`;

export const Navbar = styled.div`
display: flex;
justify-content: center;
align-items: center;
position: sticky;
top: 0;
ul{
  display: flex;
  width: 50%;
  justify-content: space-around;
  list-style: none;
  li{
    padding: 3em 2em 1em 2em;
    color: white;
    height: 100%;
    &:hover{
      color: black;
      transition: all 0.5s ease;
      cursor: pointer;
    }
  }
}
`;

export const StyledLink = styled(Link)`
text-decoration: none;
padding: 3em 2em 1em 2em;
color: white;
&:focus, &:visited, &:link{
  text-decoration: none;
  } 
&:hover{
  color: black;
  transition: all 0.5s ease;
}
&:active{
  color: black;
}
`;
