import styled from 'styled-components';

export const NavContainer = styled.nav`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 10;
  padding: 10px;
  background-color: #D8C3A5;
`;

export const Nav = styled.div`
  width: 100%;
  padding: 0 15px;
  border-bottom: 1px solid #DDD;
  justify-content: space-between;
  align-items: center;
  display: flex;
  background-color: #D8C3A5;
`

export const Logo = styled.h1`
  font-size: 27px;
  color: #E85A4F;
  text-decoration: none;
  transition: 0.3s;

  :hover {
    color: #E98074;
  }
`;

export const Button = styled.button`
  background: #D8C3A5;
  color: #E85A4F;
  font-size: 1em;
  padding: 0.25em 1em;
  border: 0px;
  border-radius: 3%;
  transition: 0.3s;
  margin: 10px;

  :hover {
    background: #EAE7DC;
  }
`;

