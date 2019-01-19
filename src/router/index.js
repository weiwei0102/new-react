import React from "react"
import Map from "./map"
import RouterData from "./config"

class RouterView extends React.Component {
    render() {
        let {
            routes
        } = this.props;
        return (
            <div className="section">
                <Map routes={routes === undefined ? RouterData : routes}/>
            </div>
        )
    }
}

export default RouterView;