"use client"
import { useState } from "react";
import { Button } from "../ui/button";
import Register from "./Register";
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Login = () => {
    const [toggle, setToggle] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const role = useState('');
    const router = useRouter();
    const apiUrl = process.env.NEXT_PUBLIC_API_URL

    //api
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(apiUrl + '/api/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error('Incorrect email or password');
            }

            const data = await response.json();
            console.log(data);

            // Save token in local storage
            localStorage.setItem('token', data.token);
            localStorage.setItem('role', data.role);
            localStorage.setItem('firstname', data.firstname);
            localStorage.setItem('lastname', data.lastname);
            localStorage.setItem('email', data.email);
            localStorage.setItem('mobile', data.mobile);

            // Redirect to dashboard with data query
            router.push(`/login/my-account`);
            // Show success message
            toast.success('Login successful');

        } catch (error) {
            console.error(error);
            // Show error message
            toast.error('Incorrect email or password');
        }
    };

    return (
        <div className="grid grid-cols-2 px-36 gap-10 pt-16 pb-20">
            {toggle ?
                <div>
                    <h1 className="text-2xl font-semibold mb-6">LOGIN</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-1 mb-6">
                            <label htmlFor="email">Email address</label>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                className="border border-gray-200 rounded-md p-2 outline-none"
                                type="email" id="email" autoComplete="email" required />
                        </div>
                        <div className="flex flex-col gap-1 mb-6">
                            <label htmlFor="password">Password</label>
                            <input
                                className="border border-gray-200 rounded-md p-2 outline-none"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                required
                            />
                        </div>
                        <Button className="text-white w-full font-medium py-4" type="submit">Login</Button>
                    </form>
                </div>
                : <Register setToggle={setToggle} />}
            <div className="border-l border-gray-300 pl-10 text-center">
                <h1 className="text-2xl font-semibold mb-6 ">REGISTER</h1>
                <p className="text-gray-500  tracking-wide mb-6">
                    Registering for this site allows you to access your order status and history.
                    Just fill in the fields below, and we'll get a new account set up for you in no time.
                    We will only ask you for information necessary to make the purchase process faster and easier.
                </p>
                {toggle ? <Button
                    className="text-primary bg-primary/30 font-medium py-4 hover:bg-primary/40"
                    onClick={() => setToggle(!toggle)}
                >
                    Register
                </Button> : <Button
                    className="text-primary bg-primary/30 font-medium py-4 hover:bg-primary/40"
                    onClick={() => setToggle(!toggle)}
                >
                    Login
                </Button>}
            </div>
            <ToastContainer />
        </div>
    )
}

export default Login