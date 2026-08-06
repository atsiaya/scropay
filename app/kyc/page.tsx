import { Suspense } from "react";
import KycStep from "@/components/KycStep";

export default function KycPage() {
  return (
    <Suspense fallback={null}>
      <KycStep />
    </Suspense>
  );
}
