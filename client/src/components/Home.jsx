import React from "react";

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Home</h1>
            <p>
              This Web Based File Sharing System models the functionality of 
              several other file sharing systems, namely Google Drive and OneDrive. 
              This application takes file input from users and saves them to an SQL 
              server instance, where they are downloaded from a client with the correct
              login information.

            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;