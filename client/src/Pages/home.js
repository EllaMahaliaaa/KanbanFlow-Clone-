import '../style/App.css';
import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

let myvar = 1;

function myClickHandler(){
  console.log(myvar);
  document.getElementById('summary').innerHTML = "Keep calm and Log in bro!!!" 
}
function myClickHandler2(){
  console.log(myvar);
  document.getElementById('summary').innerHTML = "SIke! You need to Create an account first!!!" 
}
//console.log(myvar);
function Home() {

  useEffect(()=>{
    fetch("/api/5")
    .then((response) => response.json().then((json)=> console.log(json))
    );
  },[]);


  return (
    <div class="split-container">
      <div class="left">
        <h1>Brello.</h1>
        <p id="summary"></p>
      </div>
      <div class="right flex flex-col">
        <h1>Get started</h1>
        <div class="flex btn-group">
          <Link className="btn" onClick={myClickHandler}> Log in</Link>
          <Link className="btn" onClick={myClickHandler2}> Sign up</Link>
        </div>
        <div class="flex btn-group">
        <Link to="/board" className="btn"> Board</Link>
        <Link to="/dashboard" className='btn'>DashBoard</Link>
        </div>

        <div class="flex flex-col justify-center bottom-absolute">
          <h3>Brello.</h3>
          <div class="privacy-stuff flex space-around">
            <a href="#Top">Privacy Policy</a>
            <span> | </span>
            <a href="#Top">Terms of use</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
