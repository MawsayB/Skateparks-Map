/* jshint ignore:start */

import React from 'react'

class ListItem extends React.Component {

    filterParkNames = () => {

        this.props.venue.forEach(myVenue => {

            var name

            // changes API to be accurate to actual skate parks
            if (this.props.venue.name === "Great Skate") {
                name = "Youth Activity Park"
            } else if (this.props.venue.name === "Plannine") {
                name = "Peter Mathews Memorial Skate Garden"
            } else if (this.props.venue.name === "Plan Nine Skate Park") {
                name = "Ramp Riders"
            } else if (this.props.venue.name === "Plannine Skatepark") {
                name = "Earth Surf"
            } else if (this.props.venue.name === "Plan Nine Skatepark" || myVenue.venue.name === "Arch Rival Roller Girls' Roller Derby") {
                return;
            } else {
                name = this.props.venue.name
            }

            document.getElementById('listItem').innerHTML = `${name}`
        })
    }

    render() {
        return (
            <li className="listItem">
                {this.props.venue.name}
                {/* {this.props.filterParkNames} */}
            </li>
        );
    }
}

export default ListItem;

/* designed based on: https://www.youtube.com/watch?v=lDVaZY0aG2w&index=7&list=PL4rQq4MQP1crXuPtruu_eijgOUUXhcUCP&t=0s */