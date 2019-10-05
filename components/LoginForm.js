import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Button,
  Text
} from "native-base";

import { connect } from "react-redux";

// Actions
// import { login } from "./redux/actions";

class LoginForm extends Component {
  state = {
    username: "",
    password: ""
  };
  handleChange = object => {
    console.log("this is the object" + object);
    this.setState(object);
  };

  handleSubmit = event => {
    alert("I should log the user in");
  };

  render() {
    const { username, password } = this.state;
    console.log(this.state);
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item>
              <Input
                name="username"
                value={username}
                placeholder="Username"
                onChangeText={username => this.handleChange({ username })}
              />
            </Item>
            <Item last>
              <Input
                value={password}
                placeholder="Password"
                name="password"
                onChangeText={password => this.handleChange({ password })}
              />
            </Item>
            <Button onPress={this.handleSubmit}>
              <Text>Login</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
export default LoginForm;
