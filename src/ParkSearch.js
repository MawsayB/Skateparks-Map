/* jshint ignore:start */

import React from 'react'
import VenueList from './VenueList'
import $ from 'jquery'; 

class ParkSearch extends React.Component {

    constructor() {
        super();
        this.state = {
            query: "",
            storeVenuesOnList: []
        }
    }

    componentDidMount = () => {
        var storeVenuesOnList = document.getElementsByClassName("listItem")
        console.log(storeVenuesOnList)
        console.log("The list has been generated")
        this.setState({storeVenuesOnList: storeVenuesOnList})
    }

    handleChange = e => {
        this.setState({ query: e.target.value })
        var venuesAvailable = this.state.storeVenuesOnList
    }

    //     const markers = this.props.venues.map(marker => {
    //         const isMatched = venue.name.toLowerCase().includes(e.target.value.toLowerCase())
    //         const marker = this.props.markers.find(marker => marker.id === venue.id)
    //         if (isMatched) {
    //             marker.isVisible = true
    //         } else {
    //             marker.isVisible = false
    //         }
    //         return marker
    //     })
    // }

    // 1. get the text searched
    // 2. compare it to the text on the venue buttons
    // 3. turn off buttons AND markers that don't match OR change border on those venue(s)
    // 4. when cleared undo change

    render() {
        return (
            <div className="search">
                <div id="input-box" role="textbox">
                    <label id="search-label">
                        Search:
                    <input
                            type={"search"}
                            id={"search"}
                            placeholder={"filter parks"}
                        />
                    </label>
                </div>
                <VenueList className="clickable-park-name" {...this.props} handleListItemClick={this.props.handleListItemClick} />
            </div>
        );
    }
}

export default ParkSearch;

/* designed based on: https://www.youtube.com/watch?v=lDVaZY0aG2w&index=7&list=PL4rQq4MQP1crXuPtruu_eijgOUUXhcUCP&t=0s */