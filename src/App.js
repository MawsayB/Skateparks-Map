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
      center: { lat: 38.6270, lng: -90.1994 },
      zoom: 9,
    })

    // creates InfoWindows
    var infowindow = new window.google.maps.InfoWindow()

    // displays dynamic markers from FourSquare API
    this.state.venues.forEach(myVenue => {

      var address;
      if (myVenue.venue.location.address === undefined) {
        return;
      } else if (myVenue.venue.location.address === "3894-3994 Huster Rd") {
        address = "3740 Huster Road";
      } else {
        address = myVenue.venue.location.address;
      }

      // filters API to be accurate to actual skate parks
      var name;
      if (myVenue.venue.name === "Plan Nine Skate Park") {
        return;
      } else if (myVenue.venue.name === "Plan Nine Skatepark") {
        return;
      } else if (myVenue.venue.name === "Arch Rival Roller Girls' Roller Derby") {
        return;
      } else if (myVenue.venue.name === "Plannine") {
        name = "Earth Surf"
      } else if (myVenue.venue.name === "Great Skate") {
        return;
      } else {
        name = myVenue.venue.name;
      }

      var contentString = `<div><strong>${name} </strong><br/> 
      ${address} <br/>
      ${myVenue.venue.location.city}, ${myVenue.venue.location.state} ${myVenue.venue.location.postalCode}</div>`

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