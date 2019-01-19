import React from "react"

class Header extends React.Component {
    render() {
        let {
            title
        } = this.props;
        return (
            <div className="header">{title}</div>
        );
    }
}

export default Header;