/* jshint ignore:start */

import React from 'react'

class ListItem extends React.Component {

    render() {
        // changes API to be accurate to actual skate parks
        // learned to add conditional logic in render()
        // from: https://reactjs.org/docs/conditional-rendering.html
        let name;
        if (this.props.venue.name === "Great Skate") {
            name = "Youth Activity Park"
        } else if (this.props.venue.name === "Plannine") {
            name = "Peter Mathews Memorial Skate Garden"
        } else if (this.props.venue.name === "Plan Nine Skate Park") {
            name = "Ramp Riders"
        } else if (this.props.venue.name === "Plannine Skatepark") {
            name = "Earth Surf"
        } else if (this.props.venue.name === "Plan Nine Skatepark" || this.props.venue.name === "Arch Rival Roller Girls' Roller Derby") {
            return null;
        } else {
            name = this.props.venue.name
        }

        return (
            <div className="parkButtons">
                <li
                    className="listItem"
                    aria-label={name}
                    onClick={() => this.props.handleListItemClick(this.props)}
                >
                    {name}
                </li>
            </div>
        );
    }
}

export default ListItem;

/* designed based on: https://www.youtube.com/watch?v=lDVaZY0aG2w&index=7&list=PL4rQq4MQP1crXuPtruu_eijgOUUXhcUCP&t=0s */