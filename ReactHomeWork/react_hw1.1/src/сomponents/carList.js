import React, {Component} from 'react';

class CarList extends Component {

    render() {
        let {item}= this.props;
        return (
            <div>
                 {item.producer} - { item.power}-{item.year}-
                {item.price} - {item.ownwr.age} - {item.ownwr.name}-
                {item.ownwr.expirience}
            </div>
        );
    }
}
export default CarList;
