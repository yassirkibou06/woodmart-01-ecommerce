"use client"
import { useState, useEffect } from 'react';
import { useSearchParams, useRouter} from 'next/navigation';


const page = () => {
    const [user, setUser] = useState(null);
    const router = useRouter();
    const searchParams = useSearchParams();
    const id = searchParams.get('id');
    const firstname = searchParams.get('firstname');
    const lastname = searchParams.get('lastname');
    const email = searchParams.get('email');
    const mobile = searchParams.get('mobile');

    useEffect(() => {
        if (id && firstname && lastname && email && mobile) {
            setUser({ id, firstname, lastname, email, mobile });
        } else {
            // Redirect to login if any data is missing
            router.push('/login');
        }
    }, []);

    if (!user) {
        return <div className="m-20">Loading...</div>;
    }

    return (
        <div className="m-20">
            <h1>Profile</h1>
            <p>First Name: {user.firstname}</p>
            <p>Last Name: {user.lastname}</p>
            <p>Email: {user.email}</p>
            <p>Mobile: {user.mobile}</p>
            {/* Display other user data as needed */}
        </div>
    );
};

export default page;