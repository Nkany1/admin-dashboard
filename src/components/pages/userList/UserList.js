import React from "react"
import { useState } from "react"
import { DataGrid } from '@material-ui/data-grid'
import { DeleteOutlined } from "@material-ui/icons"
import {UserRows} from "../../../data"
import {Link} from "react-router-dom"
import "./userList.css"



const UserList = () => {
     
  const[data , setData] = useState(UserRows);

  const handleDelete =(id) => {
      setData(data.filter((item) => item.id !== id))
  };

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'username', headerName: 'Username', width: 160 },
    { field: 'email', headerName: 'email', width: 120 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },

    {
        field: 'transaction',
        headerName: 'Transaction',
        width: 160,
      },
      {
          field:"action",
          headerName:"Action",
          width: 150 ,
          renderCell:(param) =>{
               return(
                   <>
                   <Link to={"/user/"+param.row.id}>
                     <button className="userListEdit">Edit</button>
                   </Link>
                     <DeleteOutlined className="userListDelete" onClick={() => handleDelete(param.row.id)} />
                   </>
               )
          }
      }
 
  ];
  
 
    return ( 
        <div className="userList">
        <DataGrid
            disableSelectionOnClick
            rows={data}
            columns={columns}
            pageSize={8}
            rowsPerPageOptions={[5]}
            checkboxSelection
        />
        </div>
     );
}
 
export default UserList;