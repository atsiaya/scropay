import { Suspense } from "react";
import SellDepositStep from "@/components/SellDepositStep";

export default function SellDepositPage() {
  return (
    <Suspense fallback={null}>
      <SellDepositStep />
    </Suspense>
  );
}
