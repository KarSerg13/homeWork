import React, {Component} from 'react';
import './user.css'

class UserComponent extends Component {
    render() {
        let {item, cls} = this.props;
        return (
            <div>
                <div className={cls}> {item.name} - {item.age} - {item.status.toString()} </div>
            </div>
        );
    }
}

export default UserComponent;