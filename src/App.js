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
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHHIiwU8uVoAk9ky8t15hYouYcWK5MANg7Ig&s"
  },
  scissors:{
    name:"Scissors",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9DJ34PdDLPC1sWlhxbKizgHh3mdeDKGQT8w&s"
  },
  paper:{
    name:"Paper",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLZvT7LN6M3cKdxHLjRP9MFHbWQwURDOZrZA&s"
  }
}
function App() {
  const [userSelect, setUserSelect] = useState(null)
  const play = (userChoice) => {
    setUserSelect(choice[userChoice]) 
  }
  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect|| { img: "https://i.namu.wiki/i/J9A5vBE6BuFBd09_MojiggkfWoci1CuuIjNf19nuSnxmfqmx4oYePJh0FWVzCmc5AIHxVoi2QWF8G5yIs_iwRA.webp" }}/>
        {/* <Box title="Computer"/> */}
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
