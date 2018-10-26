/* jshint ignore:start */

import React from 'react'
import VenueList from './VenueList'

class ParkSearch extends React.Component {

    render() {
        return (
            <div className="search">
                <input
                    type={"search"}
                    id={"search"}
                    placeholder={"filter parks"}
                />
                <VenueList {...this.props} />
            </div>
        );
    }
}

export default ParkSearch;

/* designed based on: https://www.youtube.com/watch?v=lDVaZY0aG2w&index=7&list=PL4rQq4MQP1crXuPtruu_eijgOUUXhcUCP&t=0s */