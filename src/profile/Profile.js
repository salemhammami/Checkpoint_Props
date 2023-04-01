import React from "react";
import PropTypes from "prop-types";
import children from "/Users/mac/Desktop/GoMyCode/checkpoints/Checkpoint_Props/checkpointprops/src/Salem.jpg";


const Profile = ({ fullName,bio,profession,handleName,myStyle,myStyle2,myStyle3,buttonStyle,imgStyle }) => {
  return (
    <div>
         <h1 style={myStyle}>{fullName}</h1>
         <p style={myStyle2}>{bio}</p>
         <h2 style={myStyle3}>{profession}</h2> 
         <img src= {children} alt='ProfileImage' style={imgStyle}/>
         <button style={buttonStyle} onClick={handleName}>Hello</button>



    </div>
  )
  }

  Profile.defaultProps={
    fullName : "Your name here",
    bio : "Your bio here",
    profession : "Your profession here",
}

Profile.propTypes = {
    fullName: PropTypes.string
}



export default Profile;
