import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
        <div>
            <Link href='/' className='text-3xl font-bold'>BookNest</Link>
        </div>
    );
};

export default Logo;