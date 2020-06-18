import React, { Component } from 'react'
import './Banner.css'
import Rating from '../Rating/Rating'

const fallbackImageUrl = 'https://picsum.photos/489/399'

export class Banner extends Component {

    useFallbackUrl = (e) => {
        e.target.src = fallbackImageUrl
    }

    render() {
        return (
            <div className={`banner ${this.props.width === 2 ? "half" : ""}`}>
                <img onError={this.useFallbackUrl} src={`https://res.cloudinary.com/goopter${this.props.url}`} alt={this.props.name} />
                <p className="banner-title">
                    {this.props.name}
                </p>
                <div className="banner-bottom">
                    <Rating rating={this.props.rating}/>
                    {
                        this.props.width === 4 ? <span>{this.props.city}</span> : ''
                    }
                </div>
            </div>
        )
    }
}

export default Banner
