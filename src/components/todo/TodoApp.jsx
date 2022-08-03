import React, {Component} from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import Webcamant from "C:\Users\User\Documents\NetBeansProjects\Webcamant";

class TodoApp extends Component {
    render() {
        return (
            <div className = 'TodoApp'>
                <Router>
                    <Routes>
                        <Route path="/" element = {<LoginComponent/>}></Route>
                        <Route path="/login" element = {<LoginComponent/>}></Route>
                        <Route path="/welcome" element = {WelcomeComponent}></Route>
                    </Routes>
                </Router>
            </div>
        )
    }
}

class WelcomeComponent extends Component{
    render() {
        return(
            <div>
                WELCOME
            </div>)
    }
}

class LoginComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: "Arnav",
            password: "",
            hasLoginFailed: false,
            hasLoginSuccess: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.loginClick = this.loginClick.bind(this)
    }

    loginClick() {
        if(this.state.username == "Arnav" && this.state.password == "shah") {
            this.props.history.push("welcome")
            this.state({hasLoginSuccess: true})
            this.state({hasLoginFailed: false})
        }
        else {
            this.state({hasLoginFailed: true})
            this.state({hasLoginSuccess: false})
        }


    }

    
    handleChange(event) {
        console.log(event);
        this.setState({[event.target.name] : event.target.value})
    }

    render() {
        return(
            <div>
            
            Username: <input type = "text" name = "username" value = {this.state.username} onChange = {this.handleChange}/>
            Password: <input type="password" name="password" value = {this.state.password} onChange = {this.handleChange}/>
            <button onClick={this.loginClick}>Login</button>
            <ShowCredentials hasLoginFailed={this.state.hasLoginFailed}/>
            <WelcomeCredentials hasLoginSuccess={this.state.hasLoginSuccess}/>
            </div>
        )
    }

    
}

function ShowCredentials(props) {

    if(props.hasLoginFailed) {
        return <div>Invalid Credentials</div>
    }
    return null;
}
function WelcomeCredentials(props) {
    if(props.hasLoginSuccess) {
        return <div>Welcome!!</div>
    }
    return null;
}




export default TodoApp