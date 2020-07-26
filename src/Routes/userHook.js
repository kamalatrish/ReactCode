import React, { useState ,useEffect} from 'react';
export default function userHook() {
    const [welcomeState] = useState("Input Validations using Functional Hook Component.");
    const [userName,updateUserName] = useState("");
    const [phone,updatePhone] = useState("");
    const [email,updateEmail] = useState("");
    const [password,updatePassword] = useState("");
    useEffect(() => {
        console.log('componentDidMount');
        updateUserName("adminHook")
        updatePhone("99999999")
        updateEmail("abc@gamail.com")
        updatePassword("Password")
        return () => {
            console.log('componentWillUnmount');
            reset();
        };
    }, []);

    // useEffect(()=>{
    //     if(userName=="hello" && phone=="99999999999"){
    //         console.log("do this")
    //     }
    //     else{
    //         console.log("do that")
    //     }
    // },[userName])

    function reset() {
        updateUserName("")
        updatePhone("")
        updateEmail("")
        updatePassword("")
    }
    function submit() {
        if (userName == "" || phone == "" || email == "" || password == "") {
            alert("one of the feild is empty")
        }
        else{
            alert("Success")
        }
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
                <div className="row">
                    USER NAME : <input className="p-l-40" type="text" value={userName} onChange={(e) => updateUserName(e.target.value)} />
                </div>
                <div className="row">
                    PHONE : <input className="p-l-40" type="text" value={phone} onChange={(e) => this.updatePhone(e.target.value)} />
                </div>
                <div className="row">
                    EMAIL : <input className="p-l-40" type="text" value={email} onChange={(e) => this.updateEmail(e.target.value)} />
                </div>
                <div className="row">
                    PASSWORD : <input className="p-l-40" type="password" value={password} onChange={(e) => this.updatePassword(e.target.value)} />
                </div>
                <div className="row">
                    <button onClick={() => reset()}>Reset</button>
                    <button onClick={() => submit()}>Submit</button>
                </div>
            </div>
        </div>
    );
}
