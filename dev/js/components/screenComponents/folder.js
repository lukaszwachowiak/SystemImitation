import React, {Component} from "react";
import {Fragment} from "react";

export default class FolderIcon extends Component {
    constructor(props){
        super(props);
        this.state={
            clicked: false,
            close: false,
        }
    }

    open(e){
        e.preventDefault();

        this.setState({
            clicked: true,
        })
    }

    close(){
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
                        {/*wczytywanie elementów li .map*/}
                    </ul>
                </aside>
            </div>
        );

        return (
            <Fragment>
                <div onDoubleClick={e => this.open(e)}>
                    <div></div>
                    {/*z pomocą :before i :after stworzyć dwa pseudoelementy*/}
                    {/*oraz z pomocą transform: skewX(25deg); zrobić z nich dwa romby powyżej powyższego diva*/}
                    <p>Pliki</p>
                </div>
                {this.state.clicked ? folder : null}
            </Fragment>
        );
    }
}

// class Folder extends Component {
//     constructor(props){
//         super(props);
//         this.state={
//             close: false,
//         }
//     }
//
//     close(){
//         this.setState({
//             close: true,
//         })
//     }
//
//     render(){
//         const folder = (
//             <div>
//                 <header>
//                     <div onClick={e => this.close(e)}>+</div>
//                     {/*^ wyłączanie folderu, krzyżyk, obrócić go z pomocą transform: rotate(45deg)*/}
//                 </header>
//                 <aside>
//                     <ul>
//                         {/*wczytywanie elementów li .map*/}
//                     </ul>
//                 </aside>
//             </div>
//         );
//
//         return this.state.close ? null : folder;
//     }
// }
//
// export default class FolderIcon extends Component {
//     constructor(props){
//         super(props);
//         this.state={
//             clicked: false,
//         }
//     }
//
//     clicked(e){
//         e.preventDefault();
//
//         this.setState({
//             clicked: true,
//         })
//     }
//
//     render(){
//         return (
//             <Fragment>
//                 <div onDoubleClick={e => this.clicked(e)}>
//                     <div></div>
//                     {/*z pomocą :before i :after stworzyć dwa pseudoelementy*/}
//                     {/*oraz z pomocą transform: skewX(25deg); zrobić z nich dwa romby powyżej powyższego diva*/}
//                     <p>Pliki</p>
//                 </div>
//                 {this.state.clicked ? <Folder/> : null}
//             </Fragment>
//         );
//     }
// }
