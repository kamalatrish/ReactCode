import React from 'react';
import axios from 'axios';
export default class AssessmentSpecificPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postSpeficData: {}
        }
    }
    componentDidMount() {
        console.log(this.props.selectedPostIndex)
        let url = "https://jsonplaceholder.typicode.com/posts/" + this.props.selectedPostIndex
        axios.get(url)
            .then((response) => {
                console.log("responseplaceHolder", response)
                if (response.status == 200) {
                    this.setState({ postSpeficData: response.data })
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
                Selected Post is displayed here is of index {this.props.selectedPostIndex}
                <div className="row">
                    Post Id : {this.state.postSpeficData.id}
                </div>
                <div className="row">
                    Post User Id : {this.state.postSpeficData.userId}
                </div>
                <div className="row">
                    Post User Title : {this.state.postSpeficData.title}
                </div>
                <div className="row">
                    Post Comment : {this.state.postSpeficData.body}....
                </div>
            </div>
        );
    }
}
