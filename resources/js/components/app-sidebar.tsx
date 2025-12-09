import { useState } from 'react';
import { SidebarContent } from './sidebar-content';

export function AppSidebar() {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <aside
            className={`scrollbar-hide sticky top-0 z-10 hidden h-screen flex-col overflow-y-visible rounded-[50px] bg-white transition-all duration-300 md:flex ${isCollapsed ? 'w-[100px]' : 'w-[290px]'}`}
        >
            <SidebarContent
                isCollapsed={isCollapsed}
                onToggleCollapse={() => setIsCollapsed(!isCollapsed)}
            />
        </aside>
    );
}
