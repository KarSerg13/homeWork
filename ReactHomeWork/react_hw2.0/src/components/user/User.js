import React, {Component} from 'react';

class User extends Component {
    render() {
        let {item, onSelectUser}= this.props
        return (
            <div>
                {item.id}-{item.name}
                <button onClick={()=> onSelectUser(item.id)}>button</button>
                {/*<button onClick={onSelectUser.bind(this, item.id)}>button</button>*/}
            </div>
        );
    }
}

export default User;