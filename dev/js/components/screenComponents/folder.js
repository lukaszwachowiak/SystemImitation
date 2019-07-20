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
                    <div onClick={e => this.close(e)}>+</div>
                    {/*^ wyłączanie folderu, krzyżyk, obrócić go z pomocą transform: rotate(45deg)*/}
                </header>
                <aside>
                    <ul>
                        {/*wczytywanie elementów li z folderList z pomocą .map*/}
                    </ul>
                </aside>
                <main>
                    {/*aplikacja pogodowa ???*/}
                </main>
                <footer></footer>
            </div>
        );

        const folderIcon = (<div onDoubleClick={e => this.open(e)}>
            <div></div>
            {/*https://www.google.pl/search?biw=1366&bih=572&tbm=isch&q=windows+98+folder&chips=q:windows+98+folder,online_chips:folder+icon&sa=X&ved=0ahUKEwjL14zmosPjAhWmxcQBHUKMDHcQ4lYIMSgG#imgrc=IpgbxY3Fn4sqEM:*/}
            {/*div + dwa pseudoelementy*/}
            {/*z pomocą :before i :after stworzyć dwa pseudoelementy*/}
            {/*oraz z pomocą transform: skewX(25deg); zrobić z nich dwa romby powyżej powyższego diva*/}
            <p>Pliki</p>
        </div>);

        return (
            <Fragment>
                {folderIcon}
                {this.state.clicked ? folder : null}
            </Fragment>
        );
    }
}

