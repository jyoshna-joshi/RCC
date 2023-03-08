import React, {Component} from "react";

class Message extends Component{

    constructor(){
        super()
        this.state = {
            message: 'Welcome visitor'
        }
    }
    //welcome message
    changeMessage(){
        this.setState({
            message: "You are sucessfully logged in."
        })
    }

    //display message
    render(){
        return(
            <div>
            <h1>{this.state.message}</h1>
            <button onClick={ () => this.changeMessage()}>Login </button>
            </div>
        )
    }
}

export default Message