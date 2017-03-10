import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { changeRColor, changeGColor, changeBColor } from '../actions/ColorSliderActions'

function mapStateToProps(state) {
    return {
        colorR: state.colorslider.colorR,
        colorG: state.colorslider.colorG,
        colorB: state.colorslider.colorB
    }
}

export class ColorSlider extends React.Component{
    constructor(props){
        super(props)
    }

    componentWillMount(){
    }


    componentDidMount(){
    }

    handleColorR(event){
        this.props.dispatch(changeRColor(event.target.value));
    }

    handleColorG(event){
        this.props.dispatch(changeGColor(event.target.value));
    }

    handleColorB(event){
        this.props.dispatch(changeBColor(event.target.value));
    }

    render() {
        return (
            <div className="color_slider_container" style={{whiteSpace: "pre"}}>
                <div className="color_slider_bar">  R<input type="range" id="font-1-size" min="0" max="255" step="1" onChange={() => this.handleColorR(event)} value={this.props.colorR}/> {this.props.colorR}         </div>
                <div  className="color_slider_bar">  G<input type="range" id="font-1-size" min="0" max="255" step="1" onChange={() => this.handleColorG(event)} value={this.props.colorG}/> {this.props.colorG}         </div>
                <div  className="color_slider_bar">   B<input type="range" id="font-1-size" min="0" max="255" step="1" onChange={() => this.handleColorB(event)} value={this.props.colorB}/> {this.props.colorB}        </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(ColorSlider);


// getInitialState: function() {
//   return {value: 3};
// },
// handleChange: function(event) {
//   this.setState({value: event.target.value});
// },
// render: function() {
//   return (
//     <input
//       id="typeinp"
//       type="range"
//       min="0" max="5"
//       value={this.state.value}
//       onChange={this.handleChange}
//       step="1"/>
//   );
// }
