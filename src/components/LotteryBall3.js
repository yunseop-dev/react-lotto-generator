import React from "react";
import style from "../css/LotteryBall.module.css";

export default function LotteryBall3({ color, num }) {
  // console.log("style:", style);
  return <div className={`${style['recommended-number']} ${style[color]}`}>{num}</div>;
}
