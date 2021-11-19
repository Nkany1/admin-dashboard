import React from "react";
import "./sidebar.css";
import {Link} from "react-router-dom"
import {LineStyle , Timeline , TrendingUp , WorkOutline , Report , PersonOutline , AttachMoney , MailOutline , Feedback , ChatBubbleOutline } from "@material-ui/icons"


const Sidebar = () => {
    return ( 
          <div className="sidebar">
            <div className="sidebarWrapper">
               <div className="sidebarMenu">
                 <h1 className="sidebarTitle">Dashboard</h1>
               <ul className="sidebarList">
                 <li className="sidebarListItem active">
                   <LineStyle className="sidebarIcon"/>
                   Home
                 </li>

                 <li className="sidebarListItem">
                   <Timeline className="sidebarIcon"/>
                   Analytics
                 </li>
                
                 <li className="sidebarListItem">
                   <TrendingUp className="sidebarIcon"/>
                   Sales
                 </li>
               </ul>
            </div>  
          </div>  

            <div className="sidebarWrapper">
               <div className="sidebarMenu">
                 <h1 className="sidebarTitle">Quick Menu</h1>
               <ul className="sidebarList">
               <Link to="/users" className="link">
                 <li className="sidebarListItem">
                   <PersonOutline className="sidebarIcon"/>
                   Users
                 </li>
                 </Link>
                
                 <Link to="/products" className="link">
                 <li className="sidebarListItem">
                   <PersonOutline className="sidebarIcon"/>
                   Products
                 </li>
                 </Link>

                 <li className="sidebarListItem">
                   <AttachMoney className="sidebarIcon"/>
                   Transactions
                 </li>

                  <li className="sidebarListItem">
                   <Report className="sidebarIcon"/>
                   Reports
                 </li>
               </ul>
            </div>  
          </div> 

            <div className="sidebarWrapper">
               <div className="sidebarMenu">
                 <h1 className="sidebarTitle">Notifications</h1>
               <ul className="sidebarList">
                 <li className="sidebarListItem">
                   <MailOutline className="sidebarIcon"/>
                   Mail
                 </li>

                 <li className="sidebarListItem">
                   <Feedback className="sidebarIcon"/>
                   Feedback
                 </li>

                 <li className="sidebarListItem">
                   <ChatBubbleOutline className="sidebarIcon"/>
                   Messages
                 </li>
               </ul>
            </div>  
          </div> 

            <div className="sidebarWrapper">
               <div className="sidebarMenu">
                 <h1 className="sidebarTitle">Staff</h1>
               <ul className="sidebarList">
                 <li className="sidebarListItem">
                   <WorkOutline className="sidebarIcon"/>
                    Manage
                 </li>

                 <li className="sidebarListItem">
                   <Timeline className="sidebarIcon"/>
                   Analytics
                 </li>

                 <li className="sidebarListItem">
                   <Report className="sidebarIcon"/>
                   Reports
                 </li>
               </ul>
            </div>  
          </div> 

        </div>
     );
}
 
export default Sidebar;