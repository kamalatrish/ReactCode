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
    componentDidMount() {

    }

    loginEkart (){
        window.location.href="/index"
    }

    loginAssignment(){
        window.location.href="/assessmentIndex"
    }

    render() {
        return (
            <div className="container fluid">
                <div className="row">
                    <label for="fname">First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                </div>
                <div className="row">
                    <label for="lname">Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                </div>
                <div className="row">
                        <button type="button" className="btn btn-primary" onClick={() => this.loginEkart()}>Login to E-Kart</button>
                </div>
                <div className="row">
                        <button type="button" className="btn btn-primary" onClick={() => this.loginAssignment()}>Login to React Asignment</button>
                </div>
            </div>
        );
    }
}