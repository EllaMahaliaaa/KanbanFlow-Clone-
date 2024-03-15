import React from 'react';
import '../style/dash.css';
const Dashboard = () => {
    return(
        <div>
    <div class="container">
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

        <section class="head">
            <div class="head-box">
                <h1 class="verticaltext">My Workspace</h1>
            </div>
        </section>
        <div class="kanban">
            <div class="kanban_column">
                <div class="kanban_column-title">Not Started</div>
                <div class="kanban_items">
                    <div contenteditable class="kanban_item-input">Do a flip</div>
                    <div class="kanban_dropzone"></div>
                </div>
                <button class="kanban_add-item" type="button">+ Add</button>
            </div>

            <div class="kanban_column">
                <div class="kanban_column-title">Progging</div>
                <div class="kanban_items">
                    <div contenteditable class="kanban_item-input">Do another flip</div>
                    <div class="kanban_dropzone"></div>
                </div>
                <button class="kanban_add-item" type="button">+ Add</button>
            </div>

            <div class="kanban_column">
                <div class="kanban_column-title">Completed</div>
                <div class="kanban_items">
                    <div contenteditable class="kanban_item-input">Prepare to flip</div>
                    <div class="kanban_dropzone"></div>
                </div>
                <button class="kanban_add-item" type="button">+ Add</button>
            </div>

        </div>

    </div>
    <script src="dash.js" type="module"></script>

        </div>
    )
}

export default Dashboard;