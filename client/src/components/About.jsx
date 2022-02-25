import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
//index.html from other project
function About() {
  return (
    <div >
            <div class="screen join-screen active">
                <div class="form">
                    <h2>Share your files securely</h2>
                    <div class="form-input">
                        <button id="sender-start-con-btn">Create share room</button> 
                    </div>
                    <div class="form-input" id="join-id">

                    </div>
                </div>
            </div>

            <div class="screen fs-screen ">
                <div class="file-input">
                    <label for="file-input">
                        Click here to Select files for sharing
                    </label>
                    <input type="file" id="file-input"></input>
                </div>
                <div class="files-list">
                    <div class="title">Shared files</div>
                    
            </div>
        </div>
        <NavLink className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
    </div>
  );
}

export default About;