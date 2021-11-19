import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar"
import Home from "./components/pages/home/Home"
import UserList from "./components/pages/userList/UserList"
import User from "./components/pages/users/User"
import NewUser from "./components/pages/NewUser/NewUser"
import ProductList from "./components/pages/Product/ProductList"
import Product from "./components/pages/Product/Product"
import {BrowserRouter as Router ,  Route , Switch} from "react-router-dom"
import "./app.css"

function App() {
  return (
    
    <Router>
       <Topbar />
       <div className="container">
           <Sidebar />
           <Switch>
             <Route exact path="/">
               <Home />
            </Route>
            <Route path="/users">
               <UserList />
            </Route>
            <Route path="/user/:userId">
               <User />
            </Route>
            <Route path="/product/:productId">
               <Product />
            </Route>
            <Route path="/newUser">
               <NewUser />
            </Route>
            <Route path="/products">
               <ProductList />
            </Route>
           </Switch>
       </div> 
    </Router>   
  );
}

export default App;
