/* jshint ignore:start */

import React, { Component } from 'react'
import ListItem from './ListItem'

class VenueList extends React.Component {

    // // creates the list of clickable skateparks in the menu
    // document.getElementById('clickable-park-list').innerHTML = `<div id="park-names">${name

    render() {
        return (
            <ol className="venue-list">
                {this.props.venues && this.props.venues.map((venue, index) =>
                <ListItem key={index} {...venue} />)}
            </ol>
        );
    }
}

export default VenueList;

/* designed based on: https://www.youtube.com/watch?v=lDVaZY0aG2w&index=7&list=PL4rQq4MQP1crXuPtruu_eijgOUUXhcUCP&t=0s */