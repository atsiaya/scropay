import RampCard from "@/components/RampCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[var(--color-paper)] px-4 py-10">
      <div className="mb-8 w-full max-w-md">
        <div className="flex items-center gap-2 text-sm font-medium text-[var(--color-moss-deep)]">
          <span className="inline-block h-2 w-2 rounded-full bg-[var(--color-ochre)]" />
          Ramp
        </div>
        <h1 className="font-display mt-3 text-3xl font-medium leading-tight text-[var(--color-ink)]">
          Shillings in,
          <br />
          USDT out. No exchange required.
        </h1>
        <p className="mt-2 text-sm text-[var(--color-ink)]/60">
          Pay with M-Pesa, receive USDT directly in your wallet — or cash out
          the other way.
        </p>
      </div>
      <RampCard />
    </main>
  );
}
