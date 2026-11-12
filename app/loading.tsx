export default function Loading() {
  return (
    <main className="flex items-center justify-center py-32" aria-busy="true">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-[var(--color-line)] border-t-[var(--color-moss)]" />
    </main>
  );
}
