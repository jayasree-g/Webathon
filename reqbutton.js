import React from "react";

function Req(){
    <div>
    <div  className="box" >
        <h1>REQUEST MENTORSHIP</h1>
        <div className="FORM" >
        <form action=""/>
            <label for="Startup-name" class="form-control" >Startup-name:</label><br/>
            <input type="text" id="Startup-name" name="fname" value="" required /><br/><br/>

            <label for="Startup-description">Startup-description:</label><br/>
            <textarea rows="9"  cols="27"id="startup-description" required></textarea><br/><br/>

            <label for="mentor-questions" >Questions for Mentor:</label><br/>
            <textarea  rows="9" cols="27" id="mentor-questions" ></textarea>
            <br/>
            <br/>
            <button type="submit" >Submit Request</button> 
            <br/>
            <br/><br/>
          <form/>
          <br/>

        </div>
    </div>
<script src="./request.js"  class="Request" ></script>
</div>
}

export default Req;