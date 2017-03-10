import React from 'react';
import { connect } from 'react-redux';
import { openMenu, closeMenu } from '../actions/SideBarActions';
import { Link } from 'react-router';

function mapStateToProps(state) {
    return {
        menuLogo: state.sidebar.menuLogo,
        menu: state.sidebar.menu,
        dropdown: state.sidebar.dropdown
    }
}

export class SideBar extends React.Component{
    constructor(props){
        super(props)
    }

    componentWillMount(){
    }


    componentDidMount(){
    }

    handleMenu(menu){
        if (menu === "menu-list"){
            this.props.dispatch(openMenu());
        } else {
            this.props.dispatch(closeMenu());
        }
    }

    render() {
        const { menu, menuLogo, logo, dropdown } = this.props;
        return (
            <div className="navbar-dropdown">
                <div>
                    <img className={menuLogo} onClick={() => this.handleMenu(menu)} src="./img/menu-icon.png" height="20px"/>
                    <div className={dropdown}>
                    <ul className={menu} style={{clear: "right"}}>
                        <li><Link to="/" activeClassName="active">Home</Link></li>
                        <li><Link to="/resume" activeClassName="active">Resume</Link></li>
                        <li><Link to="/projects" activeClassName="active">Projects</Link></li>
                        <li><Link to="/contact" activeClassName="active">Contact</Link></li>
                    </ul>
                    </div>
                </div>
                <div>
                    <img src="/img/linkeding.png" height="40px" width="41px" style={{marginRight: "10px"}}/>
                    <img src="/img/github.png" height="40px"/>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(SideBar);
