import { Suspense } from "react";
import KycCallback from "@/components/KycCallback";

export default function KycCallbackPage() {
  return (
    <Suspense fallback={null}>
      <KycCallback />
    </Suspense>
  );
}
