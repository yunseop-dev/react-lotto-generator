import React from "react";
import _ from "lodash";
import LotteryBall from "./components/LotteryBall";

const ballColors = ["red", "sky", "yellow", "purple", "green", "pink"];

function App() {
  return (
    <div className="App">
      <h2>Hello React Lotto Generator!</h2>
      <div>
        {_.chain(1)
          .range(46)
          .sampleSize(6)
          .sortBy()
          .map((num, i) => (
            <LotteryBall color={ballColors[i]} key={i}>{num}</LotteryBall>
          ))
          .value()}
      </div>
    </div>
  );
}

export default App;
