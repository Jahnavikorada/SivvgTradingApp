import React from "react";
import SuccessCard from "../components/SuccessCard";
import i18n from "../../i18n";

export default function Optionsrate() {
  const tipsData = {
    oneDay: { total: 6, passed: 5, failed: 1 },
    oneWeek: { total: 20, passed: 15, failed: 5 },
    oneMonth: { total: 50, passed: 25, failed: 25 },
  };

  return (
    <SuccessCard
      title={i18n.t("options_success_rate")}
      tipsData={tipsData}
    />
  );
}
