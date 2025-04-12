import { Routes, Route, Link } from 'react-router-dom'

function MainPage(props){        
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
              <Link to="/detail"> {shoe.title} </Link>
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
 
