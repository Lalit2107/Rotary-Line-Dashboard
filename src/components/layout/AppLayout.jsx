import { NavLink, useLocation } from 'react-router-dom';
import { Menu, MoreVertical, SignalHigh, Calendar } from 'lucide-react';

const navItems = [
    { path: '/', label: 'Command Center' },
    { path: '/activity-log', label: 'Activity Log' },
    { path: '/rotary-overview', label: 'Rotary Overview' },
    { path: '/machine-analytics', label: 'Machine Analytics' },
];

export default function AppLayout({ children }) {
    const location = useLocation();

    const getPageTitle = () => {
        switch (location.pathname) {
            case '/': return 'Plant Production Command Center — 10 Lines Overview';
            case '/activity-log': return 'Production Line — Real-Time Activity Log';
            case '/rotary-overview': return 'Rotary Line — Shift 1 Production Overview';
            case '/machine-analytics': return 'Rotary Machine Analytics';
            default: return 'Dashboard';
        }
    };

    return (
        <div className="flex flex-col h-full w-full">
            {/* Header matching original: Left align icons, absolute center title, right align controls */}
            <header className="h-[46px] shrink-0 bg-[#0d121c] border-b border-[rgba(255,255,255,0.06)] px-4 flex items-center justify-between relative">
                <div className="flex items-center gap-4 w-1/4">
                    <Menu size={22} className="text-slate-400 cursor-pointer hover:text-white transition-colors" />
                    <div className="flex gap-[2px]">
                        <span className="w-1 h-1 rounded-full bg-slate-500"></span>
                        <span className="w-1 h-1 rounded-full bg-slate-500"></span>
                        <span className="w-1 h-1 rounded-full bg-slate-500"></span>
                    </div>
                </div>

                <div className="absolute left-1/2 -translate-x-1/2 w-1/2 text-center">
                    <h1 className="text-[16px] font-medium text-slate-100 tracking-wide">
                        {getPageTitle()}
                    </h1>
                </div>

                <div className="flex items-center justify-end gap-5 w-1/4 text-[12px] font-medium text-slate-400">
                    {(location.pathname === '/' || location.pathname === '/rotary-overview') && (
                        <>
                            <div className="flex items-center gap-2 cursor-pointer hover:text-slate-300">
                                <SignalHigh size={14} className="text-slate-500" />
                                <span>All Shifts ▼</span>
                            </div>
                            <div className="flex items-center gap-2 cursor-pointer hover:text-slate-300 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] py-1 px-3 rounded">
                                <Calendar size={13} className="text-[#00e0ff]" />
                                <span>04/25/2024 ▼</span>
                            </div>
                        </>
                    )}
                    {location.pathname === '/activity-log' && (
                        <>
                            <SignalHigh size={14} className="text-slate-500" />
                            <span>15:04</span>
                            <span className="cursor-pointer hover:text-slate-300 ml-2">Supervisor ▼</span>
                        </>
                    )}
                </div>
            </header>

            {/* Main App Content Area */}
            <main className="flex-1 overflow-x-hidden overflow-y-auto custom-scroll p-4 relative">
                <div className="max-w-[1920px] mx-auto h-full w-full flex flex-col">
                    {children}
                </div>
            </main>

            {/* Hidden Nav links for keyboard router access, or we can use a small visual nav */}
            <div className="absolute top-0 left-0 w-0 h-0 overflow-hidden opacity-0">
                {navItems.map(item => <NavLink key={item.path} to={item.path}>{item.label}</NavLink>)}
            </div>
        </div>
    );
}
