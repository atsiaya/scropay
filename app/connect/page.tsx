import { Suspense } from "react";
import ConnectView from "@/components/ConnectView";

export default function ConnectPage() {
  return (
    <Suspense fallback={null}>
      <ConnectView />
    </Suspense>
  );
}
