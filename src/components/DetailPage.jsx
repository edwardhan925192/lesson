import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';

function DetailPage(props){        
    
    let {id} = useParams(); // useParams --> {id : 1}
    let product = props.shopData[id];    

    // alert 표시 여부를 관리할 state
    const [showAlert, setShowAlert] = useState(true);
    const [inputValue, setInputValue] = useState('');
    const [hasError, setHasError] = useState(false); // 에러 상태 추가
    const [count, setCount] = useState(0);

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

    // ---------------------------------------------
    // inputValue를 감시하는 useEffect
    // ---------------------------------------------    
    useEffect(() => {
        // 정규식을 사용해 숫자 포함 여부 확인
        const hasNumber = /[0-9]/.test(inputValue);
        
        if (hasNumber) {
            setHasError(true);
        } else {
            setHasError(false);
        }
    }, [inputValue]); // inputValue가 변경될 때마다 실행

    return (
        <div className="container">
        {/* if 구문이랑 똑같음 */}
        {
        showAlert && (
        <div className='alert alert-warning'>
            2초 이내 구매시 90% 할인합니다 ㅎㅎ. 
        </div>
        )}

        <input 
        onChange={(e) => setInputValue(e.target.value)}  
        placeholder="단어를 입력하세요" 
        value={inputValue}
        />

        {/* 에러 메시지 - 단순하게 구현 */}
        {hasError && (
        <div style={{color: 'red', marginTop: '5px'}}>
            숫자는 입력할 수 없습니다!
        </div>
        )}

        <div className="row">
        <button onClick={()=>{setCount(count+1)}}>카운트 버튼</button>
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
      </div> 
    )
  }

export default DetailPage
