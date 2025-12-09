import { AppSidebar } from '@/components/app-sidebar';
import { AppSidebarHeader } from '@/components/app-sidebar-header';
import { type BreadcrumbItem } from '@/types';
import { type PropsWithChildren } from 'react';

export default function AppSidebarLayout({
    children,
}: PropsWithChildren<{ breadcrumbs?: BreadcrumbItem[] }>) {
    return (
        <div className="flex min-h-screen bg-[#F4F6F9]">
            <AppSidebar />
            <main className="flex-1 p-4 md:p-6 overflow-y-auto h-screen">
                <div className="w-full">
                    <AppSidebarHeader />
                    {children}
                </div>
            </main>
        </div>
    );
}
