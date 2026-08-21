import { Suspense } from "react";
import BuyPayStep from "@/components/BuyPayStep";

export default function BuyPayPage() {
  return (
    <Suspense fallback={null}>
      <BuyPayStep />
    </Suspense>
  );
}
