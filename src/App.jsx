import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import initialShopData  from './data';
import MainPage from './components/pages/MainPage';
import DetailPage from './components/pages/DetailPage';
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
        <Route path="/detail" element={<DetailPage shopData={shopData}/>} />    
      </Routes>
    
    </>
  )
}

export default App
