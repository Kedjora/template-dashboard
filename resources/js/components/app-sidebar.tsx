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
            className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl transition-all duration-200 ${active ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}`}
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
    return (
        <aside className="w-[290px] bg-white h-screen flex-col hidden md:flex sticky top-0 overflow-y-auto rounded-[50px] z-10 scrollbar-hide">
            {/* Logo Area */}
            <div className="p-8 pb-8 pl-10">
                <Link
                    href={dashboard()}
                    className="flex items-center gap-2 font-bold text-xl text-gray-800"
                >
                    <AppLogo />
                </Link>
            </div>

            {/* Main Menu */}
            <div className="px-8">
                <h3 className="text-gray-400 text-xs font-semibold mb-4 uppercase tracking-wider pl-4">
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
            <div className="px-8 mt-8 pb-10">
                <h3 className="text-gray-400 text-xs font-semibold mb-4 uppercase tracking-wider pl-4">
                    Account Settings
                </h3>
                <nav className="space-y-1">
                    <NavItem icon={<Users size={20} />} label="Roles" />

                    {/* Expanded Item */}
                    <div className="py-2">
                        <button className="flex items-center justify-between w-full text-gray-700 font-medium px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors">
                            <div className="flex items-center gap-3">
                                <UserCheck size={20} />
                                <span>Manage User</span>
                            </div>
                            <ChevronUp size={16} className="text-gray-400" />
                        </button>

                        {/* Sub Menu with Tree Lines */}
                        <div className="relative mt-2">
                            {/* Item 1: Users List */}
                            <div className="relative pl-12 py-1 group">
                                {/* Vertical line from top to bottom */}
                                <div className="absolute left-[26px] top-0 bottom-0 w-[2px] bg-gray-100"></div>
                                {/* Horizontal connector */}
                                <div className="absolute left-[26px] top-1/2 w-6 h-[2px] bg-gray-100 -translate-y-1/2"></div>

                                <div className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:text-gray-900 cursor-pointer rounded-lg hover:bg-gray-50 transition-colors">
                                    <List size={18} />
                                    <span className="text-sm font-medium">
                                        Users List
                                    </span>
                                </div>
                            </div>

                            {/* Item 2: Assign Role (Last Item) */}
                            <div className="relative pl-12 py-1">
                                {/* Vertical line from top to half (creates the curve start) */}
                                <div className="absolute left-[26px] top-0 h-[calc(50%)] w-[2px] bg-gray-100"></div>
                                {/* Curved L shape */}
                                <div className="absolute left-[26px] top-0 h-[50%] w-6 border-b-[2px] border-l-[2px] border-gray-100 rounded-bl-xl"></div>

                                <div className="flex items-center gap-3 px-3 py-3 bg-blue-50 text-blue-600 rounded-xl cursor-pointer shadow-sm">
                                    <UserCheck size={18} />
                                    <span className="text-sm font-bold">
                                        Assign Role
                                    </span>
                                </div>
                            </div>
                        </div>
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
