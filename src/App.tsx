import React from 'react';
// import logo from './logo.svg';
import './App.css';
import NProgress from 'nprogress'

//ts安装库之前要加@types/


// export default App;

export default class App extends React.Component {

  componentWillUpdate () {
    NProgress.start()
  }

  componentDidUpdate () {
    NProgress.done()
  } 

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
      </div>
    );
  }
}