import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios'

// function App() {

class App extends Component{
  constructor(props){
    super(props)

    
  }


  search = (keyword) => {
    var url = "https://api.themoviedb.org/3/search/movie?api_key=fa174c1cccf5e4f62ef464949c62b932&query=Jack"
    Axios.get(url).then(result=>{
      console.log(result.data)
    })
   
  }

  render(){
  return (
    <div className="App">
      <input placeholder="enter movie keyword" style={{display:'block' ,width:'100%', fontSize:24}}
      onChange= { (event) => {this.search(event.target.value)}}></input>


    </div>
  );
  }
}

export default App;
