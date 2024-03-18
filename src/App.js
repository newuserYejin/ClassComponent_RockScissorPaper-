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
    name: "rock",
    img: "https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day-1200x834.jpg"
  },
  scissors: {
    name: "scissor",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZwNuMZFZH69OejlexMIWjjsNrhtWGQFGy8OkIPDEl-XxZUcZqqqKP7MuHkNbcR8xpZwM&usqp=CAU"
  },
  paper: {
    name: "paper",
    img: "https://m.media-amazon.com/images/I/61OorFhm6SL._AC_UF894,1000_QL80_.jpg"
  }
}

function App() {
  const [userSelect, setuserSelect] = useState(null)
  const [computerSelect, setComputerSelect] = useState(null)
  const [result, setResult] = useState("")

  const play = (userChoice) => {
    setuserSelect(choice[userChoice])
    let computerChoice = randomChoice()
    setComputerSelect(computerChoice)
    setResult(judgment(choice[userChoice], computerChoice))
  }

  // user == computer 비김(tie)
  // user == rock, computer == scissor user win
  // user == rock, computer == paper user lose
  // user == paper, computer == scissor user lose
  // user == paper, computer == rock user win
  // user == scissor, computer == rock user win
  // user == scissor, computer == paper user lose

  const judgment = (user, computer) => {
    console.log("user:", user.name, "com: ", computer.name)

    if (user.name == computer.name) {
      return "tie"
    }
    else if (user.name == "rock") return computer.name == "scissor" ? "win" : "lose";
    else if (user.name == "paper") return computer.name == "scissor" ? "lose" : "win";
    else if (user.name == "scissor") return computer.name == "rock" ? "win" : "lose";
  }

  const randomChoice = () => {
    let itemArray = Object.keys(choice)
    let randomItem = Math.floor(Math.random() * itemArray.length)
    let final = itemArray[randomItem]
    return choice[final]
  }

  return (
    <div className='all'>
      <div className='main'>
        <Box title="YOU" item={userSelect} result={result} />
        <Box title="COMPUTER" item={computerSelect} result={result == "tie" ? "tie" : result == "win" ? "lose" : "win"} />
      </div>

      <div className='main buttons'>
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
