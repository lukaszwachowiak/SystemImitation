import React, {Component} from "react";
import {Fragment} from "react";

export default class Folder extends Component {
    constructor(props){
        super(props);
        this.state={
            clicked: false,
        }
    }

    clicked(e){
        e.preventDefault();

        this.setState({
            clicked: true,
        })
    }

    render(){
        const folder = (
            <div
                onDoubleClick={e => this.clicked(e)}
            >
                <div></div>
                {/*z pomocą :before i :after stworzyć dwa pseudoelementy*/}
                {/*oraz z pomocą transform: skewX(25deg); zrobić z nich dwa romby powyżej powyższego diva*/}
                <p>Pliki</p>
            </div>
        );

        return folder;
    }
}