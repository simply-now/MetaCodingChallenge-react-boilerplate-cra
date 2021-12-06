import * as React from 'react';
import { MetaCodingChallengePage } from '..';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { themes } from 'styles/theme/themes';
import { HelmetProvider } from 'react-helmet-async';
import renderer from 'react-test-renderer';
import { Link } from 'app/components/Link';

const renderPage = () =>
  renderer.create(
    <MemoryRouter>
      <ThemeProvider theme={themes.light}>
        <HelmetProvider>
          <MetaCodingChallengePage />
        </HelmetProvider>
      </ThemeProvider>
    </MemoryRouter>,
  );

describe('<MetaCodingChallengePage />', () => {
  it('should match snapshot', () => {
    const MetaCodingChallengePage = renderPage();
    expect(MetaCodingChallengePage.toJSON()).toMatchSnapshot();
  });

  it('should should contain Link', () => {
    const MetaCodingChallengePage = renderPage();
    expect(MetaCodingChallengePage.root.findByType(Link)).toBeDefined();
  });
});
