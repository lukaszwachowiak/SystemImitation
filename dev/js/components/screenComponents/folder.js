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
            <div className="folderPosition">
                <header className="folderHeader">
                    <h1 className="folderHeaderDisk">(C:)</h1>
                    <div className="folderHeaderSpace"></div>
                    <div className="closeCross" onClick={e => this.close(e)}>X</div>
                </header>
                <nav className="folderNavigationContainer">
                    <div className="folderNavigation">
                        <ul className="folderNavigationList">
                            <li>File</li>
                            <li>Edit</li>
                            <li>View</li>
                            <li>Tools</li>
                            <li>Help</li>
                        </ul>
                    </div>
                    <div className="folderNavigationIcons">
                        <div>
                            {/*div z ikonami*/}
                        </div>
                        <div>
                            {/*div z tekstem w paragrafach*/}
                        </div>
                    </div>
                </nav>
                <div className="folderContentContainer">
                    <aside className="folderSideContent">
                        <div>
                            My Computer
                            {FolderList.map(element =>
                                    <ul key={element.id}>
                                        {element.disk}
                                        <li></li>
                                    </ul>
                            )}
                        </div>
                    </aside>
                    <main className="folderMainContent">
                        {/*zawartość folderu ???*/}
                    </main>
                </div>
                <footer className="folderFooterContainer">
                    <div></div>
                    <div></div>
                </footer>
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

