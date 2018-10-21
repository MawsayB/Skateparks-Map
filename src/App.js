/* Google Maps API, FourSquare API, markers and InfoWindows designed using: */
/* https://www.youtube.com/watch?v=ywdxLNjhBYw&list=PLgOB68PvvmWCGNn8UMTpcfQEiITzxEEA1 */

/* jshint esnext: true */
/* jshint ignore:start */

import './App.css'
import React, { Component } from 'react'
import Flexbox from 'flexbox-react'

import axios from 'axios'

class App extends Component {

  state = {
    venues: []
  }

  componentDidMount() {
    this.getFourSquareVenues()
  }

  renderMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyAeCKdS_7fB9UBZ1qaVUw8BRLl5VCuTzCY&v=3&callback=initMap")
    window.initMap = this.initMap
  }

  /* sets up information to start working with axios */
  getFourSquareVenues = () => {
    const endPoint = "https://api.foursquare.com/v2/venues/explore?"
    const parameters = {
      client_id: "CR3PE52H5QB3PEC1BPB3HQP4L3PW4WJDEPZSWQKTFBZAQSEI",
      client_secret: "HJ50REDCZPOXURIFJTJN3T0I2MYVM5YG11ZRIHC4ABTDB4MO",
      // categoryId = Skate Park
      // for whatever reason, FourSquare views venues for "skateboard" or "rolling skating" as "Skate Parks"
      // when there IS a category exclusively for roller skating rinks :shrugs:
      categoryId: "4bf58dd8d48988d167941735",

      // sets Lat Long to Maryland Heights, Missouri
      ll: "38.788105, -90.497437",
      // sets version of FourSquare API
      v: "20182507"
    }

    axios.get(endPoint + new URLSearchParams(parameters))
      .then(response => {
        this.setState({
          // stores places in a state called 'venues'
          venues: response.data.response.groups[0].items,
        }, this.renderMap())
      })
      .catch(error => {
        console.log("Error! " + error)
      })
  }

  initMap = () => {
    /* Constructor creates a new map - only center and zoom are required. */
    var map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: 38.7131, lng: -90.4298 },
      zoom: 10,
    })

    // creates InfoWindows
    var infowindow = new window.google.maps.InfoWindow()

    // displays dynamic markers from FourSquare API
    this.state.venues.forEach(myVenue => {

      var address
      var name
      var city
      var state
      var postalCode
      var lat;
      var lng;

      // changes API to be accurate to actual skate parks

      if (myVenue.venue.name === "Westhoff Plaza Skate Park") {
        address = "810 Sheppard Drive"
        name = myVenue.venue.name
        city = myVenue.venue.location.city
        state = myVenue.venue.location.state
        postalCode = myVenue.venue.location.postalCode
        lat = myVenue.venue.location.lat
        lng = myVenue.venue.location.lng
      } else if (myVenue.venue.name === "Fountain Lakes Park") {
        address = "3850 Huster Road"
        name = myVenue.venue.name
        city = myVenue.venue.location.city
        state = myVenue.venue.location.state
        postalCode = myVenue.venue.location.postalCode
        lat = myVenue.venue.location.lat
        lng = myVenue.venue.location.lng
      } else if (myVenue.venue.name === "Great Skate") {
        name = "Youth Activity Park"
        address = "7801 State Highway N"
        city = "Dardenne Prairie"
        state = "MO"
        postalCode = "63368"
        lat = 38.769270
        lng = -90.763520
      } else if (myVenue.venue.name === "Plannine") {
        name = "Peter Mathews Memorial Skate Garden"
        address = "4415 Morganford Road"
        city = "St. Louis"
        state = "MO"
        postalCode = "63116"
        lat = 38.588140
        lng = -90.265200
      } else if (myVenue.venue.name === "Plan Nine Skate Park") {
        name = "Ramp Riders"
        address = " 2324 Salena Street"
        city = "St. Louis"
        state = "MO"
        postalCode = "63104"
        lat = 38.606860
        lng = -90.216380
      } else if (myVenue.venue.name === "Plannine Skatepark") {
        name = "Earth Surf"
        address = "5555 St.Louis Mills Blvd #373"
        city = myVenue.venue.location.city
        state = myVenue.venue.location.state
        postalCode = myVenue.venue.location.postalCode
        lat = myVenue.venue.location.lat
        lng = myVenue.venue.location.lng
      } else if (myVenue.venue.name === "Plan Nine Skatepark" || myVenue.venue.name === "Arch Rival Roller Girls' Roller Derby") {
        return;
      } else {
        address = myVenue.venue.address
        name = myVenue.venue.name
        city = myVenue.venue.location.city
        state = myVenue.venue.location.state
        postalCode = myVenue.venue.location.postalCode
        lat = myVenue.venue.location.lat
        lng = myVenue.venue.location.lng
      }

      var contentString = `${name}<br/> 
      ${address} <br/>
      ${city}, ${state} ${postalCode}`

      var hallowIcon = 'https://png.icons8.com/ios/50/000000/skateboard.png'
      var selectedIcon = 'https://png.icons8.com/ios/50/000000/skateboard-filled.png'

      // creates markers
      var marker = new window.google.maps.Marker({
        position: { lat: lat, lng: lng },
        map: map,
        title: name,
        animation: window.google.maps.Animation.DROP,
        icon: hallowIcon
      })

      // click on a marker
      window.google.maps.event.addListener(marker, 'click', function () {
        // change the content
        infowindow.setContent(contentString)
        // adds event listener to marker to display InfoWindow
        infowindow.open(map, marker)
      });

      window.google.maps.event.addListener(marker, 'mouseover', function () {
        // change the icon
        marker.setIcon(selectedIcon)
      });

      // source for setting and re-setting marker icon:
      // https://stackoverflow.com/questions/11971326/how-to-tell-if-a-google-map-marker-is-currently-selected

      window.google.maps.event.addListener(marker, 'mouseout', function () {
        //  this overwrites the image again, 
        this.setIcon(hallowIcon);
      });

    })
  }

  render() {
    return (
      <Flexbox flexDirection="column" minHeight="100vh">
        <Flexbox element="section" id="searchPanel" width="100%">
          <h1>SKATE PARKS</h1>
          <input
            type="text"
            placeholder="Search"
            value={this.state.query}
            onChange={(event) => this.updateQuery(event.target.value)}
          />
        </Flexbox>
        <Flexbox element="section" id="map" height="100vh" width="100%">
        </Flexbox>
      </Flexbox>
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