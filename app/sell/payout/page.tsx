import { Suspense } from "react";
import SellPayoutStep from "@/components/SellPayoutStep";

export default function SellPayoutPage() {
  return (
    <Suspense fallback={null}>
      <SellPayoutStep />
    </Suspense>
  );
}
