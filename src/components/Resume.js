import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import SideBar from './SideBar';
import ColorSlider from './ColorSlider';


function mapStateToProps(state) {
    return {
        colorR: state.colorslider.colorR,
        colorG: state.colorslider.colorG,
        colorB: state.colorslider.colorB
    }
}

export class Resume extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            logo: "initial"
        }
    }

    componentWillMount(){
        console.log(window.innerWidth);
        this.setState({
            logo: "initial"
        })
    }


    componentDidMount(){
        setTimeout(() => {
        this.setState({
            logo: "final"
        })
    }, 1500)
    }

    componentWillUnmount(){
        this.setState({
            logo: "logo-umount"
        })
    }

    handleMouseEnter(event, reference){
        this.setState({
            [reference]: true
        })
    }

    handleMouseLeave(event, reference){
        this.setState({
            [reference]: false
        })
    }

    render() {
    const { example } = this.props;

        return (
            <div className='container cover-image' style={{backgroundColor: "rgb( " + this.props.colorR + ", " + this.props.colorG + ", "  + this.props.colorB + ")"}}>
                    <SideBar />
                    <div  className="vertical-align">
                    <h2 className="text-center border-top" style={{fontSize: "50px"}}>FULLSTACK WEBDEVELOPER</h2>
                <div className='skill-list'>
                    <div className="skill-section">
                        <h2>Frontend</h2>
                        <div id="frontend" className="stack-icons">
                            <div id="javascript"  value="javascript">
                                <img src="./img/icons-tech/javascript.png" height="50px" className="opacity" onMouseEnter={() => {this.handleMouseEnter(event, "javascript")}} onMouseLeave={() => {this.handleMouseLeave(event, "javascript")}}/>
                                <p className={ this.state.javascript ? "appear" : "notappear"}>Javascript</p>
                            </div>
                            <div>
                            <img src="./img/icons-tech/react-redux.png" height="50px"  className="opacity" onMouseEnter={() => {this.handleMouseEnter(event, "react")}} onMouseLeave={() => {this.handleMouseLeave(event, "react")}}/>
                                <p  className={ this.state.react ? "appear" : "notappear"}>React-Redux</p>
                            </div>
                            <div>
                                <img src="./img/icons-tech/jquery.png" height="50px"  className="opacity" onMouseEnter={() => {this.handleMouseEnter(event, "jquery")}} onMouseLeave={() => {this.handleMouseLeave(event, "jquery")}}/>
                                <p  className={ this.state.jquery ? "appear" : "notappear"}>Jquery</p>

                            </div>
                            <div>
                                <img src="./img/icons-tech/html.png" height="50px" className="opacity" onMouseEnter={() => {this.handleMouseEnter(event, "html")}} onMouseLeave={() => {this.handleMouseLeave(event, "html")}}/>
                                <p  className={ this.state.html ? "appear" : "notappear"}>HTML</p>
                            </div>
                            <div>
                                <img src="./img/icons-tech/css.png" height="50px"  className="opacity" onMouseEnter={() => {this.handleMouseEnter(event, "css")}} onMouseLeave={() => {this.handleMouseLeave(event, "css")}}/>
                                <p className={ this.state.css ? "appear" : "notappear"}>CSS</p>
                            </div>
                            <div>
                                <img src="./img/icons-tech/responsive.png" height="50px"  className="opacity" onMouseEnter={() => {this.handleMouseEnter(event, "responsiveness")}} onMouseLeave={() => {this.handleMouseLeave(event, "responsiveness")}}/>
                                <p  className={ this.state.responsiveness ? "appear" : "notappear"}>Responsiveness</p>
                            </div>
                        </div>
                    </div>
                    <div className="skill-section">
                        <h2>Backend</h2>
                        <div id="backend" className="stack-icons">
                            <div>
                                <img src="./img/icons-tech/node.png" height="50px"   className="opacity" onMouseEnter={() => {this.handleMouseEnter(event, "node")}} onMouseLeave={() => {this.handleMouseLeave(event, "node")}}/>
                                <p  className={ this.state.node ? "appear" : "notappear"}>Node</p>
                            </div>
                            <div>
                                <img src="./img/icons-tech/postgress.png" height="50px"  className="opacity"  onMouseEnter={() => {this.handleMouseEnter(event, "postgress")}} onMouseLeave={() => {this.handleMouseLeave(event, "postgress")}}/>
                                <p  className={ this.state.postgress ? "appear" : "notappear"}>Postgress</p>
                            </div>
                            <div>
                                <img src="./img/icons-tech/mongodb.png" height="50px"   className="opacity" onMouseEnter={() => {this.handleMouseEnter(event, "mongo")}} onMouseLeave={() => {this.handleMouseLeave(event, "mongo")}}/>
                                <p  className={ this.state.mongo ? "appear" : "notappear"}>MongoDb</p>
                            </div>
                        </div>
                    </div>
                <div className="text-center">
                    <h3 className="handwrite-font padding-top">Download my CV!!!</h3>
                    <a className="text-center" href="./resourses/Guilherme Gomes de Lucas - Resume.pdf" download><img src="./img/icons-tech/donwload.png" height="50p"x/></a>
                </div>
                </div>
            </div>
                <ColorSlider/>
            </div>
            )
    }
}

export default connect(mapStateToProps)(Resume);
