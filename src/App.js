import React from "react";
import './App.css';
import Profile from "./profile/Profile";
import Photo from "/Users/mac/Desktop/GoMyCode/checkpoints/Checkpoint_Props/checkpointprops/src/Salem.jpg";


function App() {
  const fullName = "Salem Hammami"
  const bio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  const profession = "Graphic Designer"
  const handleName=()=> alert("Salem Hammami")
 
  //InlineCSS-Title
    const myStyle = {
      textTransform: "uppercase",
      letterSpacing:'8px',
      width:'100%',
      backgroundColor: 'black',
      color: 'white',
      textAlign: 'center',
      padding: '20px',
      fontWeight: '300'
      
    }
    //InlineCSS-Bio

    const myStyle2 = {
      color: 'grey',
      textAlign: 'center',
      width:'60%',
      fontStyle: 'italic',
    }

     //InlineCSS-Profession

     const myStyle3 = {
      color: 'black',
      textAlign: 'center',
      width:'60%',
      borderTop:'3px dotted  #dfdfdf',
      paddingTop: '20px',
    }

    //InlineCSS-Button
    const buttonStyle = {
      backgroundColor:'black',
      color : 'white',
      margin:'30px',
      padding:'20px 60px 20px 60px',
      borderRadius: '30px',
      border:'none',
      fontSize: '15px'
    
    }

    //InlineCSS-Img
    const imgStyle = {
      borderRadius: '100%',
      border:'solid 7px #eeeeee ',

    
    }

  return (
    <div>
    <Profile fullName={fullName} bio={bio} profession={profession} handleName={handleName} myStyle={myStyle} myStyle2={myStyle2} myStyle3={myStyle3}  buttonStyle={buttonStyle} imgStyle ={imgStyle}> 
    
    <img src={Photo} alt='ProfileImage' style={imgStyle}/>
    
    </Profile>
    </div>
    
  );
}

export default App;
