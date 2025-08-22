"use client";

import Link from "next/link";
import React, { useState } from "react";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // For now, just log credentials (replace with real auth later)
        console.log("Logging in:", { email, password });
    };

    return (
        <main className="min-h-screen flex items-center justify-center px-6">
            <div className="bg-primary-content rounded-2xl shadow-lg p-8 w-full max-w-md">
                <h1 className="text-3xl font-bold mb-6 text-center">
                    Login
                </h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <button
                        type="submit"
                        className="bg-purple-600 text-white py-2 rounded-xl hover:bg-purple-700 transition"
                    >
                        Sign In
                    </button>
                </form>
                <div className="text-center text-sm mt-4 flex items-center gap-2 justify-center">
                    <p className="text-gray-500">Don’t have an account?{" "}</p>
                    <Link href="/register" className="hover:underline">
                        Register
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default LoginPage;
