import React from 'react';
import { StaticPageTemplate } from '../../components/templates/static';

const StaticPreview = ({ entry, widgetFor }) => {
  return (
    <StaticPageTemplate html={widgetFor('body')} headline={entry.getIn(['data', 'headline'])} />
  );
};

export default StaticPreview;