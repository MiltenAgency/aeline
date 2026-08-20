import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <p className="font-sans text-7xl font-bold">404</p>
      <h1 className="mt-4 text-2xl sm:text-3xl">Page not found</h1>
      <p className="mt-3 max-w-md text-sm text-fog">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <div className="mt-8">
        <Button href="/">Back to home</Button>
      </div>
    </section>
  );
}
