import React, { Component } from 'react'
import './LoginForm.css'
export class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            // password: '20200506',
            password: '',
        }
    }
    handleLogin = (e) => {
        e.preventDefault()
        if (!this.state.email || !this.state.password) {
            window.alert('Username or password cannot be empty')
            return
        }
        this.props.onLogin({
            email: this.state.email, 
            password: this.state.password
        })
    }
    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state)
    }
    render() {
        return (
            <form>
                <label>
                    Username(Email)<br />
                    <input onChange={this.handleInputChange} name="email" type="text" />
                </label>
                <label>
                    Password<br />
                    <input onChange={this.handleInputChange} name="password" type="password" />
                </label>
                <button onClick={this.handleLogin}>Login</button>
            </form>
        )
    }
}

export default LoginForm
