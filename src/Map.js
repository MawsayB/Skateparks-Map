/* jshint esnext: true */
/* jshint ignore:start */

import React, { Component } from 'react';

export class Map extends React.Component {
    renderChildren() {
      // ...
    }
  
    render() {
      return (
        <div ref='map'>
          Loading map...
          {this.renderChildren()}
        </div>
      )
    }
  }