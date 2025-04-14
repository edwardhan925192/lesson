import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Tab } from 'bootstrap';

function DetailPage(props){        
    
    let {id} = useParams(); // useParams --> {id : 1}
    let product = props.shopData[id];    
    
    const [showAlert, setShowAlert] = useState(true);
    const [tab, setTab] = useState(0);
    

    useEffect(() => {
        // 2초 후에 showAlert를 false로 변경
        const timer = setTimeout(() => {
            setShowAlert(false);
        }, 2000);
        
        //만약에 inputValue에 숫자가 있으면 에러가 있다고 말하기.
        // 컴포넌트가 언마운트될 때 타이머 정리
        return () => {
            clearTimeout(timer);
        }
    }, []);
    

    return (
        <div className="container">
        {/* if 구문이랑 똑같음 */}
        {
        showAlert && (
        <div className='alert alert-warning'>
            2초 이내 구매시 90% 할인합니다 ㅎㅎ. 
        </div>
        )}           


        <div className="row">        
          <div className="col-md-6">
            <img src={`https://codingapple1.github.io/shop/shoes${Number(id) + 1}.jpg`} width="100%" />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{product.title}</h4>
            <p>{product.content}</p>
            <p>{product.price}원</p>
            <button className="btn btn-danger">주문하기</button> 
          </div>
        </div>

        <Nav variant="tabs"  defaultActiveKey="link0">
          <Nav.Item>
            <Nav.Link eventKey="link0" onClick={()=>{setTab(0)}}>버튼0</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link1" onClick={()=>{setTab(1)}}>버튼1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link2" onClick={()=>{setTab(2)}}>버튼2</Nav.Link>
          </Nav.Item>
        </Nav>
        <TabContent tab={tab}/>
      </div> 
    )
  }

const TabContent = (props) => {
return(
  [ <div>내용0</div>, <div>내용1</div>, <div>내용2</div> ][props.tab]
)
};


export default DetailPage
