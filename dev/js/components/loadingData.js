import React, {Component} from "react";
import dataToLoad from "../data/dataToLoad";

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
            }), 750);

        // this.timeoutOne = setTimeout( () =>
        //     this.setState({
        //     }), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timeInterval);
    }

    render(){
        const loa = (
            <div className="datas">
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
                        {/*this.state.sataSpan === "" ? <span>{dataToLoad.sata2span}</span> : null*/}
                    </li>
                    {/*<li>{this.state.inspector === "" ? dataToLoad.gadget : null}</li>*/}
                    {/*<li>{this.state.unholy === "" ? dataToLoad.satan <br/> dataToLoad.lucek : null}</li>*/}
                </ul>
                <div>{this.state.cursor}</div>
            </div>
        );

        return (
            loa
        );
    }
}

// export default LoadingData;