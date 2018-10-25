/* jshint ignore:start */

import React from 'react'

class ListItem extends React.Component {


    render() {
        return (
            <li className="listItem">
                {this.props.venue.name}
            </li>
        );
    }
}

export default ListItem;

/* designed based on: https://www.youtube.com/watch?v=lDVaZY0aG2w&index=7&list=PL4rQq4MQP1crXuPtruu_eijgOUUXhcUCP&t=0s */