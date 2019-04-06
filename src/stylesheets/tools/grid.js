/* eslint-disable react/jsx-filename-extension, no-undef */
import styled from 'styled-components';
import React from 'react';

import { grid, maxWidth } from '../settings';
import { mq, px2rem } from './utility';
import getSpace from './spacings';

/**
 * Returns a simple flex container
 * @param {string} width - Set width of container. Default: 100%
 * @param {string} max - Set max-width of container. Default: none
 * @returns {string} Flex container
 * @example ${flexContainer('50%', '1200px')};
 */
export function flexContainer(width = '100%', max) {
  return `
    position: relative;
    display: flex;
    flex-wrap: wrap;
    width: ${width};
    ${max ? `max-width: ${max}` : ''}
  `;
}

/**
 * Sets max-width and centers component
 * @param  {string} max - max-width value, defaults to maxWidth configuration value
 * @return {objects} Resulting styling object
 * @example ${maxContentWidth('1200px')}; returns 'max-width: 1200px; margin-left: auto; margin-right: auto;'
 */
export function maxContentWidth(max = maxWidth) {
  if (typeof max !== 'string') {
    throw new Error('max must be a string');
  }

  return {
    maxWidth: px2rem(max),
    marginLeft: 'auto',
    marginRight: 'auto'
  };
}

/**
 * Get gutter calculation
 * @param {string} columns - containing the columns quantity
 * @param {string} spread - defines the spread of the columns. You can pass "normal", "wide", "spread", "full". Default: "normal"
 * @param {string} parentColumns - defines the columns of the parent container. Default: 12
 * @returns {string} Returns grid calculation and sets styles
 * @example ${useGridSpan(6, 'spread', 9)};
 */
export function useGridSpan(columns, spread = 'normal', parentColumns = 12) {
  // if (columns > grid.columns) {
  //   throw Error(`Maximum columns are ${grid.columns}`);
  // }
  let spreadSize;
  if (spread === 'normal') {
    spreadSize = `${grid.gutters * (columns - 1)}px`;
  } else if (spread === 'wide') {
    spreadSize = `${grid.gutters * (columns - 1) + grid.gutters / 2}px`;
  } else if (spread === 'spread') {
    spreadSize = `${grid.gutters * (columns - 1) + grid.gutters}px`;
  } else if (spread === 'full') {
    spreadSize = `${grid.gutters * (columns - 1) + grid.gutters * 2}px`;
  } else {
    throw Error('You need to pass "narrow", "wide" or "spread" as an argument');
  }

  const innerGaps = `${(grid.columns - 1) * grid.gutters}px`;

  return `
    calc(${px2rem(spreadSize)} + (${100 * (grid.columns / parentColumns)}% - ${px2rem(
    innerGaps
  )}) / ${grid.columns} * ${columns})
  `;
}

/**
 * Get gutter calculation
 * @param {string} property - css property.
 * @param {object} obj - object with different media queries and settings
 * @returns {string} Returns full grid calculation with media queries and sets styles
 * @example ${useGridSpans('width', { s: 12, m: [8, 'spread', 10], l: [6, 'spread', 8] })};
 */
export function useGridSpans(property, obj) {
  if (typeof property !== 'string') {
    throw Error('Property needs to be a string');
  }
  if (typeof obj !== 'object') {
    throw Error('obj needs to be an object with media queries as keys, eg. { s: 12, m: 10, l: 8 }');
  }

  let string = '';

  Object.keys(obj).forEach(key => {
    if (typeof obj[key] === 'number' && obj[key] === 12) {
      string += key === 's' ? `${property}: 100%;` : `${mq(key)} { ${property}: 100%; };`;
      return;
    }

    if (typeof obj[key] === 'number' && obj[key] === 0) {
      string += key === 's' ? `${property}: 0;` : `${mq(key)} { ${property}: 0; };`;
      return;
    }

    if (typeof obj[key] === 'number') {
      string +=
        key === 's'
          ? `${property}: ${useGridSpan(obj[key])};`
          : `${mq(key)} { ${property}: ${useGridSpan(obj[key])}; };`;
      return;
    }

    if (typeof obj[key] === 'object') {
      string +=
        key === 's'
          ? `${property}: ${useGridSpan(obj[key][0], obj[key][1], obj[key][2])};`
          : `${mq(key)} { ${property}: ${useGridSpan(obj[key][0], obj[key][1], obj[key][2])}; };`;
    }
  });

  return string;
}

export function useGridGutter() {
  return `${grid.gutters}px`;
}

export function gridContainer() {
  return ` 
    display: -ms-grid;
    display: grid;
  `;
}

/**
 * Displays a simple debug Grid to show columns and gaps
 * @returns {string} Returns simple debug grid (just use in development)
 * @example <DebugGrid />;
 */
export class DebugGrid extends React.Component {
  static createColumns() {
    const columns = [];
    for (let i = 0; i < grid.columns; i += 1) {
      columns.push(<Column key={i} />);
    }
    return columns;
  }

  constructor(props) {
    super(props);
    this.state = {
      hidden: true
    };

    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', event => this.handleKeyDown(event));
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', event => this.handleKeyDown(event));
  }

  handleKeyDown(event) {
    const { hidden } = this.state;

    if (event.code === 'KeyG') {
      this.setState({
        hidden: !hidden
      });
    }
  }

  render() {
    const { hidden } = this.state;

    return (
      <DebugGridContainer className={hidden ? 'hidden' : ''}>
        {DebugGrid.createColumns()}
      </DebugGridContainer>
    );
  }
}

const DebugGridContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  white-space: nowrap;

  &.hidden {
    display: none;
  }
`;

const Column = styled.span`
  position: relative;
  display: inline-block;
  width: calc((100% - 6.875rem) / ${grid.columns});
  height: 100%;
  background: ${grid.debugColors ? grid.debugColors : 'rgba(255,255,0,0.5)'};
  margin-right: ${getSpace(`${grid.gutters}px`)};

  &:last-of-type {
    margin-right: 0;
  }
`;
