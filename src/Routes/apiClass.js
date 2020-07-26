import React from 'react';
import axios from 'axios';
import AllPost from '../Routes/allPost'
// import AssessmentAllPosts from './assessmentAllPost'
// import AssessmentSpecificPost from './assessmentSpecifcPost'
// import AssessmentGetCommentForPost from './AssessmentGetCommentForPost'
export default class apiClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            welcomeState: "Welcome to Class Component. API is invoked here",
            postData: [],
            displayGoBackBtn: false,
            selectedOpt: "",
            selectedPostIndex: 0,
            postIdVal: ""
        }
    }
    componentDidMount() {

    }
    buttonAction = () => {
        let url = 'https://jsonplaceholder.typicode.com/posts'
        axios.get(url)
            .then((response) => {
                console.log("responseplaceHolder", response)
                console.log("response.data", response.data)
                if (response.status == 200) {
                    this.setState({ postData: response.data })
                }
                else {
                    alert("API Failure")
                }
            })
    }
    setSelectedPostIndex = (index) => {
        this.setState({ selectedPostIndex: index })
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
                        <div className="row margProd">
                            <button type="button" className="btn btn-primary" onClick={() => this.buttonAction()}>Get all Posts....</button>
                        </div>
                        <AllPost postDataProp={this.state.postData}/>
                </div>
            </div>
        );
    }
}
