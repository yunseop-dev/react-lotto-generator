import React from "react";
import "../css/LotteryBall.css";

export default function LotteryBall2({ color, num }) {
  return <div className={`recommended-number ${color}`}>{num}</div>;
}
