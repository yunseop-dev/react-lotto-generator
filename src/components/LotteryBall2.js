import React from "react";
import "../css/LotteryBall.scss";

export default function LotteryBall2({ color, num }) {
  return <div className={`recommended-number ${color}`}>{num}</div>;
}
