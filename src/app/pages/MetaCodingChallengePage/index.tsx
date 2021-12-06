import * as React from 'react';
import styled from 'styled-components/macro';
import { P } from './P';
import { Link } from 'app/components/Link';
import { NavBar } from 'app/components/NavBar';
import { Helmet } from 'react-helmet-async';
import { StyleConstants } from 'styles/StyleConstants';

export function MetaCodingChallengePage() {
  return (
    <>
      <Helmet>
        <title>404 Page Not Found</title>
        <meta name="description" content="Page not found" />
      </Helmet>
      <NavBar />
      <Wrapper>
        <Title>
          4
          <span role="img" aria-label="Crying Face">
            😢
          </span>
          4
        </Title>
        <P>Page not found. Duplicate</P>
        <Link to={process.env.PUBLIC_URL + '/'}>Return to Home Page</Link>
      </Wrapper>
      <BlueHeroSection>
        <BlueTitleSmall>Changing Text</BlueTitleSmall>
        <BlueTitleLarge>Focus on impact</BlueTitleLarge>
      </BlueHeroSection>
    </>
  );
}

const BlueHeroSectionPrimary = '#005b94';

const Wrapper = styled.div`
  height: calc(100vh - ${StyleConstants.NAV_BAR_HEIGHT});
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 320px;
`;

const BlueHeroSection = styled.div`
  height: 100vh;
  background-color: #c8e7fa;
  display: flex;
  color: #005b94;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 320px;
  title {
    color: red;
  }
`;

const BlueTitleLarge = styled.div`
  margin-top: -8vh;
  font-weight: bold;
  color: ${p => BlueHeroSectionPrimary || p.theme.text};
  font-size: 3.375rem;
  span {
    font-size: 3.125rem;
  }
`;

const BlueTitleSmall = styled.div`
  margin-top: -8vh;
  font-weight: bold;
  color: ${p => BlueHeroSectionPrimary || p.theme.text};
  font-size: 3.375rem;
  span {
    font-size: 3.125rem;
  }
`;

const Title = styled.div`
  margin-top: -8vh;
  font-weight: bold;
  color: ${p => BlueHeroSectionPrimary || p.theme.text};
  font-size: 3.375rem;
  span {
    font-size: 3.125rem;
  }
`;
