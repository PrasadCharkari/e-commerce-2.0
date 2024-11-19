"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AddProductForm from '@/components/AddProductForm';
import jwt from 'jsonwebtoken';

const Dashboard: React.FC = () => {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/auth');
            return;
        }

        try {

            const decodedToken = jwt.decode(token) as { role: string };
            if (decodedToken.role !== 'admin') {
                router.push('/');
            }
        } catch (error) {
            console.error('Token decoding error:', error);
            router.push('/auth');
        }
    }, [router]);




    return (
        <div className='min-h-screen bg-gray-200 text-white flex flex-col items-center'>


            <h1 className=' font-bold text-2xl md:text-3xl mt-10 text-sky-900'>
                Admin Dashboard
            </h1>


            <AddProductForm />
        </div>

    );
};

export default Dashboard;
