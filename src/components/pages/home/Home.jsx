import React from "react";
import Featured from "../../../components/featuredInfo/Featured"
import Chart    from "../../../components/charts/Chart"
import {UserData} from "../../../data.js"
import "./home.css"
import WidgetSmall from "../../widgetSmall/WidgetSmall";
import WidgetLg from "../../widgetLg/WidgetLg";


const Home = () => {
    return ( 
       <div className="home">
          <Featured />
          <Chart data={UserData} title="User Analytics" grid dataKey="Active User"  />
          <div className="homeWidgets">
            <WidgetSmall />
            <WidgetLg />
          </div>
      
       </div>

     );
}
 
export default Home;