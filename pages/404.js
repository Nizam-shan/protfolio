import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[var(--bg-primary)] text-[var(--text-primary)] p-6 bg-grid-pattern">
      <div className="card p-10 max-w-lg text-center shadow-xl">
        <div className="text-8xl font-black gradient-text mb-4">404</div>
        <h1 className="text-2xl font-bold mb-3 text-heading">Page Not Found</h1>
        <p className="text-sm text-[var(--text-muted)] mb-8 leading-relaxed text-body">
          The page you are looking for doesn’t exist or has moved.
        </p>
        <Link
          href="/"
          className="btn-primary px-6 py-3 text-sm font-semibold inline-flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Portfolio</span>
        </Link>
      </div>
    </main>
  );
}
