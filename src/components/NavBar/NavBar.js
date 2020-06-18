import React, { Component } from 'react'
import './NavBar.css'
export class NavBar extends Component {
    componentDidMount() {



    }
    render() {
        return (
            <div className="item-container">
                {
                    // iterate the list and display the store image + name
                    // re-order the list - this is one of the requirements
                    this.props.list.sort((a, b) => {
                        return a.seq - b.seq
                    }).map(e => {
                        return (<div className="item" key={e.cid}>
                            <div className="top">
                                <img src={e.img} alt={e.name + '-image'} />
                            </div>
                            <div className="bottom">
                                {e.name}
                            </div>
                        </div>)
                    })
                }
            </div>
        )
    }
}

export default NavBar
