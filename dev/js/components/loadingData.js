import React, {Component} from "react";
import dataToLoad from "../data/dataToLoad";

function Header(){
    return (
        <header>
            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <h1>Megatron</h1>
        </header>
    )
}

export default class LoadingData extends Component {
    constructor(props){
        super(props);
        this.state={
            cursor: "_",
            sataSpan: false,
            inspector: false,
            unholy: false,
        }
    }

    componentDidMount() {
        this.timeInterval = setInterval(() =>
            this.setState({
                cursor: this.state.cursor === "_" ? this.state.cursor === "" : "_",
            }), 500);

        this.timeoutOne = setTimeout( () =>
            this.setState({
                sataSpan: true,
            }), 1000);

        this.timeoutTwo = setTimeout( () =>
            this.setState({
                inspector: true,
            }), 2000);

        this.timeoutThree = setTimeout( () =>
            this.setState({
                unholy: true,
            }), 2500);
    }

    componentWillUnmount() {
        clearInterval(this.timeInterval);
        clearTimeout(this.timeoutOne);
        clearTimeout(this.timeoutTwo);
        clearTimeout(this.timeoutThree);
    }

    render(){
        const loa = (
            <div className="container">
                <Header/>
                <section className="datas">
                    <ul>
                        <li>
                            {dataToLoad.murica} <br/>
                            {dataToLoad.lapsus} <br/>
                            {dataToLoad.cocaine}
                        </li>
                        <hr/>
                        <li>
                            {dataToLoad.fsharp} <br/>
                            {dataToLoad.aminor} <br/>
                            {dataToLoad.memoryRemains} <br/>
                            {dataToLoad.SB} <br/>
                            {dataToLoad.sata1} <br/>
                            {dataToLoad.sata2}
                            {this.state.sataSpan ? <span>{dataToLoad.sata2span}</span> : null}
                        </li>
                        <li>{this.state.inspector ? dataToLoad.gadget : null}</li>
                        <li>{this.state.unholy ? <>{dataToLoad.satan} <br/> {dataToLoad.lucek}</> : null}</li>
                    </ul>
                    <div>{this.state.cursor}</div>
                </section>
                <footer>Copyright by Łukasz Wachowiak</footer>
            </div>
        );

        return (
            loa
        );
    }
}

// export default LoadingData;