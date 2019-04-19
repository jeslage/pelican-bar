import React from 'react';
import { IndexPage } from '../../templates/index';

const IndexPreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return <IndexPage {...data} />;
  } else {
    return <div>Loading...</div>;
  }
};

export default IndexPreview;
