import styled from 'styled-components';
import Popup from 'reactjs-popup';

// A bunch of styled components I use throughout the app

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
  max-height: 65px;

  @media only screen and (max-width: 940px) {
    flex-direction: column;
    height: auto;
    max-height: 200px;
  }
`;

export const Container = styled.main`
  top: 65px;
  position: relative;
  width: 100%;
  align-items: center;

  @media only screen and (max-width: 940px) {
    top: 70px;
  }
`;

export const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: auto;
  margin-bottom: auto;

  @media only screen and (max-width: 940px) {
    width: 100%;
    margin-top: 10px;
  }
`;

export const Wide = styled.div`
  display: flex;
  margin-top: auto;
  margin-bottom: auto;

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
    color: #479761;
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
  background: #EFE2BA;

  :hover {
    background: #D8C3A5;
  }
`;

export const PlusMinus = styled.button`
  background: #EAE7DC;
  color: #E85A4F;
  font-size: 1em;
  height: 22px;
  border: 0px;
  border-radius: 3%;
  transition: 0.3s;
  text-decoration: none;

  :hover {
    background: #D8C3A5;
  }
`;

export const HamburgerLink = styled.a`
  text-decoration: none;
  color: #E85A4F;
  transition: 0.3s;
  margin-top: 10px;

  :hover {
    color: #E98074;
  }
`;

export const StyledFooter = styled.footer`
  margin-top: 100px;
  color: #E85A4F;
`;

export const StyledPopup = styled(Popup)`
  background: #EAE7DC !important;
  color: #E85A4F;
  border: 0px;
  border-radius: 15px;
  max-width: 300px;
  width: 80% !important;
  max-height: 100vh;
  overflow-y: hidden;
  overflow-x: hidden;

  @media only screen and (max-width: 940px) {
    max-height: 80vh;
    overflow-y: auto;
  }
`;

export const MealPopup = styled(StyledPopup)`
  max-width: 400px;
`;

export const CloseButton = styled.button`
  cursor: pointer;
  position: absolute;
  display: block;
  padding: 2px 5px;
  line-height: 20px;
  right: 10px;
  top: 10px;
  font-size: 24px;
  background: #EAE7DC;
  color: #E85A4F;
  border: 0px;
  border-radius: 18px;
  transition: 0.3s;
  
  :hover {
    color: E98074;
  }
`;

export const FieldSet = styled.fieldset`
  color: #E85A4F;
  border-color: #E85A4F;
  border-radius: 15px;
  max-width: 1000px;
  margin: auto;

  @media only screen and (max-width: 940px) {
    display: block;
  }
`;

export const PlanDiv = styled.div`
  display: inline;

  @media only screen and (max-width: 940px) {
    display: block;
  }
`;

export const Error = styled.span`
  background: red;
  color: white;
  border-radius: 2px;
  border: 0px;
  padding: 2px;
  margin: 5px;

  @media only screen and (max-width: 940px) {
    display: block;
    min-width: 75px;
    max-width: 150px;
    margin-left: auto;
    margin-right: auto;
  }
`;