import React from "react"
import "./topbar.css"
import {NotificationsNone , Language ,Settings} from "@material-ui/icons";
import icon from "./images/Nkanyi.jpg"

const Topbar = () => {

    return (  
        <div className="topbar">
           <div className="topbarWrapper">
               <div className="topLeft">
                  <span className="logo">Admin</span>
               </div>
               <div className="topRight">
                 <div className="topbarIconContainer">
                     <NotificationsNone />
                     <span className="topIconBadge">2</span>
                 </div>
                 <div className="topbarIconContainer">
                     <Language />
                     <span className="topIconBadge">2</span>
                 </div>
                 <div className="topbarIconContainer">
                     <Settings />
                 </div>
                 <img src={icon} alt="avatar" className="topAvatar" />
               </div>
           </div>         
        </div>
    );
}
 
export default Topbar;