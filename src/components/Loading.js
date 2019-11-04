import React, { Component } from 'react'
import Lottie from 'react-lottie';
import loadinganim from '../assets/loadinganim.json'

export default class Loading1 extends Component {

    state = { isStopped: false, isPaused: false }
    render() {
        const buttonStyle = {
            display: 'block',
            margin: '10px auto'
        };

        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: loadinganim,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid meet'
            }
        };

        return <div style={{ height: '25vh' }}>
            <Lottie options={defaultOptions}
                height={400}
                isStopped={this.state.isStopped}
                isPaused={this.state.isPaused} />
        </div>
    }
}
