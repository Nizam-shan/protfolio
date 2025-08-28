import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-dark-950 text-slate-100 p-8">
      <div className="max-w-xl text-center space-y-6">
        <div className="text-9xl font-extrabold gradient-text">404</div>
        <h1 className="text-3xl font-semibold">Page not found</h1>
        <p className="text-slate-400">
          The page you are looking for doesn’t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-primary-500 to-primary-600 font-medium"
        >
          Go back home
        </Link>
      </div>
    </main>
  );
}
