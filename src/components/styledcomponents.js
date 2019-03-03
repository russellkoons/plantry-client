import styled from 'styled-components';

export const NavContainer = styled.nav`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 10;
  padding: 10px;
  background: #D8C3A5;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 940px) {
    flex-direction: column;
  }
`;

export const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media only screen and (max-width: 940px) {
    width: 100%;
  }
`;

export const Wide = styled.div`
  display: flex;

  @media only screen and (max-width: 940px) {
    display: none;
  }
`;

export const Narrow = styled.div`
  display: flex;
  align-self: flex-end;

  @media only screen and (min-width: 940px) {
    display: none;
  }
`;

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
  text-decoration: none;

  :hover {
    background: #EAE7DC;
  }
`;

export const FormButton = styled(Button)`
  background: #EAE7DC;

  :hover {
    background: #D8C3A5;
  }
`;

export const HamburgerLink = styled.a`
  text-decoration: none;
  color: #E85A4F;
  transition: 0.3s;

  :hover {
    color: #E98074;
  }
`;