/* jshint esnext: true */
/* jshint ignore:start */

import React, { Component } from 'react';
import {Map} from './Map';
import {GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends React.Component {
  render() {
    const style = {
      width: '100vw',
      height: '100vh'
    }
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }
    return (
      <div style={style}>
        <Map google={this.props.google}
          />
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAeCKdS_7fB9UBZ1qaVUw8BRLl5VCuTzCY'
})(MapContainer)