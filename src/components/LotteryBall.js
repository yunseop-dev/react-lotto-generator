import styled from "styled-components";

const LotteryBall = styled.div`
  display: inline-block;
  position: relative;
  width: 50px;
  height: 50px;
  border: 4px solid black;
  border-radius: 50%;
  text-align: center;
  font-size: 25px;
  line-height: 2;
  color: white;
  background: ${(props) => {
    switch (props.color) {
      case "red":
        return "rgb(227, 47, 25)";
      case "sky":
        return "rgb(43, 189, 244)";
      case "yellow":
        return "rgb(240, 178, 58)";
      case "purple":
        return "rgb(115, 57, 133)";
      case "green":
        return "rgb(162, 204, 115)";
      case "pink":
      default:
        return "rgb(237, 102, 130)";
    }
  }};

  &::before {
    content: "";
    position: absolute;
    transform: rotate(-30deg);
    top: 5px;
    left: 8px;
    width: 12px;
    height: 6px;
    background: #fff;
    border-radius: 12px / 6px;
  }

  &::after {
    content: " ";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 50px;
    height: 50px;
    box-shadow: inset -4px -2px 0 1px rgba(27, 28, 31, 0.1);
    border-radius: 50%;
  }
`;

export default LotteryBall;