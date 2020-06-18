import React, { Component } from 'react'
import LoginForm from './components/LoginForm/LoginForm'
import { connect } from 'react-redux'
import { login, getUserInfo } from './actions/auth'
import { Redirect } from 'react-router-dom'
export class Login extends Component {
    render() {
        if (this.props.auth.auth) {
            return <Redirect to="/user-info" />
        } else {
            return (

                <div>
                    <div className="logo" style={{
                        width: 200,
                        margin: "30px auto"
                    }}>
                        <img alt="goopter logo" src={require("./goopter.png")} />
                    </div>
                    <LoginForm onLogin={this.props.login}></LoginForm>
                    {
                        this.props.auth.login ? <p>The email address/password don't match our record</p> : ''
                    }
                    <div style={{margin: "10px auto", width: 300}}>
                        Use this test login:<br />
                        Email: 7788758095@c.goopter.com<br />
                        Password: 20200506
                    </div>
                </div>
            )
        }

    }
}
const mapStateToProps = state => ({
    auth: state.auth
})
export default connect(mapStateToProps, {
    login,
    getUserInfo
})(Login)
