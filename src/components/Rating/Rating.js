import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarLight } from '@fortawesome/free-regular-svg-icons'

import './Rating.css'

const totalStars = [0, 0, 0, 0, 0]
export class Rating extends Component {
    render() {
        return (
            <div>
                {totalStars.map((e, index) => {
                    if(index < this.props.rating) {
                        return <FontAwesomeIcon icon={faStar} key={index}></FontAwesomeIcon>
                    } else {
                        return <FontAwesomeIcon icon={faStarLight} key={index}></FontAwesomeIcon>
                    }
                })}
            </div>
        )
    }
}

export default Rating
