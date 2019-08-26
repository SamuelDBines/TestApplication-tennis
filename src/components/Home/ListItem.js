import React, {Component} from 'react';


class ListItem extends Component {
    
    render() {
        const { title , description} = this.props;
        return (
            
            <li> 
                <ul>
                    <li><b>{title} </b></li>
                    <li><i> {description}</i></li>
                </ul>
            </li>     
        );
    }
}

export default ListItem;