import React from "react";
//receiver.html from other project
function Contact() {
  return (
  
    <div >
		<div class="screen join-screen active">
			<div class="form">
				<h2>Share your files securely</h2>
				<div class="form-input">
					<label>Join ID</label>
					<input type="text" id="join-id"></input>
				</div>
				<div class="form-input">
					<button id="receiver-start-con-btn">Connect</button>
				</div>
			</div>
		</div>
		<div class="screen fs-screen">
			<div class="files-list">
				<div class="title">Shared files</div>
			</div>	
		</div>
  </div>
  );
}

export default Contact;