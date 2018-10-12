/* Google Maps API designed using: */
/* https://www.youtube.com/watch?v=W5LhLZqj76s */

/* Google Markers designed using: */
/* https://www.youtube.com/watch?v=nDJ00zO9X2U&list=PLgOB68PvvmWCGNn8UMTpcfQEiITzxEEA1&index=4 */

/* jshint esnext: true */
/* jshint ignore:start */

import './App.css'
import React, { Component } from 'react'

import axios from 'axios'

class App extends Component {

  componentDidMount() {
    this.renderMap()
  }

  renderMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyAeCKdS_7fB9UBZ1qaVUw8BRLl5VCuTzCY&v=3&callback=initMap")
    window.initMap = this.initMap
  }

  getVenues = () => {
    const endPoint = "https://api.foursquare.com/v2/venues/explore"
    const parameters = {
      client_id: "",
      client_secret: "",
      query: "skate park",
      near: "St. Charles, MO"
    }
  }

  initMap = () => {
    /* Constructor creates a new map - only center and zoom are required. */
    var map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: 38.788105, lng: -90.497437 },
      zoom: 13,
    })
  }


    render() {
      return (
        <main>
          <div id="map"></div>
        </main>
      )
    }
  }

/* plain JavaScript code to load the <script> that renders the map */
function loadScript(url) {
  var index = window.document.getElementsByTagName("script")[0]
  var script = window.document.createElement("script")
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
}

export default App;