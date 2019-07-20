import React, {Component} from "react";
import Screen from "./screen.js";

export default class LogIn extends Component {
    constructor(props){
        super(props);
        this.state={
            correctPass: "",
            isValid: false,
            error: false,
        };
    }

    handleChange(e){
        e.preventDefault();

        this.setState({
            correctPass: e.target.value,
        });
    }

    handleSubmit(e){
        e.preventDefault();

        if (this.validate()) {
            this.setState({
                isValid: true,
            })
        }
    }

    validate(){
        if (this.state.correctPass === this.props.password) {
            this.setState({
                isValid: true,
            })
        } else {
            this.setState({
                error: true,
            })
        }
    }

    render(){
        const login = (
            <div className="container">
                <header>
                    <div></div>
                    <h1>admin</h1>
                </header>
                <div>
                    <form onSubmit={e => this.handleSubmit(e)}>
                        <input
                            type="password"
                            name="password"
                            value={this.state.correctPass}
                            onChange={e => this.handleChange(e)}
                        />
                        <br/>
                        <input type="submit" value="Zaloguj się"/>
                        {/*^ albo jako <button>Zaloguj się</button>, bo może być łatwiejszy do ostylowania*/}
                    </form>
                    {this.state.error ? <p>Podane hasło jest nieprawidłowe</p> : null}
                </div>
            </div>
        );

        return this.state.isValid ? <Screen/> : login
    }
}
