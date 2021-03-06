import React from "react";
import "./Home.scss";
import croppedCvPicture from "../../assets/images/croppedCvPicture.png";

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="home_description">
        <h1>Hi there, I'm Santiago!</h1>
        <p>
          Welcome to my portfolio! Here you'll find my story, projects and a way
          to get in touch with me.
        </p>
        <p>
          I love making apps that are user-friendly, simple and delightful. I am
          looking for my first <strong>Frontend Development</strong> job.
        </p>
      </div>
      <div className="home_image">
        <img src={croppedCvPicture} alt="Profile" />
      </div>
    </div>
  );
};

export default Home;
