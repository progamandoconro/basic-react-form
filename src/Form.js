import React from "react";
import firebase from 'firebase'
import FIREBASE_CONFIG from './config'

firebase.initializeApp(FIREBASE_CONFIG)



export default class Form extends React.Component {
  state = {
    email: "",
    password: ""
  };

 singIn = (email, password) => {
   firebase.auth().signInWithEmailAndPassword(email,password)
 }
  change = e => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
    this.setState({
      email: "",
      password: ""
    });
    this.props.onChange({
      email: "",
      password: ""
    });
  };

  render() {
    return (
      <form>
       
        <br />
        <input
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={this.state.password}
          onChange={e => this.change(e)}
        />
        <br />
        <button onClick={this.singIn(this.state.email,this.state.password)}>Entrar</button>
      </form>
    );
  }
}
