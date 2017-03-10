import React from 'react';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router';
import { unmountLogo, mountLogo } from '../actions/HomeActions';
import SideBar from './SideBar';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' // ES6
import ColorSlider from './ColorSlider';



function mapStateToProps(state) {
    return {
        logoStatus: state.home.logoStatus,
        colorR: state.colorslider.colorR,
        colorG: state.colorslider.colorG,
        colorB: state.colorslider.colorB
    }
}

export class Home extends React.Component{
    constructor(props){
        super(props)
    }

    componentWillMount(){
        this.props.dispatch(mountLogo());
    }

    componentWillUnmount(){
        this.props.dispatch(unmountLogo());
    }


    componentDidMount(){
    }

    render() {

        return (
            <div className='container cover-image' style={{backgroundColor: "rgb( " + this.props.colorR + ", " + this.props.colorG + ", "  + this.props.colorB + ")"}}>
                <SideBar />
                <div className="border-top text-center">
                    <div className="vertical-align">
                        <h1 className="padding">GUILHERME GOMES DE LUCAS</h1>
                        <h3 className="caption">FULLSTACK WEBDEVELOPER</h3>
                        <h3 className="handwrite-font padding-top">I couldn't define my background color, so I let you choose your favorite!</h3>
                        <img src="./img/arrow.png" height="100px"/>
                    </div>
                </div>
                <ColorSlider/>
            </div>
            )
    }
}

export default connect(mapStateToProps)(Home);
