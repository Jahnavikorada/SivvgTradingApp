import React from "react";
import SuccessCard from "../components/SuccessCard";

export default function Optionsrate() {
  const tipsData = {
    oneDay: { total: 6, passed: 5, failed: 1 },
    oneWeek: { total: 20, passed: 15, failed: 5 },
    oneMonth: { total: 50, passed: 25, failed: 25 },
  };

  return (
    <SuccessCard
      title="Options Success Rate"
      tipsData={tipsData}
    />
  );
}
