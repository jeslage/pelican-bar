import React from 'react';
import { StaticPageTemplate } from '../../components/templates/static';

const StaticPreview = ({ entry, widgetFor }) => (
  <StaticPageTemplate content={widgetFor('body')} headline={entry.getIn(['data', 'headline'])} />
);

export default StaticPreview;
