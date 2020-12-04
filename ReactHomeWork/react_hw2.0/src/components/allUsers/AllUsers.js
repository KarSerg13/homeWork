import React, {Component} from 'react';
import User from "../user/User";

class AllUsers extends Component {
    state = {users: [], chooseOne: null};

    constructor() {
        super();
    }
    oneSelectUser =(id)=>{
        let {users, chooseOne}= this.state;
      let find = users.find(value=>value.id===id);
        // eslint-disable-next-line no-restricted-globals
        this.setState({chooseOne : find});
    };
    render() {
        let {users, chooseOne}=this.state
        return (
            <div>
                {
                    users.map(user => <User item ={user} key = {user.id} onSelectUser ={this.oneSelectUser}/>)
                // users.map(user => <div> {user.name}</div>)
                }
                {
                    chooseOne &&  <h2>{chooseOne.id}-{chooseOne.name}</h2>
                }

            </div>
        );
    }
componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
        .then(usersFromAPI => {
            this.setState({users: usersFromAPI});
        });

}
}

export default AllUsers;