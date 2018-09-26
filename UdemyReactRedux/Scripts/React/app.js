import React from 'react';
import ReactDOM from 'react-dom';


//https://www.youtube.com/watch?v=bnFgGYooDCM


//ReactDOM.render(
//    <h1> Hello, world!</h1>,
//    document.getElementById('root')
//    //ok
//);


const API-KEY = 'add key here see private file in explorer'


//"const" is an ES6 concept, this value will not change it is a constant!
const App = () => {

    return <div>Hi!</div>;  //this is JSX, looks like HTML but is javascript-webpack and babel transform this code into HTML
}

//step 2

ReactDOM.render(<App />, document.querySelector('.container'));