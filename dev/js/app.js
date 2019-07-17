import React, {Component} from "react";
import {Fragment} from "react";
import ReactDOM from "react-dom";
import LoadingData from "./components/loadingData.js";

class App extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }

    // tutaj timeout

    render(){
        return <LoadingData/> // tutaj instrukcja warunkowa
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
);