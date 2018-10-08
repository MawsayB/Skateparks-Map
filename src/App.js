/* Google Maps API designed using: */
/* https://www.fullstackreact.com/articles/how-to-write-a-google-maps-react-component/#the-map-container-component */

/* jshint esnext: true */
/* jshint ignore:start */

import React, { Component } from 'react';
import Map from './Map';
import MapContainer from './MapContainer';

class App extends Component {
  render() {
    return (
      <div class="container">
        {/* TODO: where Search will go */}
        <div class="options-box">
          <h1>Wanna Skateboard?</h1>
        </div>
        <MapContainer />
      </div>
    );
  }
}

export default App;
