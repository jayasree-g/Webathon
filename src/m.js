import React from "react";
import {Link} from 'react-router-dom'
function Html(){
 return(
   <div>
<h1>FIND YOUR MENTOR</h1>

<div class="filter-options">
<form>
  <input type="text" placeholder="Search by name"/>
  <select>
    <option selected disabled>Filter by expertise</option>
    <option value="finance">Finance</option>
    <option value="marketing">Marketing</option>
    <option value="tech">Tech</option>
    <option value="tech">Other</option>
  </select>
  <select>
    <option selected disabled>Communication mode</option>
    <option value="finance">Google meets</option>
    <option value="marketing">Emails</option>
    <option value="tech">Phone calls</option>
  </select>
  <select>
    <option selected disabled>Language of Communication</option>
    <option value="finance">English</option>
    <option value="marketing">Telugu</option>
    <option value="marketing">Hindi</option>
    <option value="tech">French</option>
    <option value="marketing">Others</option>
  </select>
  <button type="submit">Search</button>
</form>
</div>
<div class="mentor-directory">
  <div class="mentor-card">
    <img src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="Avatar" />

    <h2>SARAH</h2>
    <p>Expertise: Finance, Marketing</p>
    <p>Experience: Hosted multiple workshops on financial planning and marketing strategies for entrepreneurs.</p>
    <div className='mentor-request'><Link to='/reqbutton'><button type="button">Request Mentorship</button></Link></div>
  </div>
  <div class="mentor-card">
    <img src="https://img.etimg.com/thumb/msid-98316635,width-1200,height-900,imgsize-59550,resizemode-8,quality-100/prime/money-and-markets/meet-avadhut-sathe-the-man-on-a-mission-to-make-every-indian-wealthy-via-stock-trading.jpg" alt="Avatar" />

    <h2>RAMESH</h2>
    <p>Expertise: Sales and Business Development</p>
    <p>Experience: Served as a judge for various startup competitions, providing feedback and advice to participating entrepreneurs.</p>
    <button onclick="window.location.href='request.html';" class="mentor-request">Request Mentorship</button>
  </div>
  <div class="mentor-card">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLfWkaTg3bAs6sy8xWRwKBVAf2Vs8T1nyJFg&usqp=CAU" alt="Avatar" />
    <h2>WILLIAMS</h2>
    <p>Expertise: Innovation and Design Thinking</p>
    <p>Experience: Developed and implemented innovative marketing campaigns for startups, resulting in increased user acquisition and revenue.</p>
    <button onclick="window.location.href='request.html';" class="mentor-request">Request Mentorship</button>
  </div>
  <div class="mentor-card">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKjSr1CrQXa8SlN0ZRqHbx___fjpWsJhERQA&usqp=CAU" alt="Avatar" />
    <h2>ROBERT S</h2>
    <p>Expertise: E-commerce and Online Retail</p>
    <p>Experience: Conducted market research and analysis for various startups, providing valuable insights into consumer behavior and industry trends.</p>
    <button onclick="window.location.href='request.html';" class="mentor-request">Request Mentorship</button>
  </div>
  <div class="mentor-card">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6i8DMEVGgOMroNG_ef48R1Y42JHvsu_GFUw&usqp=CAU" alt="Avatar" />
    <h2>NAROD</h2>
    <p>Expertise: International Business and Global Expansion</p>
    <p>Experience: Created and taught courses on startup investing and marketing at local universities and community colleges.</p>
    <button onclick="window.location.href='request.html';" class="mentor-request">Request Mentorship</button>
  </div>
  <div class="mentor-card">
    <img src="https://images.unsplash.com/profile-fb-1527869404-f8a097e99c32.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128" alt="Avatar" />
    <h2>OLIVIA</h2>
    <p>Expertise: Customer Experience and User Design</p>
    <p>Experience: 15+ years in creating a seamless and intuitive user experience involves understanding the customer journey from start to finish.</p>
    <button onclick="window.location.href='request.html';" class="mentor-request">Request Mentorship</button>
  </div>
  <div class="mentor-card">
    <img src="https://pbs.twimg.com/profile_images/1346200826998644736/GXKFXDl7_400x400.jpg" alt="Avatar" />
    <h2>MICHEAL</h2>
    <p>Expertise: Intellectual Property Law</p>
    <p>Experience: Collaborated with various startup incubators and accelerators to provide mentorship and guidance to their portfolio companies.</p>
    <button onclick="window.location.href='request.html';" class="mentor-request">Request Mentorship</button>
  </div>
  <div class="mentor-card">
    <img src="data:image/jpeg;base64,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" alt="Avatar" />

    <h2>AVA</h2>
    <p>Expertise: Leadership and Management</p>
    <p>Experience: Spoken at numerous conferences and events on topics such as startup investing, marketing, and entrepreneurship.</p>
    <button onclick="window.location.href='request.html';" class="mentor-request">Request Mentorship</button>
  </div>
  <div class="mentor-card">
    <img src="https://randomuser.me/api/portraits/women/90.jpg" alt="Avatar" />
    <h2>SOPHIA</h2>
    <p>Expertise: Operations and Supply Chain Management</p>
    <p>Experience: 10+ years in Implementing inventory management systems to minimize waste and maximize profitability</p>
    <button onclick="window.location.href='request.html';" class="mentor-request">Request Mentorship</button>
  </div>
  <div class="mentor-card">
    <img src="https://in.godaddy.com/blog/wp-content/uploads/Falguni-Nayar-min.png" alt="Avatar" />
    <h2>BHAVISHYA</h2>
    <p>Expertise: Product Management</p>
    <p>Experience: Co-founded and successfully exited two tech startups, providing valuable insights and guidance to other entrepreneurs.</p>
    <button onclick="window.location.href='request.html';" class="mentor-request">Request Mentorship</button>
  </div>
</div>
<script src="./mentor.js"></script>
</div>
 )
}

export default Html;