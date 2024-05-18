"use client"
import { useState } from "react";
import { Button } from "../ui/button";
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = ({ setToggle }) => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const apiUrl = process.env.NEXT_PUBLIC_API_URL

    //api
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(apiUrl + '/api/user/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password, firstname, lastname, mobile }),
            });

            if (!response.ok) {
                throw new Error('Incorrect email or password');
            }

            const data = await response.json();

            // Redirect to dashboard with data query
            router.push(`/login`);
            // Show success message
            toast.success('Register successful');
            setToggle(true);
        } catch (error) {
            console.error(error);
            // Show error message
            toast.error('Something went wrong');
        }
    };

    return (
        <>
            <div>
                <h1 className="text-2xl font-semibold mb-6">REGISTER</h1>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-1 mb-6">
                        <label htmlFor="firstname">Firstname</label>
                        <input
                            onChange={(e) => setFirstname(e.target.value)}
                            value={firstname}
                            className="border border-gray-200 rounded-md p-2 outline-none"
                            type="text" id="firstname" required />
                    </div>
                    <div className="flex flex-col gap-1 mb-6">
                        <label htmlFor="Lastname">LastName</label>
                        <input
                            onChange={(e) => setLastname(e.target.value)}
                            value={lastname}
                            className="border border-gray-200 rounded-md p-2 outline-none" type="text" id="Lastname" />
                    </div>
                    <div className="flex flex-col gap-1 mb-6">
                        <label htmlFor="email">Email address</label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            className="border border-gray-200 rounded-md p-2 outline-none" type="email" id="email" autoComplete="email" required />
                    </div>
                    <div className="flex flex-col gap-1 mb-6">
                        <label htmlFor="phone">Phone number</label>
                        <input
                            onChange={(e) => setMobile(e.target.value)}
                            value={mobile}
                            className="border border-gray-200 rounded-md p-2 outline-none" type="text" id="phone" required />
                    </div>
                    <div className="flex flex-col gap-1 mb-6">
                        <label htmlFor="password">Password</label>
                        <input
                            className="border border-gray-200 rounded-md p-2 outline-none"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            required
                        />

                    </div>
                    <Button className="text-white w-full font-medium py-4" type="submit">Register</Button>
                </form>
            </div>
        </>
    )
}

export default Register