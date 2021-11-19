import React from "react"
import { useState } from "react"
import { DataGrid } from '@material-ui/data-grid'
import {ProductRows} from "../../../data"
import {Link} from "react-router-dom"
import { DeleteOutlined } from "@material-ui/icons"
import "./ProductList.css"

const ProductList = () => {
   
  const[data , setData] = useState(ProductRows)

  const handleDelete =(id) => {
    setData(data.filter((item) => item.id !== id))
};

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Name', width: 160 },
    { field: 'stock', headerName: 'Stock', width: 120 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },

    {
        field: 'price',
        headerName: 'Price',
        width: 160,
      },
      {
          field:"action",
          headerName:"Action",
          width: 150 ,
          renderCell:(param) =>{
               return(
                   <>
                   <Link to={"/product/"+param.row.id}>
                     <button className="productListEdit">Edit</button>
                   </Link>
                     <DeleteOutlined className="productListDelete" onClick={() => handleDelete(param.row.id)} />
                   </>
               )
          }
      }
 
  ];

    return (

        
        <div className="productList">
            <DataGrid
                disableSelectionOnClick
                rows={data}
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[5]}
                checkboxSelection
             />
        </div>
    )
}
 
export default ProductList;