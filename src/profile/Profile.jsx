import React from 'react'
import PropTypes from 'prop-types'
function Profile({ handleName, fullName, bio, profession, children}) {
  return (
    <div style={{display:"flex",flexDirection:"column",background:'red'}}>
        {children}
        <p style={{color : fullName === undefined ? "gray" : "black"}} onClick={handleName}>fullName:{fullName}</p>
        <p style={{color : bio === undefined ? "gray" : "black"}}>bio:{bio}</p>
        <p style={{color : profession === undefined ? "gray" : "black"}}>profession:{profession}</p>
    </div>
  )
}
Profile.defaultProps={
    fullName:"Fakhfakh fedi ",
    bio:"I'm a high school student in nabeul.",
    profession:"still a student"
}
Profile.PropTypes={
    fullName:PropTypes.string.isRequired,
    bio:PropTypes.string.isRequired,
    profession:PropTypes.string.isRequired
}
export default Profile