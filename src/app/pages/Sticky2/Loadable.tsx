/**
 * Asynchronously loads the component for NotFoundPage
 */

import * as React from 'react';
import { lazyLoad } from 'utils/loadable';
import { LoadingIndicator } from 'app/components/LoadingIndicator';

export const Sticky2 = lazyLoad(
  () => import('./index'),
  module => module.Sticky2,
  {
    fallback: <LoadingIndicator />,
  },
);
