import ReactDOM from 'react-dom/client';
//import scss ở index (Vì import ở bất kì file nào khi build vẫn ra index.html)
import './assets/scss/style.scss'

//Cấu hình router dom
import {BrowserRouter,Routes,Route, NavLink, Navigate} from 'react-router-dom'

import BaiTapGioHang from './Props/BaiTapGioHang/BaiTapGioHang'
import ChangeColor from './StateDemo/ChangeColor';
import Header from './components/Header';
import HomeTemplate from './templates/HomeTemplate';
import Login from './Pages/Login';
import UserTemplate from './templates/UserTemplate';
import Register from './Pages/Register';
import Page404 from './Pages/Page404';
import Admin from './Pages/Admin';
import ReactForm from './Pages/ReactForm/ReactForm';
import ReactLifeCycle from './Pages/ReactLifeCycle/ReactLifeCycle';

//cau hinh redux
import {Provider} from "react-redux";
import {store} from './redux/store';
import ChangeNumberRedux from './DemoRedux/ChangeNumberRedux';
import ChangeCarColor from './DemoRedux/ChangeCarColor';
import ChangeFontSize from './DemoRedux/ChangeFontSize';
import BaiTapGioHangRedux from './DemoRedux/BaiTaoGioHangRedux/BaiTapGioHangRedux';
import DanhSachSanPhamRedux from './DemoRedux/BaiTaoGioHangRedux/DanhSachSanPhamRedux';


//Tạo root trên thẻ div#root
const root = ReactDOM.createRoot(document.getElementById('root'));
//JSX


root.render(
  <Provider store={store}>
    <BrowserRouter> 
    
      <Routes>
        <Route path='' element={<HomeTemplate/>}>
        <Route index element={<DanhSachSanPhamRedux/> }></Route>
        <Route path='gio-hang' element={<BaiTapGioHang /> }></Route>
        <Route path='gio-hang' element={<BaiTapGioHang/>}></Route>
        <Route path='bt-change-color' element={<ChangeColor /> }></Route>
        <Route path='react-form' element={<ReactForm/>}></Route>
        <Route path='react-life-cycle' element={<ReactLifeCycle/>}></Route>
        <Route path='redux-change-number' element={<ChangeNumberRedux/>}></Route>
        <Route path='redux-change-car' element={<ChangeCarColor/>}></Route>
        <Route path='redux-change-font-size' element={<ChangeFontSize/>}></Route>
        <Route path='redux-gio-hang' element={<BaiTapGioHangRedux/>}></Route>


        </Route>

        <Route path='user' element= {<UserTemplate/>}>
      
            <Route index element= {<Login/>}></Route>
            <Route path='login' element= {<Login/>}></Route>
            <Route path='register' element= {<Register/>}></Route>

        </Route>
        <Route path='admin' element= {<Admin/>}></Route>
        <Route path='*' element= {< Navigate to=""/>}></Route>

      </Routes>
    </BrowserRouter>
  </Provider>

);