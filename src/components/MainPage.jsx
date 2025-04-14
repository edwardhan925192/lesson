import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import axios from 'axios'
import { useState, useEffect } from 'react';

function MainPage(props){
    let navigate = useNavigate();        
    const [loading, setLoading] = useState(false);

    return (
      <div className='APP'>
        <div className='main-bg'></div>

        {/* 첫 번째 컨테이너 - 처음 3개 아이템 */}
        <div className="container">
          <div className="row">
            {props.shopData.map(function(shoe, index){  
              return (                    
                <div className="col-md-4" key={index}>
                  <img src={`https://codingapple1.github.io/shop/shoes${index + 1}.jpg`} width="80%" />
                  <h4>
                    <p onClick={() => { navigate(`/detail/${index}`) }}> {shoe.title} </p>
                  </h4>
                  <p>{shoe.price}</p>            
                </div>            
              )
            })}
          </div>

          
          {props.click <= 1 && (
            <button onClick={() => {       
              setLoading(true);                             
              props.clickChange();
              props.fetchMoreData();            
              setLoading(false);
            }}>더보기</button>
          )}

          <div>
          {loading && "로딩중입니다."}
          </div>
        </div>


      </div>
    )
}

export default MainPage
