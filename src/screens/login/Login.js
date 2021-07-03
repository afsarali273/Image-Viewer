import React, {Component} from 'react';
import Header from "../../common/header/Header";
import {Button, Card, CardContent, FormControl, FormHelperText, Input, InputLabel} from "@material-ui/core";
import '../login/Login.css'
import Typography from "@material-ui/core/Typography";

const validUserName ="afsar";
const validPassword = "password";
const accessToken = "EAALurOZCNMDUBACeLIHhodyWZA23Skm3XBdZCi5HsXMw9SR8NnGM818vFJ6ZCTyher88EeMCppoRLbQEJYRKyNue1lbiv1ftQl0kzGz23X467vVCQKvX3BxuZBMmlQWKn2nlv6yqxdvZABWamlgURB8gwxeiZB1WZCmmPjgKWOJZAbYSY8Yk89urUzdOkbuGPlhrpOs4GGeSraP7ZCn77GZCrMWDURAAh7Nu2fP9Y2YZBLschWvZAUxq4NRAN"
class Login extends Component {

    constructor(props) {
        super(props);
        this.state= {
            username: "",
            password: "",
            usernameRequired: "dispNone",
            passwordRequired: "dispNone",
            authenticationErrorRequired : "dispNone",
            isLoggedIn:"false",
        }
    }

    loginClickHandler = () => {
        this.state.username === "" ? this.setState({usernameRequired: "dispBlock"}) :
            this.setState({usernameRequired: "dispNone"})

        this.state.password === "" ? this.setState({passwordRequired: "dispBlock"}) :
            this.setState({passwordRequired: "dispNone"})

        if(this.state.username !== "" && this.state.password !== "" ){
            if(this.state.username === validUserName && this.state.password === validPassword){
                sessionStorage.setItem('access-token', accessToken);
                sessionStorage.setItem('isLoggedIn', 'true');
                this.state.isLoggedIn = "true"
                this.props.history.push('/home');
            }else{
                this.setState({authenticationErrorRequired: "dispBlock"})
            }
        }
    }

    inputUsernameChangeHandler = (e) => {
        this.setState({username: e.target.value})
    };

    inputPasswordChangeHandler = (e) => {
        this.setState({password: e.target.value})
    };


    render() {
        //const isLoggedIn = sessionStorage.getItem("isLoggedIn");
        return (
            <div>
                <Header isLoggedIn={this.isLoggedIn}/>
                <div>
                    <div>
                        <Card className={"login-card"}>
                            <CardContent className={"card-content"}>
                                <Typography variant={"h6"}>
                                    LOGIN
                                </Typography>

                                <FormControl required>
                                    <InputLabel htmlFor={"username"}> Username</InputLabel>
                                    <Input id={"username"} type={"text"}
                                           username={this.state.username}
                                           onChange={this.inputUsernameChangeHandler}
                                    />
                                    <FormHelperText className={this.state.usernameRequired}>
                                <span className={"red"}>
                                  required
                                </span>
                                    </FormHelperText>
                                </FormControl> <br/><br/>

                                <FormControl required>
                                    <InputLabel htmlFor={"password"}> Password</InputLabel>
                                    <Input id={"password"} type={"password"}
                                           password={this.state.password}
                                           onChange={this.inputPasswordChangeHandler}
                                    />

                                <FormHelperText className={this.state.passwordRequired}>
                                <span className={"red"}>
                                  required
                                </span>
                                </FormHelperText>

                                <FormHelperText className={this.state.authenticationErrorRequired}>
                                <span className={"red"}>
                                  Incorrect username and/or password
                                </span>
                               </FormHelperText>
                                </FormControl> <br/> <br/>
                                <Button variant={"contained"} color={"primary"}
                                        onClick={this.loginClickHandler}> Login</Button>
                            </CardContent>
                        </Card>
                    </div>
                    {/*End of Login Section*/}
                    Login Page
                </div>
            </div>
        )
    }

}

export default Login;