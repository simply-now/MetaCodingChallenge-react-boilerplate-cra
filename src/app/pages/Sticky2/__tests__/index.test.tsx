import * as React from 'react';
import { Sticky2 } from '..';
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
          <Sticky2 />
        </HelmetProvider>
      </ThemeProvider>
    </MemoryRouter>,
  );

describe('<Sticky2 />', () => {
  it('should match snapshot', () => {
    const Sticky2 = renderPage();
    expect(Sticky2.toJSON()).toMatchSnapshot();
  });

  it('should should contain Link', () => {
    const Sticky2 = renderPage();
    expect(Sticky2.root.findByType(Link)).toBeDefined();
  });
});
