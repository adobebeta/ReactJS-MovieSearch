import React, { Component } from 'react';
import './App.css';
import Axios from 'axios'
import MovieItem from './MovieItem';

// function App() {

class App extends Component{
  constructor(props){
    super(props)

    this.state = {rows: []}
  }

  componentDidMount(){
    this.search('her')
  }


  search = (keyword) => {
    console.log(keyword)
    var dataArray = []
    // var url = "https://api.themoviedb.org/3/search/movie?api_key=fa174c1cccf5e4f62ef464949c62b932&query=Jack+Reacher"
    var url = "https://api.themoviedb.org/3/search/movie?api_key=fa174c1cccf5e4f62ef464949c62b932&query="+ keyword;
  
    
    

    Axios.get(url).then(result=>{
      console.log("result= "+ JSON.stringify( result.data.results))

      result.data.results.forEach(item=>{  //เอาitemของแต่ละ rowยัดเข้าใน array
        item.poster_src = "https://image.tmdb.org/t/p/w185" + item.poster_path
        dataArray.push(item)
      })

      console.log("item= "+ JSON.stringify(dataArray ))

      this.setState({rows: dataArray})  //update state

    })
   
  }

  render(){
  return (
    <div className="App">
      {/* JSX (javascript + XML) */}
      <input placeholder="enter movie keyword" style={{display:'block' ,width:'100%', fontSize:24}}
      onChange= { (event) => {this.search(event.target.value)}}></input>


    {this.state.rows.map(item=> (
      
        <MovieItem movie={item}/>
      
    ))}

    </div>
  );
  }
}

export default App;
