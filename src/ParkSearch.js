/* jshint ignore:start */

import React from 'react'
import VenueList from './VenueList'

class ParkSearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: "",
        }
    }

    componentDidMount = () => {
        // var storeVenuesOnList = this.props.venue.id
        // console.log(storeVenuesOnList)
        // console.log("The list has been generated")
        // this.setState({storeVenuesOnList: storeVenuesOnList})
    }

    handleSearch = event => {
        // get the entry typed by the user
        this.setState({ inputValue: event.target.value })
        console.log(this.state.inputValue)
    }

    // 0. make a list of IDs and first letters (letter choices: Y, F, R, P, E, W)
    // X 1. get the text searched
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
                <VenueList 
                    value={this.state.query}
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