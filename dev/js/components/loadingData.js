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
                <main>
                    <section>
                        <article>
                            <p>{dataToLoad.murica}</p>
                            <p>{dataToLoad.lapsus}</p>
                            <p>{dataToLoad.cocaine}</p>
                            <p>{dataToLoad.fsharp}</p>
                            <p>{dataToLoad.aminor}</p>
                            <p>{dataToLoad.memoryRemains}</p>
                            <p>{dataToLoad.SB}</p>
                            <p>{dataToLoad.sata1} </p>
                            <p>{dataToLoad.sata2}
                            {this.state.sataSpan ? <span>{dataToLoad.sata2span}</span> : null}
                            </p>
                            <p>{this.state.inspector ? dataToLoad.gadget : null}</p>
                            <>{this.state.unholy ? <><p>{dataToLoad.satan}</p> <p>{dataToLoad.lucek}</p></> : null}</>
                        </article>
                        <div>{this.state.cursor}</div>
                    </section>
                </main>
                <footer>
                    <div className="ld-footer">&copy; Copyright by Łukasz Wachowiak</div>
                </footer>
            </div>
        );

        return (
            loa
        );
    }
}

// export default LoadingData;