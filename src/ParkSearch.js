/* jshint ignore:start */

import React from 'react'
import VenueList from './VenueList'

class ParkSearch extends React.Component {

    // constructor() {
    //     super()
    //     this.state = {
    //         query: ""
    //     }
    // }

    // handleFilterVenues = () => {

    // }

    // handleChange = e => {
    //     this.setState({query: e.target.value})
    //     const markers = this.props.venues.map(marker => {
    //         const isMatched = venue.name.toLowerCase().includes(e.target.value.toLowerCase())
    //         const marker = this.props.markers.find(marker => marker.id === venue.id)
    //         if(isMatched) {
    //             marker.isVisible = true
    //         } else {
    //             marker.isVisible = false
    //         }
    //         return marker
    //     })
    // }

    render() {
        return (
            <div className="search">
                <div id="input-box">
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