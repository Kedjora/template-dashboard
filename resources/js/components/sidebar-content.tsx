import { dashboard } from '@/routes';
import { edit } from '@/routes/profile';
import { Link, usePage } from '@inertiajs/react';
import {
    ChevronLeft,
    ChevronRight,
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
    isCollapsed?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({
    icon,
    label,
    active,
    href,
    isCollapsed,
}) => {
    const content = (
        <span
            className={`flex w-full items-center gap-3 rounded-xl py-3 transition-all duration-200 ${active ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'} ${isCollapsed ? 'justify-center px-2' : 'px-4'}`}
        >
            {icon}
            {!isCollapsed && <span className="font-medium">{label}</span>}
        </span>
    );

    if (href) {
        return (
            <Link
                href={href}
                className="block"
                title={isCollapsed ? label : ''}
            >
                {content}
            </Link>
        );
    }

    return (
        <button className="w-full text-left" title={isCollapsed ? label : ''}>
            {content}
        </button>
    );
};

export function SidebarContent({
    isCollapsed = false,
    onToggleCollapse,
    isMobile = false,
}: {
    isCollapsed?: boolean;
    onToggleCollapse?: () => void;
    isMobile?: boolean;
}) {
    const { url } = usePage();
    const [isManageUserOpen, setIsManageUserOpen] = useState(false);

    const isActive = (path: string) => url === path || url.startsWith(path);

    return (
        <div className="relative flex h-full flex-col">
            {/* Toggle Button - Desktop Only */}
            {!isMobile && onToggleCollapse && (
                <button
                    onClick={onToggleCollapse}
                    className="absolute top-9 -right-3 z-20 flex h-6 w-6 items-center justify-center rounded-full border border-gray-100 bg-white text-gray-500 shadow-md hover:text-gray-900"
                >
                    {isCollapsed ? (
                        <ChevronRight size={14} />
                    ) : (
                        <ChevronLeft size={14} />
                    )}
                </button>
            )}

            {/* Scrollable Content */}
            <div className="scrollbar-hide flex-1 overflow-y-auto py-8">
                {/* Logo Area */}
                <div
                    className={`flex items-center ${isCollapsed ? 'justify-center px-2' : 'pl-10'} pr-4 pb-8 transition-all`}
                >
                    <Link
                        href={dashboard()}
                        className="flex items-center gap-2 text-xl font-bold text-gray-800"
                    >
                        {isCollapsed ? (
                            <div className="h-10 w-10 overflow-hidden">
                                <AppLogo />
                            </div>
                        ) : (
                            <AppLogo />
                        )}
                    </Link>
                </div>

                {/* Main Menu */}
                <div
                    className={`transition-all ${isCollapsed ? 'px-2' : 'px-4 sm:px-8'}`}
                >
                    {!isCollapsed && (
                        <h3 className="mb-4 pl-4 text-xs font-semibold tracking-wider text-gray-400 uppercase">
                            Main Menu
                        </h3>
                    )}
                    <nav className="space-y-1">
                        <NavItem
                            icon={<Home size={20} />}
                            label="Overview"
                            href={dashboard().url}
                            isCollapsed={isCollapsed}
                            active={isActive(dashboard().url)}
                        />
                        <NavItem
                            icon={<ShoppingBasket size={20} />}
                            label="Products"
                            isCollapsed={isCollapsed}
                        />
                        <NavItem
                            icon={<Layers size={20} />}
                            label="Categories"
                            isCollapsed={isCollapsed}
                        />
                        <NavItem
                            icon={<Warehouse size={20} />}
                            label="Warehouses"
                            isCollapsed={isCollapsed}
                        />
                        <NavItem
                            icon={<Store size={20} />}
                            label="Merchants"
                            isCollapsed={isCollapsed}
                        />
                    </nav>
                </div>

                {/* Account Settings */}
                <div
                    className={`mt-8 pb-10 transition-all ${isCollapsed ? 'px-2' : 'px-4 sm:px-8'}`}
                >
                    {!isCollapsed && (
                        <h3 className="mb-4 pl-4 text-xs font-semibold tracking-wider text-gray-400 uppercase">
                            Account Settings
                        </h3>
                    )}
                    <nav className="space-y-1">
                        <NavItem
                            icon={<Users size={20} />}
                            label="Roles"
                            isCollapsed={isCollapsed}
                        />

                        {/* Expanded Item - Only show parent icon if collapsed */}
                        <div className="py-2">
                            <button
                                onClick={() =>
                                    setIsManageUserOpen(!isManageUserOpen)
                                }
                                title={isCollapsed ? 'Manage User' : ''}
                                className={`flex w-full items-center justify-between rounded-xl py-3 font-medium text-gray-500 transition-colors hover:bg-gray-50 ${isCollapsed ? 'justify-center px-2' : 'px-4'}`}
                            >
                                <div className="flex items-center gap-3">
                                    <UserCheck size={20} />
                                    {!isCollapsed && <span>Manage User</span>}
                                </div>
                                {!isCollapsed && (
                                    <ChevronUp
                                        size={16}
                                        className={`text-gray-400 transition-transform duration-200 ${isManageUserOpen ? '' : 'rotate-180'}`}
                                    />
                                )}
                            </button>

                            {/* Sub Menu - Only show if NOT collapsed */}
                            {!isCollapsed && isManageUserOpen && (
                                <div className="relative mt-2">
                                    {/* Item 1: Users List */}
                                    <div className="group relative py-1 pl-12">
                                        <div className="absolute top-0 bottom-0 left-[26px] w-[2px] bg-gray-100"></div>
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
                                        <div className="absolute top-0 left-[26px] h-[calc(50%)] w-[2px] bg-gray-100"></div>
                                        <div className="absolute top-0 left-[26px] h-[50%] w-6 rounded-bl-xl border-b-[2px] border-l-[2px] border-gray-100"></div>

                                        <div
                                            className={`flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 transition-colors ${
                                                isActive('/assign-role')
                                                    ? 'bg-blue-50 font-bold text-blue-600'
                                                    : 'font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                                            }`}
                                        >
                                            <UserCheck size={18} />
                                            <span className="text-sm">
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
                            isCollapsed={isCollapsed}
                            active={isActive(edit().url)}
                        />
                    </nav>
                </div>
            </div>
        </div>
    );
}
