import React, { Component } from 'react';
import './login.style.scss'

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            email: '',
            password: ''
        })

        console.log(this.state)
    }

    render() {
        return (
            <div className="login">
                <h2>Already have an account?</h2>

                <form onSubmit={this.handleSubmit}>
                    <input name="email"
                        type="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        required />
                    <label>Email</label>
                    <input name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        required />
                    <label>Password</label>

                    <input type="submit" value="Submit Form" />
                </form>
            </div>
        )
    }
}

export default Login