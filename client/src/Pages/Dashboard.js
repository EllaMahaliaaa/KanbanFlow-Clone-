import React from 'react';
import "../style/dash.css";
const Dashboard = () => {
    return(
    <div class="container">
      <head><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"/></head>
        <nav>
          <ul>
            <li><a href="#" class="logo">
              <span class="nav-item">Dashboard</span>
            </a></li>
            <li><a href="#">
              <i class="fas fa-home"></i>
              <span class="nav-item">Home</span>
            </a></li>
            <li><a href="">
              <i class="fas fa-user"></i>
              <span class="nav-item">Profile</span>
            </a></li>
            <li><a href="">
              <i class="fas fa-th-list"></i>
              <span class="nav-item">Templates</span>
            </a></li>
            <li><a href="">
              <i class="fas fa-cog"></i>
              <span class="nav-item">Settings</span>
            </a></li>
            <li><a href="">
              <i class="fas fa-question-circle"></i>
              <span class="nav-item">Help</span>
            </a></li>
            <li><a href="" class="logout">
              <i class="fas fa-sign-out-alt"></i>
              <span class="nav-item">Log out</span>
            </a></li>
          </ul>
        </nav>
   
        <section class="main">
          <section class="main-course">
            <h1>My Workspaces</h1>
            <div class="course-box">
              <ul>
                <li class="active">My Boards</li>
                <li>Views</li>
                <li>Board Settings</li>
              </ul>
              <div class="course">
                <div class="box">
                  <h3 class="box-head">Board 1</h3>
                  <button>select</button>
                  <button>rename</button>
                  <button>add members</button>
                </div>
                <div class="box">
                  <h3 class="box-head">Board 2</h3>
                  <button>select</button>
                  <button>rename</button>
                  <button>add members</button>
                </div>  
                <div class="new-box">
                  <h3 class="box-head">Create New Board</h3>
                  <button>+</button>
                  <button>add members</button>
                </div>
              </div>
            </div>
          </section>


          <section class="main-tasks">
            <h1>My Tasks</h1>
            <div class="course-box">
              <ul>
                <li class="active">In Progress</li>
                <li>Completed</li>
              </ul>
                <div class="course">
                <div class="box">
                  <h3 class="box-head">Doing</h3>
                  <ul class="vertical-list">
                    <li>These</li>
                    <li>Are</li>
                    <li>Some</li>
                    <li>Tasks</li>
                  </ul>
                </div>
                <div class="box">
                  <h3 class="box-head">To-Do</h3>
                  <ul class="vertical-list">
                    <li>These</li>
                    <li>Are</li>
                    <li>More</li>
                    <li>Tasks</li>
                  </ul>
                </div>  
                <div class="box">
                  <h3 class="box-head">Backlog</h3>
                  <ul class="vertical-list">
                    <li>Should</li>
                    <li>Have</li>
                    <li>Done</li>
                    <li>These</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    )
}

export default Dashboard;