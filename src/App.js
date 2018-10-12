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

  state = {
    venues: []
  }

  componentDidMount() {
    this.getVenues()
    this.renderMap()
  }

  renderMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyAeCKdS_7fB9UBZ1qaVUw8BRLl5VCuTzCY&v=3&callback=initMap")
    window.initMap = this.initMap
  }

  /* sets up information to start working with axios */
  getVenues = () => {
    const endPoint = "https://api.foursquare.com/v2/venues/explore?"
    const parameters = {
      client_id: "CR3PE52H5QB3PEC1BPB3HQP4L3PW4WJDEPZSWQKTFBZAQSEI",
      client_secret: "HJ50REDCZPOXURIFJTJN3T0I2MYVM5YG11ZRIHC4ABTDB4MO",
      query: "skate park",
      near: "St Charles, MO",
      v: "20182507"
    }

    axios.get(endPoint + new URLSearchParams(parameters))
    .then(response => {
      this.setState({
        // stores places in a state called 'venues'
        venues: response.data.response.groups[0].items
      })
      console.log()
    })
    .catch(error => {
      console.log("Error! " + error)
    })
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