import Link from 'next/link';
import React from 'react';

const page = () => {
    const products = [
        {
            id: 1,
            name: "BookNest Journal",
            description: "A premium journal for your notes and reflections.",
            price: 19.99,
        },
        {
            id: 2,
            name: "Reading Lamp",
            description: "Adjustable lamp to make your late-night reading cozier.",
            price: 29.99,
        },
        {
            id: 3,
            name: "Classic Novel Set",
            description: "A set of timeless classics for your bookshelf.",
            price: 49.99,
        },
    ];


    return (
        <main className="min-h-screen py-16 px-6">
            <h1 className="text-4xl font-bold text-center mb-12">
                Our Products
            </h1>


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-primary-content rounded-2xl shadow-md p-6 flex flex-col justify-between hover:shadow-xl transition"
                    >
                        <div>
                            <h2 className="text-2xl font-semibold mb-2">
                                {product.name}
                            </h2>
                            <p className="text-gray-600 mb-4">{product.description}</p>
                            <p className="text-lg font-bold text-gray-800 mb-6">
                                ${product.price.toFixed(2)}
                            </p>
                        </div>


                        <Link href={`/products/${product.id}`}>
                            <button className="w-full bg-accent text-accent-content px-4 py-2 rounded-xl hover:bg-secondary transition">
                                View Details
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default page;