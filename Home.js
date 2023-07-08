import React from "react";
import "./Home.css";
import UserList from './succsto';


function Home() {
  return (
    <div className="homepage">
      <header>
        <img className="log" src="https://st2.depositphotos.com/5142301/10787/v/450/depositphotos_107872392-stock-illustration-p-letter-logo-with-green.jpg" alt="Girl in a jacket"></img>
        <h1 className="header">Pitch Pro</h1>
        <div className="link">
      <a href='http://127.0.0.1:5500/src/template/mentor.html'><button className="bt">Need guidance?</button> </a>
      <a href='http://127.0.0.1:5500/src/template/event.html'><button className="bt">Events</button></a>
      <a href='http://127.0.0.1:5500/src/template/investors.html'><button className="bt">Find your Investor</button>  </a>
      <a href='http://127.0.0.1:5500/src/template/newsletter.html'><button className="bt">Newsletter</button></a>
      <a href='http://127.0.0.1:5500/src/template/podcasts.html'><button className="bt">Podcasts</button></a>
      <a href='http://127.0.0.1:5500/src/template/profile.html'><button className="bt">Profile</button></a>
      <a href='http://127.0.0.1:5500/src/template/fund.html'><button className="bt">Companies</button></a>
      </div>
      </header>
      
      <main>
        <div className="bg">
        <div className="mtext">
        
        </div>    
        <div class="container">
             <div className="img1" >
                <img src="https://media.licdn.com/dms/image/C5612AQHZeTq0Wb03xA/article-cover_image-shrink_720_1280/0/1520188457806?e=2147483647&v=beta&t=c5CbhiSXYW4xVXQfubQ2uGdvXaLHpMbbv2SEx9AFtTM" alt="Example Image" class="img-fluid"></img>
             </div>

            <div className="dnt">
                <h2>Welcome!</h2>
                <p>Are you an aspiring entrepreneur looking to start your own business or a seasoned entrepreneur seeking to take your business to the next level? You've come to the right place!
From developing your business idea to launching your product or service, we are here to help you succeed.

Our mission is to empower entrepreneurs with the knowledge, skills, and mindset necessary to build successful businesses.

Let's build something great together!





</p>
            </div>
        
        </div>

  </div>
    </main>
       
      <div className="inv"><UserList/></div>
  </div>
  );
}

export default Home;
