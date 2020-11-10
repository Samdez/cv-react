import styled from 'styled-components';

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
ul{
  display: flex;
  width: 50%;
  justify-content: space-around;
  align-items; color-interpolation-filters;
  list-style: none;
  li{
    margin-top: 2em;
  }
}
`;
