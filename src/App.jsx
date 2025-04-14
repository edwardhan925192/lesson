import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import axios from 'axios';
import initialShopData  from './data';
import MainPage from './components/pages/MainPage';
import DetailPage from './components/pages/DetailPages';
import './App.css';


function App(){

  const [shopData, setshopData] = useState(initialShopData);
  const [click, setClick] = useState(0);

  // 추가 데이터를 가져와서 상태를 업데이트하는 함수
  const fetchMoreData = () => {
    axios.get(`https://codingapple1.github.io/shop/data${2+click}.json`)
      .then((결과) => {
        // 기존 데이터와 새 데이터를 합칩니다
        setshopData([...shopData, ...결과.data]);        
      })
      .catch((오류) => {
        console.log('데이터 가져오기 실패함:', 오류);
      });
  };

  const clickChange = () =>{
    setClick(click+1)
  }

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
        <Route path="/" element={ <MainPage shopData = {shopData} fetchMoreData = {fetchMoreData} clickChange = {clickChange} click = {click}/> } />        
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
