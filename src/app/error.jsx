"use client";

import React from "react";

export default function GlobalError({ error, reset }) {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-red-50 px-6">
      <h1 className="text-3xl font-bold text-red-600 mb-4">
        Something went wrong!
      </h1>
      <p className="text-gray-700 mb-6">{error.message}</p>
      <button
        onClick={() => reset()}
        className="bg-red-600 text-white px-6 py-2 rounded-xl hover:bg-red-700 transition"
      >
        Try Again
      </button>
    </main>
  );
}
