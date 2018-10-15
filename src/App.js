import React, { Component } from 'react';
import './App.css';
import Layout from '../src/Components/Layout/Layout';
import Radium, { StyleRoot } from 'radium';


class App extends Component {
  render() {
    return (
      <StyleRoot>
      <Layout>
          console.log (window.pageYOffset);
      </Layout>
      </StyleRoot>
  
    );
  }
}

export default Radium(App);
