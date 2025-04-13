import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'

function MainPage(props){        

    let navigate = useNavigate()

    return (
      <div className = 'APP'>
        <div className ='main-bg'></div>
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
        </div>        
      </div>
    )
  }


//   {`/detail/${index}`}

export default MainPage
 
