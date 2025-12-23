import React from "react";
import SuccessCard from "../components/SuccessCard";

export default function Equityrate() {
  const tipsData = {
    oneDay: { total: 10, passed: 9, failed: 1 },
    oneWeek: { total: 40, passed: 32, failed: 8 },
    oneMonth: { total: 90, passed: 67, failed: 23 },
  };

  return (
    <SuccessCard
      title="Equity Success Rate"
      tipsData={tipsData}
    />
  );
}
