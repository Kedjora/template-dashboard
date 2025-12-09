import { cn, isSameUrl, resolveUrl } from '@/lib/utils';
import { edit as editAppearance } from '@/routes/appearance';
import { edit } from '@/routes/profile';
import { show } from '@/routes/two-factor';
import { edit as editPassword } from '@/routes/user-password';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { KeyRound, Palette, ShieldCheck, User } from 'lucide-react';
import { type PropsWithChildren } from 'react';

const sidebarNavItems: NavItem[] = [
    {
        title: 'Profile',
        href: edit(),
        icon: User,
    },
    {
        title: 'Password',
        href: editPassword(),
        icon: KeyRound,
    },
    {
        title: 'Two-Factor Auth',
        href: show(),
        icon: ShieldCheck,
    },
    {
        title: 'Appearance',
        href: editAppearance(),
        icon: Palette,
    },
];

export default function SettingsLayout({ children }: PropsWithChildren) {
    // When server-side rendering, we only render the layout on the client...
    if (typeof window === 'undefined') {
        return null;
    }

    const currentPath = window.location.pathname;

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
                <h1 className="text-xl font-bold text-gray-800">Settings</h1>
                <p className="text-gray-500 text-sm mt-1">Manage your profile and account settings</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-6">
                {/* Sidebar Navigation */}
                <aside className="w-full lg:w-64 shrink-0">
                    <div className="bg-white rounded-3xl p-4 shadow-sm border border-gray-100">
                        <nav className="space-y-1">
                            {sidebarNavItems.map((item, index) => {
                                const isActive = isSameUrl(currentPath, item.href);
                                return (
                                    <Link
                                        key={`${resolveUrl(item.href)}-${index}`}
                                        href={item.href}
                                        className={cn(
                                            'flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium',
                                            isActive
                                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                                                : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                                        )}
                                    >
                                        {item.icon && (
                                            <item.icon size={20} />
                                        )}
                                        {item.title}
                                    </Link>
                                );
                            })}
                        </nav>
                    </div>
                </aside>

                {/* Main Content */}
                <div className="flex-1">
                    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
