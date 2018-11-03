/* jshint ignore:start */

import React from 'react'
import ListItem from './ListItem'
import Dropdown from 'react-dropdown'

class VenueDropDown extends React.Component {

    // 1. add drop down menu
    // 2. add venues to menu
    // 3. when selected:
    //    A. remove all other parks from the button list
    //    B. remove all markers but that location

    render() {
        const options = [
            { value: 'E', label: 'Earth Surf' },
            { value: 'F', label: 'Fountain Lakes Park' },
            { value: 'P', label: 'Peter Mathews Memorial Skate Garden' },
            { value: 'R', label: 'Ramp Riders' },
            { value: 'W', label: 'Westoff Plaza Skate Park' },
            { value: 'Y', label: 'Youth Activity Park' }
          ]
        return (
            <Dropdown
                className="dropdown"
                placeholder="Pick a Park"
                options={options}
            />
        );
    }
}

export default VenueDropDown;