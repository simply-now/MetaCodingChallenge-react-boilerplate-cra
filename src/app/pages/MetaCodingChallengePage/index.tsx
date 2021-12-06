import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components/macro';
import { NavBar } from 'app/components/NavBar';
import { Helmet } from 'react-helmet-async';
import { StyleConstants } from 'styles/StyleConstants';
import { Controller, Scene } from 'react-scrollmagic';

export function MetaCodingChallengePage() {
  const BlueTitleLargeText = [
    {
      id: 1,
      title: 'Focus on impact',
    },
    {
      id: 2,
      title: 'Focus on impact',
    },
    {
      id: 3,
      title: 'Be open',
    },
    {
      id: 4,
      title: 'Be bold',
    },
    {
      id: 4,
      title: 'Build social value',
    },
  ];

  const [BlueDurationStep, setBlueDurationStep] = useState(1);

  return (
    <>
      <Helmet>
        <title>Meta Coding challenge</title>
        <meta name="description" content="Meta Coding challenge" />
      </Helmet>
      <div>
        <Controller>
          <NavBar />
          <EmptyWrapper></EmptyWrapper>
          <TriggerWrapper id="BlueSceneTrigger"></TriggerWrapper>
          <Scene
            duration={'100%'}
            offset={'0'}
            triggerElement="#BlueSceneTrigger"
            triggerHook="onLeave"
            indicators={false}
            pin
          >
            {duration => (
              <BlueHeroSection>
                <BlueTitleSmall>
                  CHANGING TEXT
                  {setBlueDurationStep(Math.ceil((duration * 100) / 25))}
                </BlueTitleSmall>
                <BlueTitleLarge>
                  {BlueTitleLargeText[BlueDurationStep].title}
                </BlueTitleLarge>
              </BlueHeroSection>
            )}
          </Scene>
          <EmptyWrapper></EmptyWrapper>
        </Controller>
      </div>
    </>
  );
}

const BlueHeroSectionPrimary = '#005b94';

const TriggerWrapper = styled.div`
  top: calc(100vh - ${StyleConstants.NAV_BAR_HEIGHT});
  position: absolute;
`;

const EmptyWrapper = styled.div`
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
  align-items: flex-start;
  padding: 0px 0px 0px 2vw;
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
  font-size: calc(2.5rem + 4vw);
  padding: 0 0.5rem;
`;

const BlueTitleSmall = styled.div`
  font-weight: normal;
  color: ${p => BlueHeroSectionPrimary || p.theme.text};
  font-size: calc(1rem + 1vw);
`;
