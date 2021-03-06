/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from '../styles/global-styles';

import { HomePage } from './pages/HomePage/Loadable';
import { NotFoundPage } from './pages/NotFoundPage/Loadable';
import { MetaCodingChallengePage } from './pages/MetaCodingChallengePage/Loadable';
import { Sticky2 } from './pages/Sticky2/Loadable';
import { useTranslation } from 'react-i18next';

export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>

      <Switch>
        <Route
          exact
          path={process.env.PUBLIC_URL + '/homepage'}
          component={HomePage}
        />
        <Route
          exact
          path={process.env.PUBLIC_URL + '/'}
          component={MetaCodingChallengePage}
        />
        <Route component={NotFoundPage} />
        <Route component={Sticky2} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
