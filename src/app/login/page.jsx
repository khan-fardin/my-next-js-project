"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await signIn("credentials", {
            redirect: false,
            email,
            password,
        });

        if (!res.error) {
            router.push("/addBooks");
        } else {
            toast.error("Enter Email & Pass!");
        }
    };

    return (
        <main className="min-h-screen flex items-center justify-center">
            <Toaster position="top-right" />
            <form
                onSubmit={handleSubmit}
                className="bg-primary-content p-8 rounded-xl shadow-md w-full max-w-md"
            >
                <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
                <input
                    type="email"
                    placeholder="test@test.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border px-4 py-2 rounded-lg w-full mb-4"
                />
                <input
                    type="password"
                    placeholder="123456"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border px-4 py-2 rounded-lg w-full mb-4"
                />
                <button
                    type="submit"
                    className="bg-accent text-accent-content px-6 py-3 rounded-xl hover:bg-secondary shadow-lg transition w-full"
                >
                    Sign In
                </button>
            </form>
        </main>
    );
};

export default LoginPage;
