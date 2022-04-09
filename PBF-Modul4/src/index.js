import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Mahasiswa from "./container/Mahasiswa/Mahasiswa";

ReactDOM.render( 
  <Mahasiswa />,   document.getElementById('content')
  ); 


//import HelloComponent from "./component/HelloComponent";

// class Test extends React.Component { 
//   constructor(props) 
//   { 
//       super(props); 
//       this.state = { hello : "World!" }; 
//   } 

//   componentWillMount() 
//   { 
//       console.log("componentWillMount()"); 
//   } 

//   componentDidMount() 
//   { 
//       console.log("componentDidMount()"); 
//   } 

//   changeState() 
//   { 
//       this.setState({ hello : "Geek!" }); 
//   } 

//   render() 
//   { 
//       return ( 
//           <div> 
//           <h1>GeeksForGeeks.org, Hello{ this.state.hello }</h1> 
//           <h2> 
//            <a onClick={this.changeState.bind(this)}>Press Here!</a> 
//           </h2> 
//           </div>); 
//   } 

//   shouldComponentUpdate(nextProps, nextState) 
//   { 
//       console.log("shouldComponentUpdate()"); 
//       return true; 
//   } 

//   componentWillUpdate() 
//   { 
//       console.log("componentWillUpdate()"); 
//   } 

//   componentDidUpdate() 
//   { 
//       console.log("componentDidUpdate()"); 
//   } 
// }  

// class StateFullComponent extends React.Component{
//   render(){
//     return <p>StateFull Component</p>
//   }
// }



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();