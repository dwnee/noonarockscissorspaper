import { useState } from "react"
import './App.css';
import Box from "./component/Box"

// 1. 박스 2개(타이틀, 사진, 결과)
// 2. 가위바위보 버튼이 있다
// 3. 버튼을 클릭하면 클릭한 값이 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택이 된다
// 5. 3번 4번의 결과로 누가 이겼는지 승패를 따진다
// 6. 승패 결과에 따라 테두리 색이 바뀐다.(이기면 초록 , 지면 빨강, 비기면 검정)
const choice = {
  rock:{
    name:"Rock",
    img:"https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTEyL2pvYjk1OS1lbGVtZW50LWItMDEzNi14XzEuanBn.jpg"
  },
  scissors:{
    name:"Scissors",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbWcXvQWXfrxYNpNO3AhXdtzRrNbThKq3y-Q&s"
  },
  paper:{
    name:"Paper",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpALxO81BcGjGWz8HA0Q6j2zd0iqYGRHwRFQ&s"
  }
}
function App() {
  const [userSelect, setUserSelect] = useState(null)
  const [computerSelect, setComputerSelect] = useState(null)
  const [result,setResult] = useState("")
  const play = (userChoice) => {
    setUserSelect(choice[userChoice]) 
    let computerChoice = randomChoice()
    setComputerSelect(computerChoice)
    setResult(judgement(choice[userChoice],computerChoice))
  };
  const judgement = (user, computer) =>{
    console.log("user : ", user,", computer : " ,computer)
    // user === computer tie
    // user === rock, computer=== scissors  : user win
    // user === rock, computer === paper : user lose
    // user === scissors, computer === paper : user win 
    // user === scissors, computer === rock : user lose
    // user === papers, computer === rock : user win 
    // user === papers, computer === scissors : user lose 

    if(user.name === computer.name){
      return "tie"
    } else if(user.name === "Rock") return computer.name==="Scissors"?"win":"lose"
    else if(user.name === "Scissors") return computer.name==="Paper"?"win":"lose"
    else if(user.name === "Paper") return computer.name==="Rock"?"win":"lose"
  }

  const randomChoice=()=>{
    let itemArray = Object.keys(choice);
    console.log("item array : ", itemArray)
    let randomItem = Math.floor(Math.random()*itemArray.length);
    let final = itemArray[randomItem]
    console.log("final", final)
    return choice[final]
  }
  return (
    <div>
      <h1>가위바위보 게임</h1>
      <div className="main">
        <Box title="You" item={
          userSelect|| { img: "https://i.namu.wiki/i/J9A5vBE6BuFBd09_MojiggkfWoci1CuuIjNf19nuSnxmfqmx4oYePJh0FWVzCmc5AIHxVoi2QWF8G5yIs_iwRA.webp" }
          } 
          result={result}/>
        <Box title="Computer" item={computerSelect|| { img: "https://i.namu.wiki/i/J9A5vBE6BuFBd09_MojiggkfWoci1CuuIjNf19nuSnxmfqmx4oYePJh0FWVzCmc5AIHxVoi2QWF8G5yIs_iwRA.webp"}} result={result}/>
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbWcXvQWXfrxYNpNO3AhXdtzRrNbThKq3y-Q&s"/></button>
        <button onClick={() => play("rock")}><img src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTEyL2pvYjk1OS1lbGVtZW50LWItMDEzNi14XzEuanBn.jpg"/></button>
        <button onClick={() => play("paper")}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpALxO81BcGjGWz8HA0Q6j2zd0iqYGRHwRFQ&s"/></button>
      </div>
    </div>
  );
}

export default App;
