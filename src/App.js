/* Google Maps API, FourSquare API, markers and InfoWindows designed using: */
/* https://www.youtube.com/watch?v=ywdxLNjhBYw&list=PLgOB68PvvmWCGNn8UMTpcfQEiITzxEEA1 */

/* jshint esnext: true */
/* jshint ignore:start */

import './App.css'
import React, { Component } from 'react'
import Flexbox from 'flexbox-react'

import axios from 'axios'
import ParkSearch from './ParkSearch';

class App extends Component {

  constructor() {
    super();
    this.infowindow = []
    this.state = {
      venues: [],
      map: 0
    }
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
        alert("Error! " + error)
      })
  }

  handleVenueDropDownSelection = () => {
    
  }

  handleListItemClick = (venue, marker) => {
    //locates the venue in the array that matches the venue selected    

    // parkID is the ID of the selected parkName
    const parkID = venue.venue.id
    // the venues array
    const allVenues = this.state.venues
    // the single venue's ID that matches the ID of the park clicked
    const theOne = allVenues.find(theSingleVenue => theSingleVenue.venue.id === parkID)

    // if the IDs match, create a new infowindow for the venue
    const myVenue = venue
    if (theOne) {

      var address
      var name
      var city
      var stateAbbreviation
      var postalCode
      var lat
      var lng
      var image

      // changes API to be accurate to actual skate parks
      if (myVenue.venue.name === "Westhoff Plaza Skate Park") {
        address = "810 Sheppard Drive"
        name = myVenue.venue.name
        city = myVenue.venue.location.city
        stateAbbreviation = myVenue.venue.location.state
        postalCode = myVenue.venue.location.postalCode
        lat = myVenue.venue.location.lat
        lng = myVenue.venue.location.lng
        image = `<img src="http://img.archiexpo.com/images_ae/photo-g/63739-6575611.jpg" alt="Westhoff Plaza Skate Park" width="200">`
      } else if (myVenue.venue.name === "Fountain Lakes Park") {
        address = "3850 Huster Road"
        name = myVenue.venue.name
        city = myVenue.venue.location.city
        stateAbbreviation = myVenue.venue.location.state
        postalCode = myVenue.venue.location.postalCode
        lat = myVenue.venue.location.lat
        lng = myVenue.venue.location.lng
        image = `<img src="https://media2.fdncms.com/riverfronttimes/imager/u/original/2951887/9285567.0.jpg" alt="Fountain Lakes Park" width="200">`
      } else if (myVenue.venue.name === "Great Skate") {
        name = "Youth Activity Park"
        address = "7801 State Highway N"
        city = "Dardenne Prairie"
        stateAbbreviation = "MO"
        postalCode = "63368"
        lat = 38.769270
        lng = -90.763520
        image = `<img src="https://www.sccmo.org/ImageRepository/Path?filePath=%2Fdocuments%5CIntranet%5C120%5C449%2FYAP-Skate-Park_201503031310548809.jpg" alt="Youth Activity Park" width="200">`
      } else if (myVenue.venue.name === "Plannine") {
        name = "Peter Mathews Memorial Skate Garden"
        address = "4415 Morganford Road"
        city = "St. Louis"
        stateAbbreviation = "MO"
        postalCode = "63116"
        lat = 38.588140
        lng = -90.265200
        image = `<img src="http://northwestskater.com/stlouismorganford1400C72216.jpg" alt="Peter Mathews Memorial Skate Garden" width="200">`
      } else if (myVenue.venue.name === "Plan Nine Skate Park") {
        name = "Ramp Riders"
        address = " 2324 Salena Street"
        city = "St. Louis"
        stateAbbreviation = "MO"
        postalCode = "63104"
        lat = 38.606860
        lng = -90.216380
        image = `<img src="https://media1.fdncms.com/riverfronttimes/imager/u/zoom/2953307/9320479.0.jpg" alt="Ramp Riders" width="200">`
      } else if (myVenue.venue.name === "Plannine Skatepark") {
        name = "Earth Surf"
        address = "5555 St.Louis Mills Blvd #373"
        city = myVenue.venue.location.city
        stateAbbreviation = myVenue.venue.location.state
        postalCode = myVenue.venue.location.postalCode
        lat = myVenue.venue.location.lat
        lng = myVenue.venue.location.lng
        image = `<img src="https://cdn.patchcdn.com/users/337596/2012/06/T800x600/8e3da7a68c867dcf76a4b7346955a257.jpg" alt="Earth Surf" width="200">`
      } else if (myVenue.venue.name === "Plan Nine Skatepark" || myVenue.venue.name === "Arch Rival Roller Girls' Roller Derby") {
        return;
      } else {
        address = myVenue.venue.address
        name = myVenue.venue.name
        city = myVenue.venue.location.city
        stateAbbreviation = myVenue.venue.location.state
        postalCode = myVenue.venue.location.postalCode
        lat = myVenue.venue.location.lat
        lng = myVenue.venue.location.lng
        image = "picture coming soon"
      }

      var contentString = `<div id="popup-image">${image}</div> <div id=popup-text><div id="popup"> ${name}</div><br/> 
      ${address} <br/>
      ${city}, ${stateAbbreviation} ${postalCode}<br/><br/><a href="http://localhost:3000/">Back to Main</a></div></div>`

      var infowindow = new window.google.maps.InfoWindow()
      infowindow.setContent(contentString)
      infowindow.setPosition({ lat: lat, lng: lng })
      this.state.map.panTo({ lat: lat, lng: lng })
      infowindow.setOptions({ pixelOffset: { height: -40, width: 0 } })
      infowindow.open(this.state.map)
      // zooms to the marker of interest
      this.state.map.setZoom(15)
    }

    // overall concept taken from: https://www.youtube.com/watch?v=lDVaZY0aG2w&index=7&list=PL4rQq4MQP1crXuPtruu_eijgOUUXhcUCP&t=0s
  }

  initMap = () => {
    /* Constructor creates a new map - only center and zoom are required. */

    let markers = []
    // zooms in for an iPhone
    var zoom;
    if (window.innerHeight > 600) {
      zoom = 10;
    } else {
      zoom = 8;
    }

    var center;
    if (window.innerHeight > 600) {
      center = { lat: 38.7892, lng: -90.3226 }
    } else {
      center = { lat: 38.7881, lng: -90.4974 }
    }

    var map = new window.google.maps.Map(document.getElementById('map'), {
      center: center,
      zoom: zoom
    })
    this.setState({ map: map })

    // creates InfoWindows
    var infowindow = new window.google.maps.InfoWindow()

    // displays dynamic markers from FourSquare API
    this.state.venues.forEach(myVenue => {

      var address
      var name
      var city
      var stateAbbreviation
      var postalCode
      var lat
      var lng
      var image

      // changes API to be accurate to actual skate parks
      if (myVenue.venue.name === "Westhoff Plaza Skate Park") {
        address = "810 Sheppard Drive"
        name = myVenue.venue.name
        city = myVenue.venue.location.city
        stateAbbreviation = myVenue.venue.location.state
        postalCode = myVenue.venue.location.postalCode
        lat = myVenue.venue.location.lat
        lng = myVenue.venue.location.lng
        image = `<img src="http://img.archiexpo.com/images_ae/photo-g/63739-6575611.jpg" alt="Westhoff Plaza Skate Park" width="200">`
      } else if (myVenue.venue.name === "Fountain Lakes Park") {
        address = "3850 Huster Road"
        name = myVenue.venue.name
        city = myVenue.venue.location.city
        stateAbbreviation = myVenue.venue.location.state
        postalCode = myVenue.venue.location.postalCode
        lat = myVenue.venue.location.lat
        lng = myVenue.venue.location.lng
        image = `<img src="https://media2.fdncms.com/riverfronttimes/imager/u/original/2951887/9285567.0.jpg" alt="Fountain Lakes Park" width="200">`
      } else if (myVenue.venue.name === "Great Skate") {
        name = "Youth Activity Park"
        address = "7801 State Highway N"
        city = "Dardenne Prairie"
        stateAbbreviation = "MO"
        postalCode = "63368"
        lat = 38.769270
        lng = -90.763520
        image = `<img src="https://www.sccmo.org/ImageRepository/Path?filePath=%2Fdocuments%5CIntranet%5C120%5C449%2FYAP-Skate-Park_201503031310548809.jpg" alt="Youth Activity Park" width="200">`
      } else if (myVenue.venue.name === "Plannine") {
        name = "Peter Mathews Memorial Skate Garden"
        address = "4415 Morganford Road"
        city = "St. Louis"
        stateAbbreviation = "MO"
        postalCode = "63116"
        lat = 38.588140
        lng = -90.265200
        image = `<img src="http://northwestskater.com/stlouismorganford1400C72216.jpg" alt="Peter Mathews Memorial Skate Garden" width="200">`
      } else if (myVenue.venue.name === "Plan Nine Skate Park") {
        name = "Ramp Riders"
        address = " 2324 Salena Street"
        city = "St. Louis"
        stateAbbreviation = "MO"
        postalCode = "63104"
        lat = 38.606860
        lng = -90.216380
        image = `<img src="https://media1.fdncms.com/riverfronttimes/imager/u/zoom/2953307/9320479.0.jpg" alt="Ramp Riders" width="200">`
      } else if (myVenue.venue.name === "Plannine Skatepark") {
        name = "Earth Surf"
        address = "5555 St.Louis Mills Blvd #373"
        city = myVenue.venue.location.city
        stateAbbreviation = myVenue.venue.location.state
        postalCode = myVenue.venue.location.postalCode
        lat = myVenue.venue.location.lat
        lng = myVenue.venue.location.lng
        image = `<img src="https://cdn.patchcdn.com/users/337596/2012/06/T800x600/8e3da7a68c867dcf76a4b7346955a257.jpg" alt="Earth Surf" width="200">`
      } else if (myVenue.venue.name === "Plan Nine Skatepark" || myVenue.venue.name === "Arch Rival Roller Girls' Roller Derby") {
        return;
      } else {
        address = myVenue.venue.address
        name = myVenue.venue.name
        city = myVenue.venue.location.city
        stateAbbreviation = myVenue.venue.location.state
        postalCode = myVenue.venue.location.postalCode
        lat = myVenue.venue.location.lat
        lng = myVenue.venue.location.lng
        image = "picture coming soon"
      }

      var contentString = `<div id="popup-image">${image}</div> <div id=popup-text><div id="popup"> ${name}</div><br/> 
      ${address} <br/>
      ${city}, ${stateAbbreviation} ${postalCode}<br/><br/><a href="http://localhost:3000/">Back to Main</a></div></div>`

      var hallowIcon = 'https://png.icons8.com/ios/50/000000/skateboard.png'
      var selectedIcon = 'https://png.icons8.com/ios/50/000000/skateboard-filled.png'

      // creates markers
      var marker = new window.google.maps.Marker({
        position: { lat: lat, lng: lng },
        map: map,
        title: name,
        animation: window.google.maps.Animation.DROP,
        icon: hallowIcon,
      })
      this.setState({ marker: markers })
      console.log(markers)

      window.google.maps.event.addListener(map, 'center_changed', function () {
        marker.setAnimation(window.google.maps.Animation.BOUNCE)
      });

      // click on a marker
      window.google.maps.event.addListener(marker, 'click', function () {
        marker.setAnimation(window.google.maps.Animation.BOUNCE)
        // change the content
        infowindow.setContent(contentString)
        // adds event listener to marker to display InfoWindow
        infowindow.open(map, marker)
        // zooms to the marker of interest
        map.setZoom(15)
        map.setCenter(marker.getPosition())
        // taken from: https://developers.google.com/maps/documentation/javascript/examples/event-simple
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
          <div id="top-section">
            <div id="search-bar">
              <h1 tabIndex="1">SKATE PARKS - ST. LOUIS, MISSOURI</h1>
              <a href="http://localhost:3000/" className="refresh-button" tabIndex="2">Revert Map</a>
            </div>
            <div id="park-names">
              <ParkSearch {... this.state} handleListItemClick={this.handleListItemClick} />
            </div>
          </div>
        </Flexbox>
        <Flexbox element="section" tabIndex="5" id="map" height="100vh" width="100%">
        </Flexbox>
      </Flexbox>
    )
  }
}

/* plain JavaScript code to load the <script> that renders the map */
function loadScript(url) {
  var index = window.document.getElementsByTagName("script")[0]
  var script = window.document.createElement("script")
  // TODO: add message to user about resource loading error
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
}

export default App;