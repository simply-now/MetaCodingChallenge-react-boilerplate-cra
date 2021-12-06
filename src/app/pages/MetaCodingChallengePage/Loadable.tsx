/**
 * Asynchronously loads the component for MetaCodingChallengePage
 */

import * as React from 'react';
import { lazyLoad } from 'utils/loadable';
import { LoadingIndicator } from 'app/components/LoadingIndicator';

export const MetaCodingChallengePage = lazyLoad(
  () => import('./index'),
  module => module.MetaCodingChallengePage,
  {
    fallback: <LoadingIndicator />,
  },
);
