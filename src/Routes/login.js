import React from 'react';
export default class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userCred: {
                "name": "admin",
                "pass": "pass"
            }
        }
    }

    loginAssignment(){
        window.location.href="/Home"
    }

    render() {
        return (
            <div className="container fluid">
                <div className="row">
                    <label for="fname">User Name</label>
                    <input type="text" />
                </div>
                <div className="row">
                    <label for="lname">Password</label>
                    <input type="password"/>
                </div>
                <div className="row">
                        <button type="button" className="btn btn-primary" onClick={() => this.loginAssignment()}>Login to React Asignment</button>
                </div>
            </div>
        );
    }
}