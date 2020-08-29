import styled from "styled-components";

const LotteryBall = styled.div`
  display: inline-block;
  position: relative;
  margin: 4px;
  width: 50px;
  height: 50px;
  border: 4px solid black;
  border-radius: 50%;
  text-align: center;
  font-size: 25px;
  line-height: 2;
  color: white;
  animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;

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

  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
  }
`;

export default LotteryBall;
