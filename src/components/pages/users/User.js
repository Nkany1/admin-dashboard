import React from "react"
import {PermIdentity , LocationSearching , MailOutlined , Publish , PhoneAndroid , CalendarToday} from "@material-ui/icons"
import {Link} from "react-router-dom"
import "./user.css"

const User = () => {
    return ( 
        <div className="user">
         <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <Link to="/newUser">
             <button className="userAddButton">create</button>
            </Link>
         </div>
         <div className="userContainer">
           <div className="userShow">
            <div className="userShowTop">
              <img src="" alt="image" className="userShowImg" />
            
            <div className="userShowTopTitle">
                <span className="userShowUsername">Alex simon</span>
                <span className="userShowTitle">software Engineer</span>
            </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">Account details</span>
            <div className="userShowInfo">
              <PermIdentity className="useShowIcon" />
              <span className="userShowInfoTitle">allllex</span>
            </div>

            <div className="userShowInfo">
            <CalendarToday className="useShowIcon" />
            <span className="userShowInfoTitle">28-08-94</span>
          </div>
          <span className="userShowTitle">Contact details</span>
          <div className="userShowInfo">
          <PhoneAndroid className="useShowIcon" />
          <span className="userShowInfoTitle">066-3453-555</span>
        </div>

          <div className="userShowInfo">
          <MailOutlined className="ushowIcon" />
          <span className="userShowInfoTitle">alex@gmail.com</span>
        </div>

          <div className="userShowInfo">
          <LocationSearching className="useShowIcon" />
          <span className="userShowInfoTitle">Cape Town</span>
        </div>
            </div>
           </div>
           <div className="userUpdate">
           <span className="userUpdateTitle">Edit</span>
           <form className="userUpdateForm">

              <div className="userUpdateLeft">
               <div className="userUpdateItem">
                  <label>Username</label>
                  <input type="text" placeholder="alllex" className="userUpdateInput" />
               </div>
            
               <div className="userUpdateItem">
                  <label>Full Name</label>
                  <input type="text" placeholder="alex Simon" className="userUpdateInput"/>
               </div>
              
               <div className="userUpdateItem">
                  <label>Email</label>
                  <input type="text" placeholder="alex@gmail" className="userUpdateInput"/>
               </div>
              
               <div className="userUpdateItem">
                  <label>Phone</label>
                  <input type="text" placeholder="006-3456-567" className="userUpdateInput" />
               </div>
              
               <div className="userUpdateItem">
                  <label>Address</label>
                  <input type="text" placeholder="cape town" className="userUpdateInput" />
               </div>
               
              </div>
              <div className="userUpdateRight">
                <img className="userUpdateImg" src="" alt="image" />
                <label htmlFor="file"><Publish clasName="userUpdateIcon" /></label>
                <input type="file" id="file" style={{display: "none"}} />
              <button className="userUpdateButton">Update</button>
              </div>
             </form>
           </div>
         </div>
        </div>
     );
}
 
export default User;