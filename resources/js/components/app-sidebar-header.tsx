import { useInitials } from '@/hooks/use-initials';
import { logout } from '@/routes';
import { type SharedData } from '@/types';
import { router, usePage } from '@inertiajs/react';
import { Bell, Crown, LogOut, Search, User } from 'lucide-react';

export function AppSidebarHeader() {
    const { auth } = usePage<SharedData>().props;
    const getInitials = useInitials();

    const handleLogout = () => {
        router.flushAll();
        router.post(logout().url);
    };

    return (
        <header className="flex flex-col md:flex-row items-center gap-4 mb-8">
            {/* Main Bar: Title + Actions wrapped in a long oval box */}
            <div className="flex-1 w-full bg-white rounded-[2rem] pl-8 pr-4 py-3 flex items-center justify-between shadow-sm">
                <h1 className="text-xl font-bold text-gray-800">User Roles</h1>

                <div className="flex items-center gap-3">
                    {/* Search Button - Light grey background to stand out on white */}
                    <button className="w-11 h-11 flex items-center justify-center bg-[#F4F6F9] text-gray-500 hover:text-gray-900 rounded-full hover:shadow-md transition-all">
                        <Search size={20} />
                    </button>

                    {/* Notification Button */}
                    <button className="w-11 h-11 flex items-center justify-center bg-[#F4F6F9] text-gray-500 hover:text-gray-900 rounded-full hover:shadow-md transition-all relative">
                        <Bell size={20} />
                        <span className="absolute top-3 right-3 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                    </button>

                    {/* Pro Badge Button */}
                    <button className="w-11 h-11 flex items-center justify-center bg-[#D2F558] text-gray-900 rounded-full hover:shadow-md transition-all relative group">
                        <Crown size={20} strokeWidth={2.5} className="mb-1" />
                        <span className="absolute bottom-1.5 bg-black text-white text-[8px] font-bold px-1.5 py-[1px] rounded-full leading-none tracking-tighter">
                            PRO
                        </span>
                    </button>
                </div>
            </div>

            {/* Profile Card - Separate container */}
            <div className="bg-white pl-2 pr-5 py-2 rounded-full flex items-center gap-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow border border-transparent hover:border-gray-100 min-w-fit h-[84px] md:h-auto">
                {auth.user.avatar ? (
                    <img
                        src={auth.user.avatar}
                        alt="Profile"
                        className="w-12 h-12 rounded-full object-cover"
                    />
                ) : (
                    <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-semibold">
                        {getInitials(auth.user.name)}
                    </div>
                )}
                <div className="hidden sm:block text-left">
                    <p className="text-sm font-bold text-gray-900 leading-tight">
                        {auth.user.name}
                    </p>
                    <div className="flex items-center gap-1 text-gray-500 mt-0.5">
                        <User size={12} strokeWidth={2.5} />
                        <p className="text-xs font-medium">Manager</p>
                    </div>
                </div>
                <button
                    onClick={handleLogout}
                    className="ml-2 p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                >
                    <LogOut size={20} />
                </button>
            </div>
        </header>
    );
}
