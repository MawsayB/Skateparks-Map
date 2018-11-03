/* jshint ignore:start */

import React from 'react'
import VenueList from './VenueList'
import 'react-dropdown/style.css'
import VenueDropDown from './VenueDropDown';

class ParkSearch extends React.Component {

    render() {
        return (
            <div className="search">
                <div className="dropdown-container">
                    <VenueDropDown
                        {...this.props}
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