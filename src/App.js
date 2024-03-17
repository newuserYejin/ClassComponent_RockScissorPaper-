import { useReducer } from 'react';
import './App.css';
import Box from "./component/box"
import { useState } from 'react';

// 1. 박스 2개(타이틀, 사진, 결과)
// 2. 사용자 선택 버튼
// 3. 버튼 클릭 시 클릭 값 박스에 표시
// 4. 컴퓨터는 랜덤하게 아이템 선택
// 5. 3과 4의 결과를 비교해서 승부내기
// 6. 승패 결과에 따라 테두리 컬러 바꾸기(이기면 - 초록, 지면 - 빨강, 비기면 - 검정)

const choice = {
  rock: {
    name: "Rock",
    img: "https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day-1200x834.jpg"
  },
  scissors: {
    name: "Scissor",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZwNuMZFZH69OejlexMIWjjsNrhtWGQFGy8OkIPDEl-XxZUcZqqqKP7MuHkNbcR8xpZwM&usqp=CAU"
  },
  paper: {
    name: "Paper",
    img: "https://m.media-amazon.com/images/I/61OorFhm6SL._AC_UF894,1000_QL80_.jpg"
  }
}
function App() {
  const [userSelect, setuserSelect] = useState(null)

  const play = (userChoice) => {
    setuserSelect(choice[userChoice])
  }

  return (
    <div>
      <div className='main'>
        <Box title="YOU" item={userSelect} />
        {/* <Box title="COMPUTER" /> */}
      </div>
      <div className='main'>
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
