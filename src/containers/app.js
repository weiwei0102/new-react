import React from "react"
import { HashRouter as  Router} from "react-router-dom"
import RouterView from "routers"
import Footer from "view/footer"

class App extends React.Component {
    render() {
        let {
            routes
        } = this.props
        return (
            <div className="wrap">
                <Router>
                    <RouterView routes={routes}/>
                </Router>
                <Footer />
            </div>
        )
    }
}

export default App; 