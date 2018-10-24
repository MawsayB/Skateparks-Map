/* jshint ignore:start */

import React, { Component } from 'react'
import VenueList from './VenueList'

class ParkSearch extends React.Component {

    render() {
        return (
            <div className="search-bar">
               <VenueList /> 
            </div>
        );
    }
}

export default ParkSearch;

/* designed based on: https://www.youtube.com/watch?v=lDVaZY0aG2w&index=7&list=PL4rQq4MQP1crXuPtruu_eijgOUUXhcUCP&t=0s */