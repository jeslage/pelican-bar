/* eslint-disable */
import CMS from 'netlify-cms';
import React from 'react';
import { StyleSheetManager } from 'styled-components';

import IndexPreview from './preview/index';
import StaticPreview from './preview/static';

const CSSInjector = ({ children }) => {
  const iframe = document.getElementsByTagName('iframe')[0];
  const iframeHeadElem = iframe.contentDocument.head;

  return <StyleSheetManager target={iframeHeadElem}>{children}</StyleSheetManager>;
};

CMS.registerPreviewTemplate('index', props => (
  <CSSInjector>
    <IndexPreview {...props} />
  </CSSInjector>
));

CMS.registerPreviewTemplate('impressum', props => (
  <CSSInjector>
    <StaticPreview {...props} />
  </CSSInjector>
));

CMS.registerPreviewTemplate('datenschutz', props => (
  <CSSInjector>
    <StaticPreview {...props} />
  </CSSInjector>
));
