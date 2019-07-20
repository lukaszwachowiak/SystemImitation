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
                    {this.state.date.toLocaleTimeString()} <br/>
                    {this.state.date.toLocaleDateString()}
                </div>
            </footer>
        )
    }
}
