import React from 'react';
import axios from 'axios';
export default class AssessmentAllPosts extends React.Component {
    constructor(props) {
        super(props);
    }
    onClickFunction=(index)=>{
        this.props.buttonAction("specificPost",true)
        this.props.setSelectedPostIndex(index)
    }

    render() {
        return (
            <div className="container fluid">
                All the posts displayed here !!!!
                <table>
                    <tr>
                        <th>Post Id</th>
                        <th>Post User Id</th>
                        <th>Post Title</th>
                    </tr>
                    {this.props.postDataProp.map((postItem, index) => {
                        return (
                            <tr key={index} onClick={() => this.onClickFunction(index)}>
                                <td>{postItem.id}</td>
                                <td>{postItem.userId}</td>
                                <td>{postItem.title}</td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        );
    }
}
