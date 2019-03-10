import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import firstBackground from '../images/veggies.jpg';

const InfoContainer = styled.main`
  top: 65px;
  position: relative;
  width: 100%;
`;

const HeroContainer = styled.header`
  background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 90%, #EAE7DC 100%), linear-gradient(to bottom, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0) 100%), url(${firstBackground});
  background-size: cover;
  height: calc(100vh - 65px);
  background-position: center 75%;
  background-repeat: no-repeat;
  position: relative;

  @media screen and (min-width: 545px) {
      padding: 15px;
  }
`;

const Header = styled.h2`
  color: white;
  font-size: 4.5em;
  display: flex;
  margin-top: 30px;
  margin-bottom: 30px;

  @media screen and (min-width: 545px) {
      font-size: 5.5em;
      margin-top: 60px;
      margin-bottom: 60px;
  }
`;

const Top = styled.div`
  text-align: center;
  display: inline-block;
`;

const Logo = styled(Header)`
  color: #E85A4F;
  transition: 0.3s;

  :hover {
    color: #479761;
  }
`;

const LearnMore = styled.div`
  position: relative;
  color: white;
  left: 0;
  right: 0;
  font-size: 1.5em;
  p {
      margin: 5px;
  }
`;

const MainSection = styled.section`
    display: grid;
    grid-template-columns: 1fr;
    max-width: 1200px;
    margin: auto;
    @media screen and (min-width: 800px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`;

const InfoSection = styled.section`
    min-height: 150px;
    max-width: 400px;
    padding: 40px 20px;  
    margin: auto;
    @media screen and (min-width: 800px) {
        margin: 0 15px;
    }
`;

const StyledIcon = styled(FontAwesomeIcon)`
    font-size: ${props => props.fontSize ? props.fontSize : '2.25em'};
    color: ${props => props.color ? props.color : 'black'};
`;

export class Info extends React.Component {
  render() {
    return(
      <InfoContainer>
        <HeroContainer>
          <Top>
            <Logo><FontAwesomeIcon icon={['fa', 'apple-alt']} /> Plantry</Logo>
            <Header>Diet</Header>
            <Header>Right</Header>
          </Top>
          <LearnMore>
            <p>Learn more</p>
            <FontAwesomeIcon icon={['fa', 'chevron-down']}/>
          </LearnMore>
        </HeroContainer>
        <MainSection>
          <InfoSection>
            <header>
              <StyledIcon color="#276A73" icon={['fa', 'bread-slice']} />
              <h2>Make Dieting Easy</h2>
            </header>
            <p>With Plantry you can build a weekly meal plan with recipes you know and love.</p>
          </InfoSection>
          <InfoSection>
            <header>
              <StyledIcon color="#F7B733" icon={['fa', 'carrot']} />
              <h2>Get Quick Grocery Lists</h2>
            </header>
            <p>Plantry will automatically create shopping lists for you based on your saved plans and meals.</p>
          </InfoSection>
          <InfoSection>
            <header>
              <StyledIcon color="#FC4A1A" icon={['fa', 'egg']} />
              <h2>Feel Confident</h2>
            </header>
            <p>When dieting it's easy to fall off the wagon, but with Plantry you can build a plan that's right for you!</p>
          </InfoSection>
        </MainSection>
      </InfoContainer>
    )
  }
}