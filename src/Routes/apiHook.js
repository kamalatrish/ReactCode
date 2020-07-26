import React, {useEffect, useState} from 'react';
import axios from 'axios';
import AllPostHook from '../Routes/allPostHook'

export default function apiHook() {
    const [welcomeState] = useState("Welcome to Hook Functional Component. API is invoked here");
    const [postData,updatePostData] = useState([]);
    function buttonAction(){
        let url = 'https://jsonplaceholder.typicode.com/posts'
        axios.get(url)
            .then((response) => {
                console.log("responseplaceHolder", response)
                console.log("response.data", response.data)
                if (response.status == 200) {
                    updatePostData(response.data)
                }
                else {
                    alert("API Failure")
                }
            })
    }
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
                <h2>{welcomeState}</h2>
                    <div className="row margProd">
                        <button type="button" className="btn btn-primary" onClick={() => buttonAction()}>Get all Posts....</button>
                    </div>
                    <AllPostHook postDataProp={postData}/>
            </div>
        </div>
    );
}
