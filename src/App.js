import React from "react";
import _ from "lodash";
import LotteryBall from "./components/LotteryBall";
// import LotteryBall2 from "./components/LotteryBall2";
import LotteryBall3 from "./components/LotteryBall3";

const ballColors = ["red", "sky", "yellow", "purple", "green", "pink"];

function App() {
  const expectedNumbers = _.chain(1).range(46).sampleSize(6).sortBy().value();
  return (
    <div className="App">
      <h2>Hello React Lotto Generator!</h2>
      <div>
        {expectedNumbers.map((num, i) => (
          <LotteryBall color={ballColors[i]} key={i}>
            {num}
          </LotteryBall>
        ))}
      </div>
      <div>
        {expectedNumbers.map((num, i) => (
          // <LotteryBall2 color={ballColors[i]} num={num} key={i}></LotteryBall2>
          <LotteryBall3 color={ballColors[i]} num={num} key={i}></LotteryBall3>
        ))}
      </div>
    </div>
  );
}

export default App;
