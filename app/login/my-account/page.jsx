"use client"
import { useState, useEffect } from 'react';
import { useRequireAuth } from '@/utils/auth';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdAttachEmail } from 'react-icons/md';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

const Page = () => {
  useRequireAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [token, setToken] = useState(null);
  const [role, setRole] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');

  const router = useRouter();
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || process.env.NEXT_PUBLIC_VERCEL_URL;

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    setRole(localStorage.getItem('role'));
    setFirstname(localStorage.getItem('firstname'));
    setLastname(localStorage.getItem('lastname'));
    setEmail(localStorage.getItem('email'));
    setMobile(localStorage.getItem('mobile'));
  }, []); // Run once after component mount

  const handleLogout = async () => {
    try {
      const response = await fetch(apiUrl + "/api/user/logout", {
        method: 'GET',
        headers: {
          'Authorization': token
        }
      });

      if (!response.ok) {
        throw new Error('Logout failed');
      }

      localStorage.removeItem('token');
      setIsLoggedIn(false);
      router.push('/login');

      toast.success('Logout out successfully');
    } catch (error) {
      console.error('Logout error:', error);
      toast.error('Failed to log out');
    }
  };

  return (
    <div className="bg-[#f6f6f6]">
      <div className="pb-16 pt-10 px-6">
        <h1 className="text-2xl font-semibold mb-6">MY ACCOUNT</h1>
        <div className="bg-white rounded-md px-4 py-12">
          <h2 className="font-medium mb-8 text-xl">General Information</h2>
          {/*grid inputs /////*/}
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-5 px-5">
            <div>
              <h3 className="mb-2 font-medium">First Name</h3>
              <div className="input-outline-account">
                <p className="font-medium text-gray-800">{firstname}</p>
              </div>
            </div>
            <div>
              <h3 className="mb-2 font-medium">Last Name</h3>
              <div className="input-outline-account">
                <p className="font-medium text-gray-800">{lastname}</p>
              </div>
            </div>
            <div>
              <h3 className="mb-2 font-medium">Email</h3>
              <div className="input-outline-account">
                <p className="font-medium text-gray-800">{email}</p>
              </div>
            </div>
            <div>
              <h3 className="mb-2 font-medium">Mobile</h3>
              <div className="input-outline-account">
                <p className="font-medium text-gray-800">{mobile}</p>
              </div>
            </div>
          </div>
          {/* Buttons /////*/}
          <div className="px-5 flex gap-5 mt-8">
            <button className="font-medium px-4 py-2 bg-red-400 text-white rounded-md" onClick={handleLogout}>
              Logout
            </button>
            {role === "admin" &&
              <Link href="/dashboard" className="text-black font-medium flex items-center gap-2 hover:text-primary">
                Admin Dashboard
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            }
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Page;
