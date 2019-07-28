import React, {Component} from "react";
import {Fragment} from "react";
import FolderList from "../../data/folderList.js";

export default class FolderIcon extends Component {
    constructor(props){
        super(props);
        this.state={
            clicked: false,
            close: false,
        };
        // console.log(FolderList);
    }

    open(e){
        e.preventDefault();
        this.setState({
            clicked: true,
        })
    }

    close(e){
        e.preventDefault();
        this.setState({
            close: true,
            clicked: false,
        })
    }

    render(){
        const folder = (
            <div>
                <header>
                    <div className="closeCross" onClick={e => this.close(e)}>+</div>
                </header>
                <aside>
                    <ul>
                        {/*{FolderList.map()}*/}
                        {/*wczytywanie elementów li z folderList z pomocą .map*/}
                    </ul>
                </aside>
                <main>
                    {/*zawartość folderu ???*/}
                </main>
                <footer></footer>
            </div>
        );

        const folderIcon = (
            <div
                onDoubleClick={e => this.open(e)}
                className="folderIconPosition"
            >
                <div className="folderIcon"></div>
                <p className="folderIconText">Pliki</p>
            </div>
        );

        return (
            <Fragment>
                {folderIcon}
                {this.state.clicked ? folder : null}
            </Fragment>
        );
    }
}

