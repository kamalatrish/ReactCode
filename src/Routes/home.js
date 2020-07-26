import React, { useState } from 'react';
export default function home() {
    const [welcomeState] = useState("Welcome to home tab")
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
            </div>
        </div>
    );
}