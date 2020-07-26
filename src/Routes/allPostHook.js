import React, { useEffect } from 'react';
export default function appPostHook(props) {

    useEffect(() => {
        console.log("componentWillReceiveProps")
        console.log("this.props", props)
    }, [props])

    return (
        <table>
            <tr>
                <th>Post Id</th>
                <th>Post User Id</th>
                <th>Post Title</th>
            </tr>
            {props.postDataProp.map((postItem, index) => {
                return (
                    <tr key={"propHook", index}>
                        <td>{postItem.id}</td>
                        <td>{postItem.userId}</td>
                        <td>{postItem.title}</td>
                    </tr>
                )
            })}
        </table>
    )
}
