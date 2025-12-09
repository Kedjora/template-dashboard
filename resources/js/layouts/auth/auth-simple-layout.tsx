import AppLogo from '@/components/app-logo';
import { home } from '@/routes';
import { Link } from '@inertiajs/react';
import { type PropsWithChildren } from 'react';

interface AuthLayoutProps {
    name?: string;
    title?: string;
    description?: string;
}

export default function AuthSimpleLayout({
    children,
    title,
    description,
}: PropsWithChildren<AuthLayoutProps>) {
    return (
        <div className="min-h-screen bg-[#F4F6F9] flex flex-col">
            {/* Header */}
            <header className="p-6 md:p-8">
                <Link href={home()} className="inline-flex items-center gap-3">
                    <AppLogo />
                </Link>
            </header>

            {/* Main Content */}
            <main className="flex-1 flex items-center justify-center px-6 pb-12">
                <div className="w-full max-w-md">
                    {/* Form Card */}
                    <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
                        <div className="space-y-2 mb-8">
                            <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
                            <p className="text-gray-500 text-sm">{description}</p>
                        </div>
                        {children}
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="p-6 text-center">
                <p className="text-gray-400 text-sm">© 2025 Kedjora. All rights reserved.</p>
            </footer>
        </div>
    );
}
