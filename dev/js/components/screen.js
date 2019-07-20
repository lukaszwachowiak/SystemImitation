import React, {Component} from "react";
import {Fragment} from "react";
import FolderIcon from "./screenComponents/folder.js";
import WeatherApp from "./screenComponents/weatherApp.js";
import Footer from "./screenComponents/footer.js";

// import Winamp from "./screenComponents/winamp.js";

export default class Screen extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        return (
            <div className="container">
                <FolderIcon/>
                <WeatherApp/>
                {/*<Winamp/>>*/}
                <Footer/>
            </div>
        )
    }
}
