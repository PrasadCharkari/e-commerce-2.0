"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AuthPage: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const apiUrl = '/api/users/login';

        try {
            const res = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            if (res.ok) {
                const { token, role } = await res.json();
                localStorage.setItem('token', token);
                toast.success("Login successful!");

                setTimeout(() => {
                    if (role === 'admin') {
                        router.push('/admin/dashboard');
                    } else {
                        router.push('/');
                    }
                }, 0);
            } else {
                throw new Error("Login failed");
            }
        } catch (error) {
            toast.error("Wrong admin credentials, only app owner has access to admin dashboard.");
        }
    };

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            setIsModalOpen(false);
        }
    };

    const handleBackClick = () => {
        router.push('/');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
            <button
                onClick={handleBackClick}
                className="absolute top-4 left-4 p-2 m-1 text-white bg-sky-700 rounded-md hover:bg-sky-800 transition duration-200"
            >
                Back to Homepage
            </button>
            <div className="max-w-md w-full p-6 bg-gray-100 rounded-lg shadow-lg">
                <h1 className="text-2xl font-semibold text-center mb-6">Login</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <button
                        type="submit"
                        className="w-full p-2 bg-sky-700 text-white rounded-md hover:bg-sky-800 transition duration-200"
                    >
                        Login
                    </button>
                </form>
                <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    className="w-full mt-4 p-2 text-white rounded-md hover:bg-red-700 transition duration-200 bg-red-600"
                >
                    Read Me!
                </button>
                {isModalOpen && (
                    <div
                        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
                        onClick={handleOverlayClick}
                    >
                        <div className="bg-white p-5 rounded-lg shadow-lg">
                            <p className="mb-4">
                                For Security Purposes I have kept the admin dashboard credentially locked. I can demonstrate/prove the functionality of this feature during Interview.
                            </p>
                            <button
                                type="button"
                                onClick={() => setIsModalOpen(false)}
                                className="mt-4 p-2 bg-sky-700 text-white rounded-md hover:bg-sky-800"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
                <ToastContainer />
            </div>
        </div>
    );
};

export default AuthPage;
