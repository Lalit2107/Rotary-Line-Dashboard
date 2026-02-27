import StatusBadge from '../components/badges/StatusBadge';
import ChartCard from '../components/cards/ChartCard';
import {
    activityLogEntries,
    productionSummary,
    activityTimelineData,
    miniTimelineData,
} from '../data/mockData';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    ReferenceLine
} from 'recharts';
import { Search, ListFilter, Clock } from 'lucide-react';

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-[#080d1a]/95 border border-[rgba(100,116,139,0.2)] rounded px-3 py-2 shadow-lg">
                <p className="text-[10px] text-[#64748b] mb-1">{label}</p>
                {payload.map((p, i) => (
                    <p key={i} className="text-[11px] font-medium" style={{ color: p.color }}>
                        {p.name}: {p.value}
                    </p>
                ))}
            </div>
        );
    }
    return null;
};

function ProSummaryCard({ label, value, unit, icon }) {
    return (
        <div className="border border-[rgba(255,255,255,0.05)] rounded-sm bg-[rgba(255,255,255,0.01)] px-3 py-4 flex flex-col items-center justify-center text-center">
            <p className="text-[10px] text-[#64748b] mb-2">{label}</p>
            <div className="flex items-baseline gap-1 justify-center">
                {icon && <span className="mr-1 inline-block -translate-y-0.5">{icon}</span>}
                <span className="text-[28px] font-bold text-[#00e0ff] tracking-tight leading-none glow-cyan">{value}</span>
                {unit && <span className="text-[11px] text-[#64748b] ml-1">{unit}</span>}
            </div>
        </div>
    );
}

export default function ActivityLog() {
    return (
        <div className="flex flex-col gap-[14px] h-full">
            {/* Top Section */}
            <div className="flex gap-[14px] h-[360px]">
                {/* Activity Log Table panel */}
                <div className="dashboard-card flex-[1.6] flex flex-col overflow-hidden">
                    {/* Search Header */}
                    <div className="h-[44px] shrink-0 border-b border-[rgba(255,255,255,0.05)] bg-[rgba(0,0,0,0.2)] px-4 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-[#64748b]">
                            <Search size={14} />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="bg-transparent text-[12px] text-white outline-none placeholder-[#64748b]"
                            />
                        </div>
                        <ListFilter size={16} className="text-[#64748b]" />
                    </div>

                    <div className="p-4 flex-1 flex flex-col bg-transparent">
                        <h3 className="text-[13px] font-bold text-[#e2e8f0] tracking-wide mb-3">Activity Log</h3>

                        <div className="w-full flex-1 overflow-y-auto custom-scroll pr-1">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="text-[11px] text-[#94a3b8] tracking-wide border-b border-[rgba(255,255,255,0.05)]">
                                        <th className="font-medium pb-2">Timestamp</th>
                                        <th className="font-medium pb-2">Event Type</th>
                                        <th className="font-medium pb-2">Sensor Triggered</th>
                                        <th className="font-medium pb-2">Value</th>
                                        <th className="font-medium pb-2 pl-2">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="text-[12px] text-[#cbd5e1]">
                                    {activityLogEntries.map((row, i) => (
                                        <tr key={i} className="border-b border-[rgba(255,255,255,0.02)]">
                                            <td className="py-2.5 font-mono text-[#94a3b8]">{row.time}</td>
                                            <td className="py-2.5">{row.event}</td>
                                            <td className="py-2.5">{row.sensor}</td>
                                            <td className="py-2.5 font-bold text-white">
                                                {row.value} <span className="text-[#64748b] font-normal text-[10px]">{row.valueUnit}</span>
                                            </td>
                                            <td className="py-2.5 pl-2">
                                                {row.status === 'In Progress' ? (
                                                    <span className="table-status-in-progress">In Progress</span>
                                                ) : (
                                                    <span className="table-status-completed">Completed</span>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Production Summary Panel */}
                <div className="flex-1 flex flex-col gap-[14px]">
                    <div className="dashboard-card p-4 shrink-0">
                        <h3 className="text-[13px] font-bold text-[#e2e8f0] tracking-wide mb-4">Production Summary</h3>
                        <div className="grid grid-cols-2 gap-[10px]">
                            <ProSummaryCard label="Total Coils Processed" value="82" />
                            <ProSummaryCard label="Total Sheets Cut" value="6,240" />
                            <ProSummaryCard label="Average Conveyor Speed" value="45.1" unit="m/min" />
                            <ProSummaryCard
                                label="Total Energy Consumed"
                                value="1,640"
                                unit="kWh"
                                icon={<Clock size={16} strokeWidth={2.5} className="text-[#00e0ff]" />}
                            />
                        </div>
                    </div>

                    <div className="dashboard-card p-4 flex flex-col flex-1">
                        <h3 className="text-[13px] font-bold text-[#e2e8f0] tracking-wide mb-2">Activity Timeline</h3>
                        <div className="flex-1 w-full min-h-[100px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={miniTimelineData} barSize={4} margin={{ top: 10, right: 0, left: -25, bottom: 0 }}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" vertical={false} />
                                    <XAxis dataKey="time" tick={{ fill: '#64748b', fontSize: 9 }} interval={4} axisLine={false} tickLine={false} />
                                    <YAxis tick={{ fill: '#64748b', fontSize: 9 }} domain={[0, 50]} axisLine={false} tickLine={false} ticks={[20, 40, 50]} />
                                    <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.05)' }} />
                                    <ReferenceLine y={25} stroke="#00e0ff" strokeDasharray="3 3" strokeOpacity={0.3} />
                                    <Bar dataKey="running" stackId="a" fill="#00d084" radius={[0, 0, 0, 0]} name="Running" />
                                    <Bar dataKey="idle" stackId="a" fill="#ff9100" radius={[0, 0, 0, 0]} name="Idle" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>

            {/* Primary Lower Timeline */}
            <div className="flex-1 min-h-[200px]">
                <ChartCard title="Activity Timeline" height="100%">
                    <div className="flex-1 w-full h-full pb-4">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={activityTimelineData} barSize={6} margin={{ top: 10, right: 0, left: -25, bottom: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" vertical={false} />
                                <XAxis dataKey="time" tick={{ fill: '#64748b', fontSize: 10 }} interval={10} axisLine={false} tickLine={false} />
                                <YAxis tick={{ fill: '#64748b', fontSize: 10 }} domain={[0, 60]} axisLine={false} tickLine={false} ticks={[20, 40, 60]} />
                                <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.05)' }} />
                                <ReferenceLine y={25} stroke="#00e0ff" strokeDasharray="3 3" strokeOpacity={0.3} />
                                <Bar dataKey="running" stackId="a" fill="#00d084" radius={[0, 0, 0, 0]} name="Running" />
                                <Bar dataKey="idle" stackId="a" fill="#ff9100" radius={[0, 0, 0, 0]} name="Idle" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="flex items-center justify-center gap-6 mt-1 pb-2">
                        <span className="flex items-center gap-2 text-[12px] font-medium text-[#cbd5e1]">
                            <span className="w-4 h-3 rounded-[2px] bg-[#00d084]" /> Running
                        </span>
                        <span className="flex items-center gap-2 text-[12px] font-medium text-[#cbd5e1]">
                            <span className="w-4 h-3 rounded-[2px] bg-[#ff9100]" /> Idle
                        </span>
                    </div>
                </ChartCard>
            </div>
        </div>
    );
}
