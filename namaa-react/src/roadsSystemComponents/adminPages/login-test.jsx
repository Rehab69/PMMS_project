import React, { Component } from 'react';
import {  Redirect } from 'react-router-dom'
import Joi from 'joi-browser';


class Login extends Component {
    state = {
        redirectToRefer: false,
        email: "",
        password: "",
        error: {}
    }
    //--------------------Validate using Joi -------------------------//
    schema = Joi.object().keys({
        email: Joi.string().required(),
        password: Joi.string().min(8).required()
    });
    ////using Joi validate function
    validate = () => {
        const data = { ...this.state }
        delete data.error;
        const res = Joi.validate(data, this.schema, { abortEarly: false })
        if (res.error) {
            const error = {}

            for (const detail of res.error.details) {
                error[detail.path[0]] = detail.message;
                this.setState({ error })

            }
            return false
        }
        return true


    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(e)
        if (this.validate()) {
        }
        else {
            console.log("Not Submit")
        }
    }



    handleChange = (e) => {
        // console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    login = () => {
        this.props.fakeAuth.authenticate(() => {
            console.log("in login")
            this.setState(() => ({
                redirectToRefer: true
            }))
        })
        console.log(this.state)
    }
    render() {
        const { redirectToRefer } = this.state;

        if (redirectToRefer === true&&this.state.email==="admin") {
            return (
                <Redirect to="/admin" />
            )
        }else if(redirectToRefer === true&&this.state.email==="analyst") {
            return (
                <Redirect to="/analyst" />
            )
        }

        return (
            <>
                <h1 style={{ color: 'white' }}>Login Page</h1>
                <form>
                    <div className="form-group">
                        <label className="font-weight-bold" htmlFor="email">User Name or E-mail Address</label>
                        <input
                            id="email"
                            name="email"
                            value={this.state.name}
                            className="form-control"
                            onChange={this.handleChange}
                            type="text"
                            autoFocus
                        ></input>
                        {this.state.error.email && <span className="errorSpan">{"*" + this.state.error.email}</span>}
                        <br />

                        <label className="font-weight-bold" htmlFor="password">Password</label>
                        <input
                            id="password"
                            name="password"
                            value={this.state.password}
                            className="form-control"
                            onChange={this.handleChange}
                            type="password"
                        ></input>
                        {this.state.error.password && <div><span className="errorSpan">{"*" + this.state.error.password}</span><br /></div>}
                        <br />
                        <div className="signUp">
                         
                <span  className="btn btn-primary" onClick={this.login}>Login here</span>
                        </div>
                        <br />
                    </div>
                </form>
            </>
        );
    }
}

export default Login;