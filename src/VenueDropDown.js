/* jshint ignore:start */

import React from 'react'
import Dropdown from 'react-dropdown'

class VenueDropDown extends React.Component {

    onChange(options) {
        // grabs the index of the value selected
        const clickedIndex = options.value[0]
        // keeps only that index in the buttons
        if (clickedIndex === "0") {
            document.getElementsByClassName('listItem')[1].style.visibility = 'hidden'
            document.getElementsByClassName('listItem')[2].style.visibility = 'hidden'
            document.getElementsByClassName('listItem')[3].style.visibility = 'hidden'
            document.getElementsByClassName('listItem')[4].style.visibility = 'hidden'
            document.getElementsByClassName('listItem')[5].style.visibility = 'hidden'
        } else if (clickedIndex === "1") {
            document.getElementsByClassName('listItem')[0].style.visibility = 'hidden'
            document.getElementsByClassName('listItem')[2].style.visibility = 'hidden'
            document.getElementsByClassName('listItem')[3].style.visibility = 'hidden'
            document.getElementsByClassName('listItem')[4].style.visibility = 'hidden'
            document.getElementsByClassName('listItem')[5].style.visibility = 'hidden'
        } else if (clickedIndex === "2") {
            document.getElementsByClassName('listItem')[0].style.visibility = 'hidden'
            document.getElementsByClassName('listItem')[1].style.visibility = 'hidden'
            document.getElementsByClassName('listItem')[3].style.visibility = 'hidden'
            document.getElementsByClassName('listItem')[4].style.visibility = 'hidden'
            document.getElementsByClassName('listItem')[5].style.visibility = 'hidden'
        } else if (clickedIndex === "3") {
            document.getElementsByClassName('listItem')[0].style.visibility = 'hidden'
            document.getElementsByClassName('listItem')[1].style.visibility = 'hidden'
            document.getElementsByClassName('listItem')[2].style.visibility = 'hidden'
            document.getElementsByClassName('listItem')[4].style.visibility = 'hidden'
            document.getElementsByClassName('listItem')[5].style.visibility = 'hidden'
        } else if (clickedIndex === "4") {
            document.getElementsByClassName('listItem')[0].style.visibility = 'hidden'
            document.getElementsByClassName('listItem')[1].style.visibility = 'hidden'
            document.getElementsByClassName('listItem')[2].style.visibility = 'hidden'
            document.getElementsByClassName('listItem')[3].style.visibility = 'hidden'
            document.getElementsByClassName('listItem')[5].style.visibility = 'hidden'
        } else if (clickedIndex === "5") {
            document.getElementsByClassName('listItem')[0].style.visibility = 'hidden'
            document.getElementsByClassName('listItem')[1].style.visibility = 'hidden'
            document.getElementsByClassName('listItem')[2].style.visibility = 'hidden'
            document.getElementsByClassName('listItem')[3].style.visibility = 'hidden'
            document.getElementsByClassName('listItem')[4].style.visibility = 'hidden'
        }
    }

    // builds a drop down menu
    render() {
        const options = [
            { value: '4', label: 'Earth Surf' },
            { value: '1', label: 'Fountain Lakes Park' },
            { value: '3', label: 'Peter Mathews Memorial Skate Garden' },
            { value: '2', label: 'Ramp Riders' },
            { value: '5', label: 'Westoff Plaza Skate Park' },
            { value: '0', label: 'Youth Activity Park' }
        ]
        return (
            <Dropdown
                className="dropdown"
                placeholder="Pick a Park"
                options={options}
                onChange={this.onChange}
                tabIndex="3"
            />
        );
    }
}

export default VenueDropDown;

// DropDown component from: https://www.npmjs.com/package/react-dropdown