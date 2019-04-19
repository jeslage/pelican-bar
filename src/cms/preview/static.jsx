import React from 'react';
import PropTypes from 'prop-types';
import { StaticPageTemplate } from '../../components/templates/static';

const StaticPreview = ({ entry, widgetFor }) => (
  <StaticPageTemplate html={widgetFor('body')} headline={entry.getIn(['data', 'headline'])} />
);

export default StaticPreview;
