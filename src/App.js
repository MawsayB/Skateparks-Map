/* Google Maps API designed using: */
/* https://www.npmjs.com/package/google-maps-react */

/* jshint esnext: true */
/* jshint ignore:start */

import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Map
          google={this.props.google}
          zoom={15}
          initialCenter={{
            lat: 38.788105, lng: -90.497437
          }}
          onClick={this.onMapClicked}
        >
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyAeCKdS_7fB9UBZ1qaVUw8BRLl5VCuTzCY')
})(App)