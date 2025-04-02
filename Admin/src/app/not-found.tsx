"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button"; // Adjust import based on your UI components

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-xl mt-2">Oops! Page not found.</p>
      <p className="text-sm text-gray-500 mt-1">
        The page you’re looking for doesn’t exist.
      </p>
      <Link href="/dashboard">
        <Button className="mt-4 px-6 py-2 text-lg bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
          Go Home
        </Button>
      </Link>
    </div>
  );
}
