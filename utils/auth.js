// utils/auth.js
"use client"

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const useRequireAuth = () => {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/login'); // Redirect to login page if not authenticated
        }
    }, []);

    return;
};
