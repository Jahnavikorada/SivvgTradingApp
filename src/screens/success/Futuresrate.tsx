import React from "react";
import SuccessCard from "../components/SuccessCard";
import i18n from "../../i18n";

export default function Futuresrate() {
  const tipsData = {
    oneDay: { total: 15, passed: 13, failed: 2 },
    oneWeek: { total: 20, passed: 15, failed: 5 },
    oneMonth: { total: 40, passed: 25, failed: 15 },
  };

  return (
    <SuccessCard
      title={i18n.t("futures_success_rate")}
      tipsData={tipsData}
    />
  );
}
