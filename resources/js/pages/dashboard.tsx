import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Plus, User as UserIcon } from 'lucide-react';
import { useState } from 'react';

interface UserData {
    id: string;
    name: string;
    role: string;
    phoneNumber: string;
    avatarUrl: string;
}

const initialUsers: UserData[] = [
    {
        id: '1',
        name: 'Diphamuh Loose',
        role: 'Keeper',
        phoneNumber: '0812923920329',
        avatarUrl: 'https://picsum.photos/seed/u1/200/200',
    },
    {
        id: '2',
        name: 'Feri Rierru',
        role: 'Keeper',
        phoneNumber: '0812923920329',
        avatarUrl: 'https://picsum.photos/seed/u2/200/200',
    },
    {
        id: '3',
        name: 'Fearry Ichsan',
        role: 'Keeper',
        phoneNumber: '0812923920329',
        avatarUrl: 'https://picsum.photos/seed/u3/200/200',
    },
    {
        id: '4',
        name: 'Feri Rierru',
        role: 'Keeper',
        phoneNumber: '0812923920329',
        avatarUrl: 'https://picsum.photos/seed/u4/200/200',
    },
];

const UsersIcon: React.FC<{ size?: number; className?: string }> = ({
    size,
    className,
}) => (
    <svg
        width={size}
        height={size}
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
);

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

export default function Dashboard() {
    const [users] = useState<UserData[]>(initialUsers);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 min-h-[600px]">
                {/* Header Section */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                    <div>
                        <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                            <UsersIcon size={24} className="text-gray-600" />
                            {users.length} Total Users
                        </h2>
                        <p className="text-gray-500 text-sm mt-1">
                            View and Edit User Role here.
                        </p>
                    </div>

                    <div>
                        <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-bold text-sm rounded-full hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
                            <span>Add New</span>
                            <Plus size={18} strokeWidth={3} />
                        </button>
                    </div>
                </div>

                {/* List Header */}
                <div className="mb-6 hidden md:block">
                    <h3 className="text-lg font-bold text-gray-800">
                        All Users
                    </h3>
                </div>

                {/* List Items */}
                <div className="space-y-4">
                    {users.map((user) => (
                        <div
                            key={user.id}
                            className="group flex flex-col md:flex-row items-center p-4 rounded-2xl hover:bg-gray-50 transition-all border border-transparent hover:border-gray-100"
                        >
                            {/* User Info - Approx 40% width */}
                            <div className="flex items-center gap-4 w-full md:w-[40%]">
                                <img
                                    src={user.avatarUrl}
                                    alt={user.name}
                                    className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
                                />
                                <div>
                                    <h4 className="font-bold text-gray-900 text-base">
                                        {user.name}
                                    </h4>
                                    <div className="flex items-center gap-2 text-gray-500 text-sm mt-0.5">
                                        <svg
                                            width="14"
                                            height="14"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                        </svg>
                                        {user.phoneNumber}
                                    </div>
                                </div>
                            </div>

                            {/* Role Section - Approx 35% width, Left Aligned */}
                            <div className="w-full md:w-[35%] mt-4 md:mt-0 flex items-center justify-start gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-[#F4F6F9] flex items-center justify-center text-gray-500 group-hover:bg-white group-hover:shadow-sm transition-all shrink-0">
                                    <UserIcon size={20} strokeWidth={2} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs text-gray-400 font-medium">
                                        User Role:
                                    </span>
                                    <span className="text-gray-900 font-bold">
                                        {user.role}
                                    </span>
                                </div>
                            </div>

                            {/* Action Button - Approx 25% width, Right Aligned */}
                            <div className="w-full md:w-[25%] mt-4 md:mt-0 flex justify-end">
                                <button className="bg-[#2D2D2D] text-white px-6 py-2.5 rounded-xl font-medium text-sm hover:bg-black transition-colors shadow-lg shadow-gray-200">
                                    Edit Role
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </AppLayout>
    );
}
