import { SidebarContent } from '@/components/sidebar-content';
import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { useInitials } from '@/hooks/use-initials';
import { logout } from '@/routes';
import { type SharedData } from '@/types';
import { router, usePage } from '@inertiajs/react';
import { Bell, LogOut, Menu, Search, User } from 'lucide-react';

export function AppSidebarHeader() {
    const { auth } = usePage<SharedData>().props;
    const getInitials = useInitials();

    const handleLogout = () => {
        router.flushAll();
        router.post(logout().url);
    };

    return (
        <header className="mb-8 flex flex-col items-center gap-4 md:flex-row">
            {/* Main Bar: Title + Actions wrapped in a long oval box */}
            <div className="flex w-full flex-1 items-center justify-between rounded-[2rem] bg-white py-3 pr-4 pl-8 shadow-sm">
                <div className="flex items-center gap-4">
                    {/* Mobile Menu Trigger */}
                    <Sheet>
                        <SheetTrigger asChild>
                            <button className="-ml-2 p-2 text-gray-500 hover:text-gray-900 md:hidden">
                                <Menu size={24} />
                            </button>
                        </SheetTrigger>
                        <SheetContent
                            side="left"
                            className="w-[300px] border-r-0 bg-transparent p-0 shadow-none"
                        >
                            <div className="h-full w-full overflow-hidden rounded-r-[50px] bg-white">
                                <SheetTitle className="sr-only">
                                    Navigation Menu
                                </SheetTitle>
                                <SidebarContent isMobile />
                            </div>
                        </SheetContent>
                    </Sheet>

                    <h1 className="text-xl font-bold text-gray-800">
                        User Roles
                    </h1>
                </div>

                <div className="flex items-center gap-3">
                    {/* Search Button - Light grey background to stand out on white */}
                    <button className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F4F6F9] text-gray-500 transition-all hover:text-gray-900 hover:shadow-md">
                        <Search size={20} />
                    </button>

                    {/* Notification Button */}
                    <button className="relative flex h-11 w-11 items-center justify-center rounded-full bg-[#F4F6F9] text-gray-500 transition-all hover:text-gray-900 hover:shadow-md">
                        <Bell size={20} />
                        <span className="absolute top-3 right-3 h-2 w-2 rounded-full border border-white bg-red-500"></span>
                    </button>
                </div>
            </div>

            {/* Profile Card - Separate container */}
            <div className="flex h-[84px] min-w-fit cursor-pointer items-center gap-4 rounded-full border border-transparent bg-white py-2 pr-5 pl-2 shadow-sm transition-shadow hover:border-gray-100 hover:shadow-md md:h-auto">
                {auth.user.avatar ? (
                    <img
                        src={auth.user.avatar}
                        alt="Profile"
                        className="h-12 w-12 rounded-full object-cover"
                    />
                ) : (
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 font-semibold text-gray-600">
                        {getInitials(auth.user.name)}
                    </div>
                )}
                <div className="hidden text-left xl:block">
                    <p className="text-sm leading-tight font-bold text-gray-900">
                        {auth.user.name}
                    </p>
                    <div className="mt-0.5 flex items-center gap-1 text-gray-500">
                        <User size={12} strokeWidth={2.5} />
                        <p className="text-xs font-medium">Manager</p>
                    </div>
                </div>
                <button
                    onClick={handleLogout}
                    className="ml-2 rounded-full p-2 text-red-500 transition-colors hover:bg-red-50"
                >
                    <LogOut size={20} />
                </button>
            </div>
        </header>
    );
}
