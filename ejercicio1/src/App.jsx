import Home from './components/Home/Home'
import Reserve from './components/Reserve/Reserve'
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {


  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Reserve />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App

