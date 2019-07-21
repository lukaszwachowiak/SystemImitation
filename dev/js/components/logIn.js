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
            <div className="login-container">
                <header className="login-center">
                    <div className="login-photo"></div>
                    <h1>admin</h1>
                </header>
                <div className="login-form">
                    <form onSubmit={e => this.handleSubmit(e)}>
                        <input
                            type="password"
                            name="password"
                            value={this.state.correctPass}
                            onChange={e => this.handleChange(e)}
                            className="login-password"
                        />
                        <br/>
                        <input
                            type="submit"
                            value="Zaloguj się"
                            className="login-submit"
                        />
                        {/*^ albo jako <button type="submit">Zaloguj się</button>, bo może być łatwiejszy do ostylowania*/}
                        {/*<button type="submit">Zaloguj się</button>*/}
                    </form>
                    {this.state.error ? <p>Podane hasło jest nieprawidłowe</p> : null}
                </div>
            </div>
        );

        return this.state.isValid ? <Screen/> : login
    }
}
