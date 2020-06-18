import React, { Component } from 'react'
import './BottomNav.css'
import { Link } from 'react-router-dom'
export class BottomNav extends Component {
    render() {
        return (
            <div className="bottom-nav">
                <div className="bottom-nav-item">
                    <div>
                        <img src={require('../../images/i_home.png')} alt="home-logo" />
                    </div>
                    <div>
                        Home
                    </div>
                </div>
                <div className="bottom-nav-item">

                    <div>
                        <img src={require('../../images/i_hot.png')} alt="home-logo" />
                    </div>
                    <div>
                        What's Hot
                    </div>

                </div>
                <div className="bottom-nav-item">
                    <div>
                        <img src={require('../../images/i_order.png')} alt="home-logo" />
                    </div>
                    <div>
                        Order
                    </div>

                </div>
                <div className="bottom-nav-item">
                    <Link className="bottom-nav-item" to="/user-info">
                        <div>
                            <img src={require('../../images/i_my_account.png')} alt="home-logo" />
                        </div>
                        <div>
                            Account
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}

export default BottomNav
