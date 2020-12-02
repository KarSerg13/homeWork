import React, {Component} from 'react';
import {Users} from "./data/data";
import UserComponent from "./components/UserComponent";

class App extends Component {
    render() {

        return (
            <div>
                {
                    Users.map((user,index) => {

                        let clsY = index%2 ? 'first' : 'second'; // сcondition for stiling

                        return (
                            <UserComponent
                                item={user}
                                cls={clsY}    /// add class to tag
                                key={index}/>);  // key was integrated default
                    })
                    }
            </div>
        );
    }
}

export default App;