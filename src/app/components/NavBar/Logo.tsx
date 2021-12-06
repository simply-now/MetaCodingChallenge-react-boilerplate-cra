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

const Title = styled.div`
  font-size: 1.25rem;
  color: ${p => p.theme.text};
  font-weight: bold;
  margin-right: 1rem;
`;

const Description = styled.div`
  font-size: 0.875rem;
  color: ${p => p.theme.textSecondary};
  font-weight: normal;
`;
