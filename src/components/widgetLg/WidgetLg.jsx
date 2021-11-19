import React from "react";
import "./widgetLg.css";
import icon from "./img/6.jpg"
import icon1 from "./img/7.jpg"
import icon2 from "./img/8.jpg"
import icon3 from "./img/9.jpg"



const WidgetLg = () => {

  const Button = ({type}) => {
    return <button className={"widgetLgButton " + type}>{type}</button>
  }

    return ( 
        <div className="widgetLg">
          <h3 className="widgetLgTitle">Latest transctions</h3>
        
          <table className="widgetLgtable">
            <tr className="widgetLgtr">
               <th className="widgetLgTh">Customer</th>
               <th className="widgetLgTh">Date</th>
               <th className="widgetLgTh">Amount</th>
               <th className="widgetLgTh">Status</th>
            </tr>
            <tr className="widgetLgTr">
              <td className="widgetLgUser">
                <img src={icon} alt="image" className="widgetLgImg" />
                  <span className="widgetLgName">John Doe</span>
                </td>
                <td className="widgetLgDate">2 June 2021</td>
                <td className="widgetLgAmount">R200.00</td>
                <td className="widgetLgStatus">
                 <Button type="Approved" />
                </td>
            </tr>

            <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src={icon1} alt="image" className="widgetLgImg" />
                <span className="widgetLgName">Ted Smith</span>
              </td>
              <td className="widgetLgDate">10 Dec 2021</td>
              <td className="widgetLgAmount">R200.00</td>
              <td className="widgetLgStatus">
               <Button type="Pending" />
              </td>
            </tr>
            
            <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src={icon2} alt="image" className="widgetLgImg" />
                <span className="widgetLgName">Ja Lee</span>
              </td>
              <td className="widgetLgDate">30 May 2021</td>
              <td className="widgetLgAmount">R200.00</td>
              <td className="widgetLgStatus">
               <Button type="Declined" />
              </td>
            </tr>

            <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src={icon3} alt="image" className="widgetLgImg" />
                <span className="widgetLgName">Robin Khan</span>
              </td>
              <td className="widgetLgDate">2 June 2021</td>
              <td className="widgetLgAmount">R1200.00</td>
              <td className="widgetLgStatus">
               <Button type="Approved" />
              </td>
          </tr>
          </table>
        
       </div>

     );
}
 
export default WidgetLg;