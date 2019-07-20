import React, {Component} from "react";

export default class Footer extends Component {
    constructor(props){
        super(props);
        this.state={
            date: new Date(),
        }
    }

    componentDidMount() {
        this.intervalId = setInterval(()=>
            this.setState({date: new Date()}))
    }
    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render(){
        return (
            <footer>
                <ul>Start</ul>
                <div>
                    <p>{this.state.date.toLocaleTimeString()}</p>
                    <p>{this.state.date.toLocaleDateString()}</p>
                </div>
            </footer>
        )
    }
}
