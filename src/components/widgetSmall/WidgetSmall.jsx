import React from "react";
import "./widgetSmall.css";
import {Visibility} from "@material-ui/icons";
import icon from "./img/avatar.jpg";
import icon2 from "./img/1.jpg"
import icon3 from "./img/2.jpg"
import icon4 from "./img/3.jpg"
import icon5 from "./img/4.jpg"
import icon6 from "./img/5.jpg"

const WidgetSmall = () => {
    return ( 
         
        <div className="widgetSm">
            <span className="widgetSmTitle">New Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                  <img src={icon} alt="avatar" className="widgetSmImg" />
                  <div className="widgetSmUser">
                    <span className="widgetSmUsername">Alex Simon</span>
                    <span className="widgetSmUsernameTitle">Software Engineer</span>
                  </div> 
                  <button className="widgetSmButtom">
                        <Visibility className="widgetSmIcon" />
                        Display
                  </button>       
                </li>  
                
                <li className="widgetSmListItem">
                  <img src={icon2} alt="avatar" className="widgetSmImg" />
                  <div className="widgetSmUser">
                    <span className="widgetSmUsername">Andy Thompson</span>
                    <span className="widgetSmUsernameTitle">Software Engineer</span>
                  </div> 
                  <button className="widgetSmButtom">
                        <Visibility className="widgetSmIcon"  />
                        Display
                  </button>       
                </li>

                <li className="widgetSmListItem">
                  <img src={icon3} alt="avatar" className="widgetSmImg" />
                  <div className="widgetSmUser">
                    <span className="widgetSmUsername">Prince Jacobs</span>
                    <span className="widgetSmUsernameTitle">FullStack Engineer</span>
                  </div> 
                  <button className="widgetSmButtom">
                        <Visibility className="widgetSmIcon"  />
                        Display
                  </button>       
                </li>

                <li className="widgetSmListItem">
                  <img src={icon4} alt="avatar" className="widgetSmImg" />
                  <div className="widgetSmUser">
                    <span className="widgetSmUsername">Allen Johnson</span>
                    <span className="widgetSmUsernameTitle">Frontend Engineer</span>
                  </div> 
                  <button className="widgetSmButtom">
                        <Visibility className="widgetSmIcon"  />
                        Display
                  </button>       
                </li>

                <li className="widgetSmListItem">
                  <img src={icon5} alt="avatar" className="widgetSmImg" />
                  <div className="widgetSmUser">
                    <span className="widgetSmUsername">Yolanda Adams</span>
                    <span className="widgetSmUsernameTitle">UX/UI Engineer</span>
                  </div> 
                  <button className="widgetSmButtom">
                        <Visibility className="widgetSmIcon"  />
                        Display
                  </button>       
                </li>
            </ul>
        </div>
     );
}
 
export default WidgetSmall;
