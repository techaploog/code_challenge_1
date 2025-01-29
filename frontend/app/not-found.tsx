import Link from "next/link";

export default function NotFound() {
  return (
    <div className="screen-size flex flex-col items-center justify-center p-4">
      <h2 className="mt-4 text-2xl font-bold">Oops! Page Not Found.</h2>
      <p className="mt-2">{`We couldn't find the page you're looking for.`}</p>
      <Link
        href="/"
        className="mt-4 inline-block rounded bg-black px-4 py-1.5 text-white transition-colors duration-150 hover:bg-gray-700"
      >
        Return Home
      </Link>
    </div>
  );
}
