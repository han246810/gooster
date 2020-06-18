import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import './TopBar.css'

export class TopBar extends Component {
    constructor(props) {
        super()
    }
    onLogoClick = (e) => {
        
    }
    render() {
        return (
            <div className="top-bar">
                <div className="left" onClick={this.onLogoClick}>
                    <img src={require("../../images/goopter_logo_white.png")} alt="logo" />
                </div>
                <div className="mid">
                    <span>
                        {this.props.location}
                    </span>
                    <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
                </div>
                <div className="right">
                    <FontAwesomeIcon icon={faEllipsisH}></FontAwesomeIcon>
                </div>
            </div>
        )
    }
}

export default TopBar
