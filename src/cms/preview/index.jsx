import React from 'react';
import { IndexPageTemplate } from '../../components/templates/index';

const IndexPreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return <IndexPageTemplate {...data} />;
  }
  return <div>Loading...</div>;
};

export default IndexPreview;
