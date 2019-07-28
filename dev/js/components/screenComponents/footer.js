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
            <footer className="screenFooter">
                <ul className="footerStart">Start</ul>
                <div className="footerLine"></div>
                <div className="footerIcons">
                    {/*<i className="fab fa-internet-explorer"></i>*/}
                </div>
                <div className="footerLine"></div>
                <div className="footerSpace"></div>
                <div className="footerWatch">
                    <p>{this.state.date.toLocaleTimeString()}</p>
                    <p>{this.state.date.toLocaleDateString()}</p>
                </div>
            </footer>
        )
    }
}
