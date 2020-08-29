import React from "react";
import _ from "lodash";
import LotteryBall from "./components/LotteryBall";
import styled from "styled-components";

const ballColors = ["red", "sky", "yellow", "purple", "green", "pink"];

const Container = styled.div`
  margin: 0 auto;
  text-align: center;
  max-width: 960px;
`

function App() {
  const expectedNumbers = _.chain(1).range(46).sampleSize(6).sortBy().value();
  return (
    <Container>
      <h2>Hello React Lotto Generator!</h2>
      <div>
        {expectedNumbers.map((num, i) => (
          <LotteryBall color={ballColors[i]} key={i}>{num}</LotteryBall>
        ))}
      </div>
    </Container>
  );
}

export default App;
