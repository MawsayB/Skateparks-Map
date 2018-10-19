/* Google Maps API, FourSquare API, markers and InfoWindows designed using: */
/* https://www.youtube.com/watch?v=ywdxLNjhBYw&list=PLgOB68PvvmWCGNn8UMTpcfQEiITzxEEA1 */

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
      // for whatever reason, FourSquare views venues for skateboard or rolling skating as "Skate Parks"
      categoryId: "4bf58dd8d48988d167941735",

      // sets Lat Long to St. Charles Missouri
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
      center: { lat: 38.8405, lng: -90.4691 },
      zoom: 11,
    })

    // creates InfoWindows
    var infowindow = new window.google.maps.InfoWindow()

    // displays dynamic markers from FourSquare API
    this.state.venues.forEach(myVenue => {

      // filters API to be show correct address for Earth Surf
      var address
      var name
      var city
      var state  
      var postalCode
      // var lat;
      // var lng;

      // filters API to be accurate to actual skate parks

      // if (myVenue.venue.name === "Plan Nine Skate Park") {
      //   return;
      // } else if (myVenue.venue.name === "Plan Nine Skatepark") {
      //   return;
      // } else if (myVenue.venue.name === "Arch Rival Roller Girls' Roller Derby") {
      //   return;
      // } else if (myVenue.venue.name === "Plannine") {
      //   name = "Earth Surf"
      if (myVenue.venue.name === "Westhoff Plaza Skate Park") {
        address = "810 Sheppard Drive"
        name = myVenue.venue.name
        city = myVenue.venue.location.city
        state = myVenue.venue.location.state
        postalCode = myVenue.venue.location.postalCode
      } else if (myVenue.venue.name === "Fountain Lakes Park") {
        address = "3850 Huster Road"
        name = myVenue.venue.name
        city = myVenue.venue.location.city
        state = myVenue.venue.location.state
        postalCode = myVenue.venue.location.postalCode
      } else if (myVenue.venue.name === "Great Skate") {
        name = "Youth Activity Park"
        address = "7801 State Highway N"
        city = "Dardenne Prairie"
        state = "MO"
        postalCode = "63368"
      } else if (myVenue.venue.name === "Plannine") {
        name = "Peter Mathews Memorial Skate Garden"
        address = "4415 Morganford Road"
        city = "St. Louis"
        state = "MO"
        postalCode = "63116"
      } else if (myVenue.venue.name === "Plan Nine Skate Park") {
        name = "Ramp Riders"
        address = " 2324 Salena Street"
        city = "St. Louis"
        state = "MO"
        postalCode = "63104"
      } else if (myVenue.venue.name === "Plannine Skatepark") {
        name = "Earth Surf"
        address = "5555 St.Louis Mills Blvd #373"
        city = myVenue.venue.location.city
        state = myVenue.venue.location.state
        postalCode = myVenue.venue.location.postalCode
      } else if (myVenue.venue.name === "Plan Nine Skatepark") {
        return;
      } else {
        address = myVenue.venue.address
        name = myVenue.venue.name
        city = myVenue.venue.location.city
        state = myVenue.venue.location.state
        postalCode = myVenue.venue.location.postalCode
      }

      // TODO: add photo(s) and link to the directions
      var contentString = `<div><strong>${name} </strong><br/> 
      ${address} <br/>
      ${city}, ${state} ${postalCode}</div>`

      // creates markers
      var marker = new window.google.maps.Marker({
        position: { lat: myVenue.venue.location.lat, lng: myVenue.venue.location.lng },
        map: map,
        title: name,
        icon: 'https://png.icons8.com/ios/50/000000/skateboard.png'
      })


      // click on a marker
      marker.addListener('click', function () {
        // change the content
        infowindow.setContent(contentString)

        // adds event listener to marker to display InfoWindow
        infowindow.open(map, marker);
      });

    })

  }

  // inside Return, put a link to the Facebook Group
  render() {
    return (
      <main>
        <div className="input">
          <input
            type="text"
            placeholder="Search"
            value={this.state.query}
            onChange={(event) => this.updateQuery(event.target.value)}
          />
        </div>
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