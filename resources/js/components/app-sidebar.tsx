import { dashboard } from '@/routes';
import { edit } from '@/routes/profile';
import { Link } from '@inertiajs/react';
import {
    ChevronUp,
    Home,
    Layers,
    List,
    Settings,
    ShoppingBasket,
    Store,
    UserCheck,
    Users,
    Warehouse,
} from 'lucide-react';
import { useState } from 'react';
import AppLogo from './app-logo';

interface NavItemProps {
    icon: React.ReactNode;
    label: string;
    active?: boolean;
    href?: string;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active, href }) => {
    const content = (
        <span
            className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200 ${active ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}`}
        >
            {icon}
            <span className="font-medium">{label}</span>
        </span>
    );

    if (href) {
        return (
            <Link href={href} className="block">
                {content}
            </Link>
        );
    }

    return <button className="w-full text-left">{content}</button>;
};

export function AppSidebar() {
    const [isManageUserOpen, setIsManageUserOpen] = useState(true);
    return (
        <aside className="scrollbar-hide sticky top-0 z-10 hidden h-screen w-[290px] flex-col overflow-y-auto rounded-[50px] bg-white md:flex">
            {/* Logo Area */}
            <div className="p-8 pb-8 pl-10">
                <Link
                    href={dashboard()}
                    className="flex items-center gap-2 text-xl font-bold text-gray-800"
                >
                    <AppLogo />
                </Link>
            </div>

            {/* Main Menu */}
            <div className="px-8">
                <h3 className="mb-4 pl-4 text-xs font-semibold tracking-wider text-gray-400 uppercase">
                    Main Menu
                </h3>
                <nav className="space-y-1">
                    <NavItem
                        icon={<Home size={20} />}
                        label="Overview"
                        href={dashboard().url}
                    />
                    <NavItem
                        icon={<ShoppingBasket size={20} />}
                        label="Products"
                    />
                    <NavItem icon={<Layers size={20} />} label="Categories" />
                    <NavItem
                        icon={<Warehouse size={20} />}
                        label="Warehouses"
                    />
                    <NavItem icon={<Store size={20} />} label="Merchants" />
                </nav>
            </div>

            {/* Account Settings */}
            <div className="mt-8 px-8 pb-10">
                <h3 className="mb-4 pl-4 text-xs font-semibold tracking-wider text-gray-400 uppercase">
                    Account Settings
                </h3>
                <nav className="space-y-1">
                    <NavItem icon={<Users size={20} />} label="Roles" />

                    {/* Expanded Item */}
                    <div className="py-2">
                        <button
                            onClick={() =>
                                setIsManageUserOpen(!isManageUserOpen)
                            }
                            className="flex w-full items-center justify-between rounded-xl px-4 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-50"
                        >
                            <div className="flex items-center gap-3">
                                <UserCheck size={20} />
                                <span>Manage User</span>
                            </div>
                            <ChevronUp
                                size={16}
                                className={`text-gray-400 transition-transform duration-200 ${isManageUserOpen ? '' : 'rotate-180'}`}
                            />
                        </button>

                        {/* Sub Menu with Tree Lines */}
                        {isManageUserOpen && (
                            <div className="relative mt-2">
                                {/* Item 1: Users List */}
                                <div className="group relative py-1 pl-12">
                                    {/* Vertical line from top to bottom */}
                                    <div className="absolute top-0 bottom-0 left-[26px] w-[2px] bg-gray-100"></div>
                                    {/* Horizontal connector */}
                                    <div className="absolute top-1/2 left-[26px] h-[2px] w-6 -translate-y-1/2 bg-gray-100"></div>

                                    <div className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-900">
                                        <List size={18} />
                                        <span className="text-sm font-medium">
                                            Users List
                                        </span>
                                    </div>
                                </div>

                                {/* Item 2: Assign Role (Last Item) */}
                                <div className="relative py-1 pl-12">
                                    {/* Vertical line from top to half (creates the curve start) */}
                                    <div className="absolute top-0 left-[26px] h-[calc(50%)] w-[2px] bg-gray-100"></div>
                                    {/* Curved L shape */}
                                    <div className="absolute top-0 left-[26px] h-[50%] w-6 rounded-bl-xl border-b-[2px] border-l-[2px] border-gray-100"></div>

                                    <div className="flex cursor-pointer items-center gap-3 rounded-xl bg-blue-50 px-3 py-3 text-blue-600 shadow-sm">
                                        <UserCheck size={18} />
                                        <span className="text-sm font-bold">
                                            Assign Role
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <NavItem
                        icon={<Settings size={20} />}
                        label="Settings"
                        href={edit().url}
                    />
                </nav>
            </div>
        </aside>
    );
}
