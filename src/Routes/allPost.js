import React from 'react';
import axios from 'axios';
export default class allPost extends React.Component {
    constructor(props) {
        super(props);

    }
    componentDidMount(){
        console.log(this.props)
    }
    render() {
        return (
                <table>
                    <tr>
                        <th>Post Id</th>
                        <th>Post User Id</th>
                        <th>Post Title</th>
                    </tr>
                    {this.props.postDataProp.map((postItem, index) => {
                        return (
                            <tr key={index}>
                                <td>{postItem.id}</td>
                                <td>{postItem.userId}</td>
                                <td>{postItem.title}</td>
                            </tr>
                        )
                    })}
                </table>
        );
    }
}
