import RampCard from "@/components/RampCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-4 py-10">
      <div className="float-in mb-6 w-full max-w-md">
        <h1 className="font-display text-3xl font-bold leading-tight tracking-tight">
          Shillings in,
          <br />
          <span className="text-[var(--color-moss)]">USDT out.</span>
        </h1>
        <p className="mt-2 text-sm text-[var(--color-ink)]/55">
          Pay with M-Pesa, receive USDT in your wallet — or cash out the other way.
        </p>
      </div>
      <div className="float-in w-full max-w-md" style={{ animationDelay: "0.08s" }}>
        <RampCard />
      </div>
    </main>
  );
}
