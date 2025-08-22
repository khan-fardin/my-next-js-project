"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function AddBooks() {
    const { data: session, status } = useSession();
    const router = useRouter();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

    // Redirect unauthenticated users safely
    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/login");
        }
    }, [status, router]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title || !description || !price) {
            toast.error("All fields are required!");
            return;
        }

        // Mock save (later connect to API/DB)
        console.log("New Book:", { title, description, price });

        toast.success("Book added successfully 🎉");

        setTitle("");
        setDescription("");
        setPrice("");
    };

    if (status === "loading") {
        return <p className="text-center mt-10">Loading...</p>;
    }

    if (status === "unauthenticated") {
        return null; // will redirect
    }

    return (
        <main className="min-h-screen flex items-center justify-center">
            <Toaster position="top-right" />
            <form
                onSubmit={handleSubmit}
                className="bg-primary-content p-8 rounded-xl shadow-md w-full max-w-md"
            >
                <h1 className="text-2xl font-bold text-center mb-6">Add a New Book</h1>

                <input
                    type="text"
                    placeholder="Book Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="border px-4 py-2 rounded-lg w-full mb-4"
                />

                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="border px-4 py-2 rounded-lg w-full mb-4"
                />

                <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="border px-4 py-2 rounded-lg w-full mb-4"
                />

                <button
                    type="submit"
                    className="w-full bg-accent text-accent-content px-6 py-3 rounded-xl hover:bg-secondary"
                >
                    Add Book
                </button>
            </form>
        </main>
    );
}
