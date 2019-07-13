import React, { Component } from 'react';
import SiteCarousel from '../SiteCarousel';
import VehicleBrowser from '../VehicleBrowser';
import './Home.css';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>test</p>
                <SiteCarousel />
                <VehicleBrowser />
            </div>
        );
    }
}

export default Home;
