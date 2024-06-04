import FacebookMsg from './components/FacebookMsg';
import Example from './components/NewE';
import HomeBanner from './components/user/home/HomeBanner';
import Banner from './components/user/layout/Banner';
import LayoutUser from './components/user/layout/LayoutUser';
import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutUser />} >
          <Route index element={<Banner />} />
          <Route path='ab' element={< HomeBanner />} />
        </Route>

        {/* <div className="App">
          <Example />
          <FacebookMsg />
        </div> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
