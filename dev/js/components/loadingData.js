import React, {Component} from "react";
import dataToLoad from "../data/dataToLoad";

function Header(){
    return (
        <header className="ld-bottomSpace ld-logo-container">
            <div className="ld-upSpace">
                <div className="ld-logo-up-triangle">
                    <div className="ld-logo"></div>
                </div>
                <div className="ld-logo-down-triangle">
                    <div className="ld-logo"></div>
                    <div className="ld-logo"></div>
                </div>
            </div>
            <h1 className="megatron ld-upSpace">American <br/> Megatron</h1>
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
            <div className="ld-container">
                <Header/>
                <main>
                    <section>
                        <article>
                            <p className="ld-bottomSpace">{dataToLoad.murica}</p>
                            <p>{dataToLoad.lapsus} <br/> {dataToLoad.cpu}</p>
                            <p className="ld-p-indent ld-bottomSpace">{dataToLoad.cocaine}</p>
                            <p>{dataToLoad.fsharp}</p>
                            <p>{dataToLoad.aminor}</p>
                            <p className="ld-bottomSpace">{dataToLoad.memoryRemains}</p>
                            <p className="ld-bottomSpace">{dataToLoad.SB}</p>
                            <p>{dataToLoad.sata1} </p>
                            <p className="ld-bottomSpace">{dataToLoad.sata2}
                            {this.state.sataSpan ? <span>{dataToLoad.sata2span}</span> : null}
                            </p>
                            <p >{this.state.inspector ? dataToLoad.gadget : null}</p>
                            <>{this.state.unholy ? <><p>{dataToLoad.satan}</p> <p>{dataToLoad.lucek}</p></> : null}</>
                        </article>
                        <div className="ld-cursor">{this.state.cursor}</div>
                    </section>
                </main>
                <footer className="ld-footer">
                    <div className="ld-copyright">&copy; Copyright by Łukasz Wachowiak</div>
                </footer>
            </div>
        );

        return (
            loa
        );
    }
}

// export default LoadingData;