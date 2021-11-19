import React from "react"
import {Link} from "react-router-dom"
import Chart from "../../../components/charts/Chart"
import {Publish} from "@material-ui/icons"
import icon from "./img/apple.png"
import {ProductData} from "../../../data"
import "./product.css"


const Product  = () => {
    return ( 
        <div className="product">
          <div className="productTitleContainer">
            <h1 className="productTitle">product</h1>
           <Link to="/newProducts">
            <button className="productAddButton">Create</button>
           </Link>
          </div>
          <div className="productTop">
          <div className="productTopLeft">
            <Chart data={ProductData} dataKey="Sales" title="Sales Performance" />
          </div>
          <div className="productTopRight">
            <div className="productInfoTop">
             <img src={icon} alt="image" className="productInfoImg" />
             <span className="productName">Apple Airpods</span>
            </div>
            <div className="productInfoBottom">
               <div className="productInfoItem">
               <span className="productInfoItemKey">id:</span>
               <span className="productInfoItemKey">id:123</span>
            </div>  
            
            <div className="productInfoItem">
              <span className="productInfoItemKey">sales:</span>
              <span className="productInfoItemKey">3254</span>
          </div>

            <div className="productInfoItem">
              <span className="productInfoItemKey">active:</span>
              <span className="productInfoItemKey">yes</span>
            </div>

            <div className="productInfoItem">
              <span className="productInfoItemKey">inStock:</span>
              <span className="productInfoItemKey">yes</span>
            </div>
          </div>
        </div>
      </div>
    <div clsaaName="productBottom">
      <form className="productForm">
          <div className="productFormLeft">
             <label>Product Name</label>
             <input  type="text"  placeholder="Apple AirPods" />
              
             <label>In Stock</label>
             <select name="inStock" id="idStock">
                <option value="yes">Yes</option>
                <option value="No">No</option>
             </select>

             <label>Active</label>
             <select name="Active" id="idActive">
                <option value="yes">Yes</option>
                <option value="No">No</option>
             </select>

          </div>

          <div className="productFormRight">
               <div className="productUpdate"> 
               <img src={icon}  alt="image"  className="productUploding"  />
               <label for="file">
                 <Publish />
               </label>
               <input type="file" id="file" style={{display:"none"}}  />
               </div>
               <button className="productButton">update</button>
          </div>
      </form>
    </div>
  </div>
     );
}
 
export default Product ;