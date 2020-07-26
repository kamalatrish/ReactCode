import React from 'react';
export default class userClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            welcomeState: "Input Validations using State and Class Component.",
            userName: "",
            phone: "",
            email: "",
            password: ""
        }
    }

    componentDidMount() {
        this.setState({
            userName: "adminClass",
            phone: "99999999",
            email: "abc@gamail.com",
            password: "ssss"
        })
    }

    loginAssignment() {
        window.location.href = "/assessmentIndex"
    }
    reset = () => {
        this.setState({
            userName: "",
            phone: "",
            email: "",
            password: ""
        })
    }
    changeInputVal = (event) => {
        this.setState({ userName: event.target.value })
    }
    changePhone = (event) => {
        this.setState({ phone: event.target.value })
    }
    changeEmail = (event) => {
        this.setState({ email: event.target.value })
    }
    changePassword = (event) => {
        this.setState({ password: event.target.value })
    }
    submit = () => {
        if (this.state.userName == "" || this.state.phone == "" || this.state.email == "" || this.state.password == "") {
            alert("one of the feild is empty")
        }
        else{
            alert("Success")
        }
    }

    render() {
        return (
            <div className="container fluid">
                <div className="sidenav">
                    <a href="/Home">Home Tab</a>
                    <a href="/UserClass">User Class Component</a>
                    <a href="/UserHook">User Hook Component</a>
                    <a href="/ApiClass">API Class Component</a>
                    <a href="/ApiHook">API Hook Component</a>
                </div>
                <div className="main">
                    <h2>{this.state.welcomeState}</h2>
                    <div className="row">
                        USER NAME : <input className="p-l-40" type="text" value={this.state.userName} onChange={(e) => this.changeInputVal(e)} />
                    </div>
                    <div className="row">
                        PHONE : <input className="p-l-40" type="text" value={this.state.phone} onChange={(e) => this.changePhone(e)} />
                    </div>
                    <div className="row">
                        EMAIL : <input className="p-l-40" type="text" value={this.state.email} onChange={(e) => this.changeEmail(e)} />
                    </div>
                    <div className="row">
                        PASSWORD : <input className="p-l-40" type="password" value={this.state.password} onChange={(e) => this.changePassword(e)} />
                    </div>
                    <div className="row">
                        <button onClick={() => this.reset()}>Reset</button>
                        <button onClick={() => this.submit()}>Submit</button>
                    </div>
                </div>
            </div>
        );
    }
}