import * as React from 'react';
import styled from 'styled-components/macro';
import { ReactComponent as MetaLogo } from './assets/meta-logo.svg';

export function Logo() {
  return (
    <Wrapper>
      <MetaLogo className="logo" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  .logo {
    height: 18px;
    width: auto;
  }
`;
