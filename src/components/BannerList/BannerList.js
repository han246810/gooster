import React, { Component } from 'react'
import Banner from '../Banner/Banner'

import './BannerList.css'

export class BannerList extends Component {
    render() {
        return (
            <div className="banner-list">
                {
                    // sort the array before render it
                    this.props.banners.sort((a, b) => {
                        return b.width - a.width
                    }).map(e => {
                        return <Banner
                            key={e.id}
                            width={e.width}
                            url={e.i_url}
                            name={e.name}
                            rating={e.rating}
                            city={e.city}
                        />
                    })
                }
            </div>
        )
    }
}

export default BannerList
