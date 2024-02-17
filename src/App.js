import logo from './logo.svg';
import './App.css';

let myvar = 1;
const inochange = 1;

function myClickHandler(){
  console.log(myvar);
  document.getElementById('summary').innerHTML = "Keep calm and Log in bro!!!" 
}
function myClickHandler2(){
  console.log(myvar);
  document.getElementById('summary').innerHTML = "SIke! You need to Create an account first!!!" 
}
//console.log(myvar);
function App() {
  return (
    <div class="split-container">
      <div class="left">
        <h1>Brello.</h1>
        <p id="summary"></p>
      </div>
      <div class="right flex flex-col">
        <h1>Get started</h1>
        <div class="flex btn-group">
          <button className="btn" onClick={myClickHandler}> Log in</button>
          <button className="btn" onClick={myClickHandler2}> Sign up</button>
        </div>

        <div class="flex flex-col justify-center bottom-absolute">
          <h3>Brello.</h3>
          <div class="privacy-stuff flex space-around">
            <a href="">Privacy Policy</a>
            <span> | </span>
            <a href="">Terms of use</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
