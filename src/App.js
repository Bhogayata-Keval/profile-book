import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const linkedinLogo = require('./assets/linkedin.png');
const instagramLogo = require('./assets/instagram.png');
const facebookLogo = require('./assets/facebook.png');
const twitterLogo = require('./assets/twitter.png');
const quoraLogo = require('./assets/quora.png');
const githubLogo = require('./assets/github.png');
const gitlabLogo = require('./assets/gitlab.png');
const stackoverflowLogo = require('./assets/stackoverflow.png');
const wordpressLogo = require('./assets/wordpress.png');
const blogspotLogo = require('./assets/blogspot.png');
const wixsiteLogo = require('./assets/wixsite.png');

const alchemistBook = require('./assets/alchemist.jpg');
const threeMistakesBook = require('./assets/threeMistakes.jpg');
const oneIndianGirlBook = require('./assets/oneIndianGirl.jpg');
const godBankerBook = require('./assets/godBanker.jpg');
const geetaBook = require('./assets/geeta.jpg');
const ariseAwakeBook = require('./assets/ariseAwake.jpg');

function Card(props) {
  return (
  <a href={props.link}>
      <div style={{
          "width": "90%",
          "height": "200px",
          "background-color": props.backgroundColor,
          "margin": "20px",
          "borderRadius": "10px",
      }}>
      <center>
      <img src={props.logo} width={100} height={100} alt="test"
          style={{
              "marginTop": "50px"
          }} 
      />
      </center>
      </div>
  </a>
  );
}

function App() {
  
  return (
    <>
    <div class="row">
      <div class="col-md-12 main-screen">
        <center>
          <h1 class="main-title">Keval <span class="invert-title">Bhogayata</span> </h1>
        </center>
      </div>
    </div>
    <div class="row">
        <div class="col-md-3 col-sm-6 col-xs-12">
          <Card link="https://www.linkedin.com/in/bhogayatakb/" 
                backgroundColor="#0e76a8"
                logo = {linkedinLogo} />
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12">
          <Card link="https://www.instagram.com/kb_bhogayata/" 
                backgroundColor="#3f729b"
                logo = {instagramLogo} />
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12">
          <Card link="https://www.facebook.com/Keval.b.Bhogayata" 
                backgroundColor="#3b5998"
                logo = {facebookLogo} />
        </div>
      
        <div class="col-md-3 col-sm-6 col-xs-12">
        <Card link="https://twitter.com/bhogayatakb" 
                backgroundColor="#3b5998"
                logo = {twitterLogo} />
        </div>
    </div>
    <div class="row">
        <div class="col-md-3 col-sm-6 col-xs-12">
          <Card link="https://www.quora.com/profile/Keval-Bhogayata" 
                backgroundColor="#0e76a8"
                logo = {quoraLogo} />
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12">
          <Card link="https://github.com/Bhogayata-Keval" 
                backgroundColor="#3f729b"
                logo = {githubLogo} />
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12">
          <Card link="https://gitlab.com/bhogayatakb" 
                backgroundColor="#3b5998"
                logo = {gitlabLogo} />
        </div>
      
        <div class="col-md-3 col-sm-6 col-xs-12">
        <Card link="https://stackoverflow.com/users/8733427/keval-bhogayata" 
                backgroundColor="#3b5998"
                logo = {stackoverflowLogo} />
        </div>
    </div>
    <div class="row">
        <div class="col-md-3 col-sm-6 col-xs-12">
          <Card link="https://bhogayatakb.wordpress.com/" 
                backgroundColor="#0e76a8"
                logo = {wordpressLogo} />
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12">
          <Card link="http://bhogayatakb.blogspot.com/" 
                backgroundColor="#3f729b"
                logo = {blogspotLogo} />
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12">
          <Card link="https://bhogayatakb.wixsite.com/business-strategy-bl" 
                backgroundColor="#3b5998"
                logo = {wixsiteLogo} />
        </div>
    </div>
    <div class="row">
      <div class="col-md-2 col-sm12">
        <img src={alchemistBook} height="300px" style={{"margin":"20px"}}/>
      </div>
      <div class="col-md-2">
        <img src={threeMistakesBook} height="300px" style={{"margin":"20px"}}/>
      </div>
      <div class="col-md-2">
        <img src={oneIndianGirlBook} height="300px" style={{"margin":"20px"}}/>
      </div>
      <div class="col-md-2">
        <img src={godBankerBook} height="300px" style={{"margin":"20px"}}/>
      </div>
      {/* <div class="col-md-2">
        <img src={geetaBook} height="300px" style={{"margin":"20px"}}/>
      </div> */}
      <div class="col-md-2">
        <img src={ariseAwakeBook} height="300px" style={{"margin":"20px"}}/>
      </div>
    </div>
    </>
  );
  
}

export default App;
