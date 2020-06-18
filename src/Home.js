import React, { Component } from 'react'
import TopBar from './components/TopBar/TopBar';
import NavBar from './components/NavBar/NavBar';
import BannerList from './components/BannerList/BannerList';
import BottomNav from './components/BottomNav/BottomNav';
import { connect } from 'react-redux';


import { getShortCut, getBanners, getLocation } from './actions/data'


export class Home extends Component {
    componentDidMount() {
        this.props.getShortCut()
        this.props.getBanners()
        this.props.getLocation()
    }
    render() {
        if(this.props.homeData.banners.length > 0) {
            return (
                <div>
                    <TopBar location={this.props.homeData.location}></TopBar>
                    <NavBar list={this.props.homeData.records}></NavBar>
                    <BannerList banners={this.props.homeData.banners}></BannerList>
                    <div className="extra-padding-bottom"></div>
                    <BottomNav></BottomNav>
                </div>
            )
        } else {
            return <div>
                Loading...
            </div>
        }
        
    }
}

const mapStateToProps = (state) => ({
    homeData: state.data,
})
const mapDispatchToProps = {
    getShortCut,
    getBanners,
    getLocation
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);

