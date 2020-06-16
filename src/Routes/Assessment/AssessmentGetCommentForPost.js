import React from 'react';
import axios from 'axios';
export default class AssessmentGetCommentForPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postSpeficComment: [],
            fetchingData: false
        }
    }
    componentDidMount() {
        debugger;
        console.log(this.props.postIdVal)
        this.setState({ fetchingData: true })
        let url = "https://jsonplaceholder.typicode.com/posts/" + this.props.postIdVal + "/comments"
        axios.get(url)
            .then((response) => {
                this.setState({ fetchingData: false })
                console.log("responseplaceHolder", response)
                if (response.status == 200) {
                    this.setState({ postSpeficComment: response.data })
                }
                else {
                    alert("API Failure")
                }
            })
            .catch(function (error) {
                alert(error)
            })
    }

    render() {
        return (
            <div className="container fluid">
                All the Assessment Get Comment For Post displayed here !!!!
                <div className="row">
                    {this.state.fetchingData && "FETCHING DATA PLEASE WAIT"}
                </div>
                <table>
                    <tr>
                        <th>Id</th>
                        <th>Post Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Body</th>
                    </tr>
                    {this.state.postSpeficComment.map((postItem, index) => {
                        return (
                            <tr key={index}>
                                <td>{postItem.id}</td>
                                <td>{postItem.postId}</td>
                                <td>{postItem.name}</td>
                                <td>{postItem.email}</td>
                                <td>{postItem.body}</td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        );
    }
}
