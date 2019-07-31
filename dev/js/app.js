import React, {Component} from "react";
import {Fragment} from "react";
import ReactDOM from "react-dom";
import LoadingData from "./components/loadingData.js";
import LogIn from "./components/logIn.js";
import Screen from "./components/screen";
import FolderIcon from "./components/screenComponents/folder";

// import System from "./components/system.js";

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            isValid: false,
        }
    }

    componentDidMount() {
        this.timeTimeout = setTimeout(() =>
            this.setState({
                isValid: true,
            }), 5000);
    }

    componentWillUnmount() {
        clearTimeout(this.timeTimeout);
    }

    render(){
        // return this.state.isValid ? <System/> : <LoadingData/> // do wywalenia

        // return this.state.isValid ? <LogIn password="admin1"/> : <LoadingData/> // WERSJA OSTATECZNA
        return <Screen/> // robocza ścieżka
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
);
