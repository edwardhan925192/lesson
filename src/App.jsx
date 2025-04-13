import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom'
import initialShopData  from './data';
import MainPage from './components/pages/MainPage';
import DetailPage from './components/pages/DetailPages';
import './App.css';

function App(){

  const [shopData, setshopData] = useState(initialShopData);

  return (    
    
    <>    
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    
    
      <Routes>
        <Route path="/" element={ <MainPage shopData = {shopData}/> } />        
        <Route path="/detail/:id" element={<DetailPage shopData={shopData}/>} />
        <Route path="/event" element={ <About/> } >  
          <Route path="one" element={ <div>첫 주문시 1,000원 할인</div> } />
          <Route path="two" element={ <div>생일기념쿠폰</div> } />
        </Route> 
      </Routes>
    
    </>
  )
}

function About(){
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}

export default App
