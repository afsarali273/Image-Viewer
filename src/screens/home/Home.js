import React, {Component} from "react";
import Header from "../../common/header/Header";


class Home extends Component{

    constructor(props) {
        super(props);
    }

    render() {

        return(
            <div>
                 {/*Check if user logged In ,if not navigate to login page*/}
                {sessionStorage.getItem("isLoggedIn")!=="true" ? this.props.history.push('/') : null}
                <Header/>
                Home Page
            </div>
        )
    }
}

export default Home;