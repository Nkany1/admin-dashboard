import React from "react"
import "./featured.css"
import {ArrowDownward , ArrowUpward} from "@material-ui/icons"


const Featured = () => {
    return ( 
         
         <div className="featured">
           <div className="featuredItem">
             <span className="featuredTitle">Reveneu</span>
             <div  className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,45</span>
                    <span className="featuredMoneyRate">
                       -11,45 <ArrowDownward className="featuredIcon negative" />        
                    </span>
             </div>
             <span className="featuredSub">Compare to last month</span>
           </div>   

             <div className="featuredItem">
             <span className="featuredTitle">Sales</span>
             <div  className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,45</span>
                    <span className="featuredMoneyRate">
                       +2,45 <ArrowUpward className="featuredIcon" />        
                    </span>
             </div>
             <span className="featuredSub">Compare to last month</span>
           </div> 

            <div className="featuredItem">
             <span className="featuredTitle">Cost</span>
             <div  className="featuredMoneyContainer">
                    <span className="featuredMoney">$20,45</span>
                    <span className="featuredMoneyRate">
                       +4,45 <ArrowUpward className="featuredIcon" />        
                    </span>
             </div>
             <span className="featuredSub">Compare to last month</span>
           </div> 

         </div>
     );
}
 
export default Featured;