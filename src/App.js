import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import {
  Routes,
  Route,
  Outlet
} from "react-router-dom"
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import Privateroute from "./pages/privateroute/Privateroute";
import SiteLayout from "./components/layout/SiteLayout";
import { Grid } from "@material-ui/core";

const PrivateLayout = () => {
  return (
    <SiteLayout>
      <Privateroute>
        <header className="header">
          <Topbar />
        </header>
        <Grid container spacing={2}>
          <Grid item lg={2}>
            <Sidebar />
          </Grid>
          <Grid item lg={10}>
            <Outlet />
          </Grid>
        </Grid>
      </Privateroute>
    </SiteLayout>
  )
}

function App() {

  // const admin = JSON.parse(localStorage.getItem("applicationState")).user.currentuser.isAdmin;
  // console.log(admin);
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/newproduct" element={<NewProduct />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
