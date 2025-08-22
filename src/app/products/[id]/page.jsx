"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

const ProductDetail = () => {
    const { id } = useParams();

    // Mock product data
    const products = [
        {
            id: "1",
            name: "BookNest Journal",
            description: "A premium journal for your notes and reflections.",
            price: 19.99,
            details:
                "Crafted with high-quality paper and a durable cover, perfect for daily journaling and note-taking.",
        },
        {
            id: "2",
            name: "Reading Lamp",
            description: "Adjustable lamp to make your late-night reading cozier.",
            price: 29.99,
            details:
                "LED lamp with adjustable brightness and flexible neck for the perfect reading experience.",
        },
        {
            id: "3",
            name: "Classic Novel Set",
            description: "A set of timeless classics for your bookshelf.",
            price: 49.99,
            details:
                "Includes works by Jane Austen, Charles Dickens, and more in beautifully bound editions.",
        },
    ];

    const product = products.find((p) => p.id === id);

    if (!product) {
        return (
            <main className="min-h-screen flex items-center justify-center bg-gray-50">
                <p className="text-gray-600 text-lg">Product not found.</p>
            </main>
        );
    }

    return (
        <main className="min-h-screen py-16 px-6 flex flex-col items-center">
            <div className="bg-primary-content rounded-2xl shadow-lg p-8 max-w-2xl w-full">
                <h1 className="text-4xl font-bold mb-4">
                    {product.name}
                </h1>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <p className="text-gray-700 mb-6">{product.details}</p>
                <p className="text-2xl font-bold text-gray-800 mb-8">
                    ${product.price.toFixed(2)}
                </p>

                <Link href="/products">
                    <button className="bg-accent text-accent-content px-6 py-3 rounded-xl hover:bg-secondary transition">
                        Back to Products
                    </button>
                </Link>
            </div>
        </main>
    );
};

export default ProductDetail;
