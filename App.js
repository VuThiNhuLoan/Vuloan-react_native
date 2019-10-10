import React,{Component} from 'react';
import {
  AppRegistry,
    Navigator
}from 'react-native';
var Home = require('./components/Home');
export default class App extends Component {
  render(){
    return(
      <Navigator
        initialRoute={{name:'Home',component:Home}}
        renderScene={(route,navigator)=>{
          if (route.component) {
            return React.createElement(route.component,{navigator,passProps:route.props})
          }
        }}
      />
    );
  }
}
