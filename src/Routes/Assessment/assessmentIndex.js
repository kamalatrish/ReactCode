import React from 'react';
import axios from 'axios';
import AssessmentAllPosts from './assessmentAllPost'
import AssessmentSpecificPost from './assessmentSpecifcPost'
import AssessmentGetCommentForPost from './AssessmentGetCommentForPost'
export default class AssessmentIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postData: [],
            displayGoBackBtn: false,
            selectedOpt: "",
            selectedPostIndex: 0,
            postIdVal : ""
        }
    }
    componentDidMount() {
        this.getProducts()
    }
    buttonAction = (keyName, backBool) => {
        if (this.state.selectedOpt == "specificPost") {
            this.setState({
                selectedOpt: "allPost",
                displayGoBackBtn: true
            })
        }
        else {
            this.setState({
                selectedOpt: keyName,
                displayGoBackBtn: backBool
            })
        }
    }
    setSelectedPostIndex = (index) => {
        this.setState({ selectedPostIndex: index })
    }
    getProducts = () => {
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
    render() {
        return (
            <div className="container fluid">
                Welcome to Assessment Home Page
                {this.state.displayGoBackBtn ?
                    <div className="row">
                        <button type="button" className="btn btn-primary" onClick={() => this.buttonAction("", false)}>Back Button</button>
                    </div>
                    :
                    <span>
                        <div className="row margProd">
                            <button type="button" className="btn btn-primary" onClick={() => this.buttonAction("allPost", true)}>Get all Posts....</button>
                        </div>
                        <div className="row margProd">
                            <input type="text" value={this.state.postIdVal} onChange={(e)=>this.setState({postIdVal :e.target.value})}/>
                            <button type="button" className="btn btn-primary" onClick={() => this.buttonAction("getCommentForPost", true)}>Get Comments for Post ID</button>
                        </div>
                    </span>
                }
                {this.state.selectedOpt == "allPost" &&
                    <AssessmentAllPosts
                        postDataProp={this.state.postData}
                        buttonAction={this.buttonAction}
                        setSelectedPostIndex={this.setSelectedPostIndex}
                    />}
                {this.state.selectedOpt == "specificPost" &&
                    <AssessmentSpecificPost
                        postDataProp={this.state.postData}
                        buttonAction={this.buttonAction}
                        selectedPostIndex={this.state.selectedPostIndex}
                    />
                }
                {this.state.selectedOpt == "getCommentForPost" &&
                    <AssessmentGetCommentForPost  postIdVal={this.state.postIdVal}/>
                }
            </div>
        );
    }
}
