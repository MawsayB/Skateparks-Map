/* jshint ignore:start */

import React from 'react'
import ListItem from './ListItem'

class VenueList extends React.Component {

    // creates the list of clickable skateparks in the menu

    render() {
        return (
            <ul className="venue-list" tabIndex="2">
                {this.props.venues && this.props.venues.map((venue, index) =>
                <ListItem id="button" key={index} {...venue} handleListItemClick={this.props.handleListItemClick} />)}
            </ul>
        );
    }
}

export default VenueList;

/* designed based on: https://www.youtube.com/watch?v=lDVaZY0aG2w&index=7&list=PL4rQq4MQP1crXuPtruu_eijgOUUXhcUCP&t=0s */