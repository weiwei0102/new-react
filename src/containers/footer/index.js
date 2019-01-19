import React from "react"
import { HashRouter as Router, NavLink } from "react-router-dom"

class Footer extends React.Component {
    render() {
        return (
            <Router>
                <ul className="footer">
                    <li><NavLink to="/home" activeClassName="blue">首页</NavLink></li>
                    <li><NavLink to="/type" activeClassName="blue">分类</NavLink></li>
                    <li><NavLink to="/find" activeClassName="blue">发现</NavLink></li>
                    <li><NavLink to="/car" activeClassName="blue">购物车</NavLink></li>
                    <li><NavLink to="/mine" activeClassName="blue">我的</NavLink></li>
                </ul>
            </Router>
        )
    }
}

export default Footer;