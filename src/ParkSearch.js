/* jshint ignore:start */

import React from 'react'
import VenueList from './VenueList'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

class ParkSearch extends React.Component {

    // 1. add drop down menu
    // 2. add venues to menu
    // 3. when selected:
    //    A. remove all other parks from the button list
    //    B. remove all markers but that location

    render() {
        return (
            <div className="search">
                <div className="dropdown-container">
                    <Dropdown
                        className="dropdown"
                        placeholder="Pick a Park"
                    />
                </div>
                <VenueList
                    onChange={event => this.updateInputValue(event)}
                    className="clickable-park-name"
                    {...this.props}
                    handleListItemClick={this.props.handleListItemClick} />
            </div>
        );
    }
}

export default ParkSearch;

/* resources used:
https://www.youtube.com/watch?v=lDVaZY0aG2w&index=7&list=PL4rQq4MQP1crXuPtruu_eijgOUUXhcUCP&t=0s 
https://stackoverflow.com/questions/36683770/how-to-get-the-value-of-an-input-field-using-reactjs
https://reactjs.org/docs/handling-events.html */