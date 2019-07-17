import React, {Component} from "react";
import dataToLoad from "../data/dataToLoad";

export default class LoadingData extends Component {
    constructor(props){
        super(props);
        // console.log(dataToLoad);
        this.state={
            cursor: "|",
        }
    }

    componentDidMount() {
        this.timeInterval = setInterval(() =>
            this.setState({
                cursor: this.state.cursor === "|" ? this.state.cursor === "" : "|",
            }), 750);

        // tutaj timeouty z dataToLoad
    }

    componentWillUnmount() {
        clearInterval(this.timeInterval);
    }

    render(){
        const loa = (
            <div className="datas">
                <ul>
                    {/*tutaj ładowane będą dane jako elementy li zaimportowane z data*/}
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