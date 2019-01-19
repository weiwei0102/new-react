import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"

class Map extends React.Component {
    render() {
        let {
            routes
        } = this.props;
        const defaultRoutes = <Route path="/" component={() => {
            return <Redirect to="/home"/>
        }} key={0} exact/>
        return (
            <Switch>
                {
                    routes.map((item, index) => {
                        const Comp = item.component;
                        return <Route key={index} path={item.path} component={(ApiRoutes) => {
                            return <Comp routes={item.children} {...ApiRoutes}/>
                        }}/>
                    }).concat([defaultRoutes])
                }
            </Switch>
        )
    }
}

export default Map;