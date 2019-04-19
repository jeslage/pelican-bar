import CMS from 'netlify-cms';
import React from 'react';
import { StyleSheetManager } from 'styled-components';

import IndexPreview from './preview/index';

const CSSInjector = children => {
  const iframe = document.getElementsByTagName('iframe')[0];
  const iframeHeadElem = iframe.contentDocument.head;

  return <StyleSheetManager target={iframeHeadElem}>{children}</StyleSheetManager>;
};

CMS.registerPreviewTemplate('index', props => (
  <CSSInjector>
    <IndexPreview {...props} />
  </CSSInjector>
));

// CMS.registerEditorComponent({
//   // Internal id of the component
//   id: 'dividerBox',
//   // Visible label
//   label: 'Divider Box',
//   // Fields the user need to fill out when adding an instance of the component
//   fields: [
//     {
//       label: 'Background',
//       name: 'background',
//       widget: 'select',
//       options: ['green', 'yellow', 'blue', 'purple', 'salmon']
//     },
//     { label: 'Pattern', name: 'pattern', widget: 'boolean', default: false }
//   ],
//   // Pattern to identify a block as being an instance of this component
//   pattern: /^<divider-box background=(\S+) pattern=(\S+)><\/divider-box>$/,
//   // Function to extract data elements from the regexp match
//   fromBlock: match => {
//     return {
//       background: match[1],
//       pattern: match[2]
//     };
//   },
//   // Function to create a text block from an instance of this component
//   toBlock: ({ background, pattern }) => {
//     return `<divider-box background=${background} pattern=${pattern}></divider-box>`;
//   },
//   // Preview output for this component. Can either be a string or a React component
//   // (component gives better render performance)
//   toPreview: ({ background, pattern }) => {
//     return `<p>${background} ${pattern}</p>`;
//   }
// });
