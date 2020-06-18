import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUserInfo, updateUserInfo } from './actions/auth'

import './UserInfo.css'
export class UserInfo extends Component {
    state = {
        first_name: "",
        nick_name: ""
    }
    componentDidUpdate() {
        if (this.props.auth.authFail) {
            setTimeout(() => {
                this.props.history.push('/login')
            }, 2000);
        }
    }
    componentDidMount() {
        this.props.getUserInfo()
    }
    makeBadCalls = () => {
        // this is a call that use bad token
        this.props.getUserInfo(true)
    }
    handleUpdate = (e) => {
        e.preventDefault()
        if (!this.state.nick_name || !this.state.first_name) {
            alert('both have to be non empty')
            return
        }
        this.props.updateUserInfo({
            nick_name: this.state.nick_name,
            first_name: this.state.first_name
        })
    }
    handleInputChange = e => {
        // e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        if (this.props.auth.user.first_name) {
            return (
                <div>
                    <div className="content-wrapper">
                        <p>
                            <b>Please note:</b><br></br>
                        </p>
                        <ul>
                            <li>
                                make a bad call will simulte a "bad" retrieve data call
                                </li>
                            <li>
                                unlike the call with correct token/key, it will use a fake key/token pair and will not pass the authentication
                        </li>
                            <li>
                                and then you will be redirect to login page
                        </li>
                        </ul>
                    </div>


                    <div className="button-container">
                        <button className="goopter-btn" onClick={() => {
                            this.props.getUserInfo()
                        }}>Reload</button>
                    </div>
                    <div className="button-container">
                        <button className="goopter-btn" onClick={this.makeBadCalls}>Make a bad call</button>
                    </div>

                    <div className="user-name">
                        <p>
                            <b>First Name: </b>
                            {
                                this.props.auth.user.first_name
                            }
                        </p>
                        <p>
                            <b>Nick Name: </b>
                            {
                                this.props.auth.user.nick_name
                            }
                        </p>
                    </div>
                    <form className="update-info">
                        <input name="first_name" placeholder="First Name" onChange={this.handleInputChange}></input>
                        <input name="nick_name" placeholder="Last Name" onChange={this.handleInputChange}></input>
                        <button type="submit" className="update-btn" onClick={this.handleUpdate}>Update</button>
                    </form>

                </div>
            )
        } else if (this.props.auth.authFail) {
            return <div>Nothing found... Redirecting you to login page...</div>
        } else {
            return <div>LOADING...</div>
        }

    }
}
const mapStateToProps = state => ({
    auth: state.auth
})
export default connect(mapStateToProps, {
    getUserInfo,
    updateUserInfo
})(UserInfo)
