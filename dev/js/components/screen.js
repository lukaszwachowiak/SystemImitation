import React, {Component} from "react";
import {Fragment} from "react";
import Footer from "./screenComponents/footer.js";

export default class Screen extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        return (
            <div className="container">
                <Footer/>
            </div>
        )
    }
}
