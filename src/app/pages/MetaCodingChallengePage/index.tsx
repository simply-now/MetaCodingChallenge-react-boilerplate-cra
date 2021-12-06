import * as React from 'react';
import styled from 'styled-components/macro';
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
      <EmptyWrapper></EmptyWrapper>
      <BlueHeroSection>
        <BlueTitleSmall>CHANGING TEXT</BlueTitleSmall>
        <BlueTitleLarge>Focus on impact</BlueTitleLarge>
      </BlueHeroSection>
      <EmptyWrapper></EmptyWrapper>
    </>
  );
}

const BlueHeroSectionPrimary = '#005b94';

const EmptyWrapper = styled.div`
  height: calc(1057px - ${StyleConstants.NAV_BAR_HEIGHT});
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
  align-items: flex-start;
  padding: 0 2vw;
  justify-content: center;
  flex-direction: column;
  min-height: 320px;
  title {
    color: red;
  }
`;

const BlueTitleLarge = styled.div`
  margin-top: 1.5vh;
  font-weight: 500;
  color: ${p => BlueHeroSectionPrimary || p.theme.text};
  font-size: 6rem;
  padding: 0 0.5rem;
  span {
    font-size: 5.125rem;
  }
`;

const BlueTitleSmall = styled.div`
  font-weight: normal;
  color: ${p => BlueHeroSectionPrimary || p.theme.text};
  font-size: 1.5rem;
  span {
    font-size: 1.125rem;
  }
`;
