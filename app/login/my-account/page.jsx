"use client"
import { useState } from 'react';
import { useRequireAuth } from '@/utils/auth';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdAttachEmail } from 'react-icons/md';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

const page = () => {
  useRequireAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const role = useState(localStorage.getItem('role'));
  const firstname = useState(localStorage.getItem('firstname'));
  const lastname = useState(localStorage.getItem('lastname'));
  const email = useState(localStorage.getItem('email'));
  const mobile = useState(localStorage.getItem('mobile'));

  const router = useRouter();
  const apiUrl = process.env.NEXT_PUBLIC_API_URL
  /*
    const handleLogout = async () => {
      try {
        const response = await fetch(apiUrl + "/api/user/logout");
  
        if (!response.ok) {
          throw new Error('Logout failed');
        }
  
        // Clear authentication state (e.g., remove token from local storage)
        localStorage.removeItem('token');
  
        setIsLoggedIn(false);
        router.push('/login'); // Redirect to login page
  
        toast.success('Logout out successfully'); // Assuming you have toast for success messages
      } catch (error) {
        console.error('Logout error:', error);
        toast.error('Failed to log out'); // Assuming you have toast for error messages
      }
    };*/
  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('token');

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
  console.log(role[0])

  return (
    <div className="bg-[#f6f6f6]">
      <div className="pb-16 pt-10 px-6">
        <h1 className="text-2xl font-semibold mb-6">MY ACCOUNT</h1>
        <div className="bg-white rounded-md px-4 py-12">
          <h2 className="font-medium mb-8 text-xl">General Information</h2>
          {/*grid inputs /////*/}
          <div className="grid grid-cols-2 items-center gap-5 px-5">
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
            {
              role[0] === "admin" ?
                <Link href="/dashboard" className="text-black font-medium flex items-center gap-2 hover:text-primary">
                  Admin Dashboard
                  <ArrowRightIcon className="w-5 h-5" />
                </Link>
                : ""
            }
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default page;