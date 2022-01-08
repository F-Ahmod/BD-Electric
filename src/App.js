import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import SingleProduct from './pages/SingleProduct/SingleProduct';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import AuthProvider from './pages/Hooks/AuthProvaider';
import Exploreproduct from './pages/Exploreproduct/Exploreproduct';
import DashBoard from './pages/DashBoard/DashBoard';
import MyOrder from './pages/MyOrder/MyOrder';
import Review from './pages/Review/Review';
import MakeAdmin from './pages/MakeAdmin/MakeAdmin';
import NotFound from './pages/NotFound/NotFound';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import About from './pages/About/About';
import Banner2 from './pages/Banner2/Banner2';
import Clint from './pages/Clint/Clint';
import Pay from './pages/Pay/Pay';
import DReview from './pages/DReview/DReview';
import Header from './pages/Header/Header';
import ManageOrders from './pages/ManageOrders/ManageOrders';
import FindMore from './pages/FindeMore/FindMore';
import Privacy from './pages/Privacy/Privacy';
import Contact from './pages/Contact/Contact';
import Footer from './pages/Footer/Footer';
import DasBanner from './pages/DasBanner/DasBanner';
import BannerExpro from './pages/BannerExpro/BannerExpro';
import AddProduct from './pages/AddProduct/AddProduct';

function App() {
  return (
    <div className="App">
      <AuthProvider>
     
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <PrivateRoute path="/singleProduct/:id">
          <SingleProduct></SingleProduct>
        </PrivateRoute>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/register">
          <Register></Register>
        </Route>
        <Route path="/addProduct">
          <AddProduct></AddProduct>
        </Route>
        <Route  path="/exploreProduct">
          <Exploreproduct></Exploreproduct>
        </Route>
        <Route  path="/dashBoard">
          <DashBoard></DashBoard>
        </Route>
        <Route  path="/myOrder">
          <MyOrder></MyOrder>
        </Route>
        <Route  path="/review">
          <Review></Review>
        </Route>
        <Route  path="/manageOrders">
          <ManageOrders></ManageOrders>
        </Route>
        <Route  path="/about">
          <About></About>
        </Route>
        <Route  path="/makeAdmin">
          <MakeAdmin></MakeAdmin>
        </Route>
        <Route  path="/banner2">
          <Banner2></Banner2>
        </Route>
        <Route  path="/clint">
          <Clint></Clint>
        </Route>
        <Route  path="/dReview">
          <DReview></DReview>
        </Route>
        <Route  path="/pay">
          <Pay></Pay>
        </Route>
        <Route  path="/findMore">
          <FindMore></FindMore>
        </Route>
        <Route  path="/privacy">
          <Privacy></Privacy>
        </Route>
        <Route  path="/Contact">
          <Contact></Contact>
        </Route>
        <Route  path="/dasbanner">
          <DasBanner></DasBanner>
        </Route>
        <Route  path="/bannerExpro">
          <BannerExpro></BannerExpro>
        </Route>
        
        <Route  path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
        </BrowserRouter>
       
      </AuthProvider>
      
    </div>
  );
}

export default App;
