import KPICard from '../components/cards/KPICard';
import ChartCard from '../components/cards/ChartCard';
import {
    sheetCountData,
    hourlyOutputData,
    powerConsumptionData,
} from '../data/mockData';
import {
    LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
    ResponsiveContainer, Area, AreaChart,
} from 'recharts';
import { Clock } from 'lucide-react';

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-[#080d1a]/95 border border-[rgba(100,116,139,0.2)] rounded px-3 py-2 shadow-lg">
                <p className="text-[10px] text-[#64748b] mb-1">{label}</p>
                {payload.map((p, i) => (
                    <p key={i} className="text-[11px] font-medium" style={{ color: p.color || '#fff' }}>
                        {p.name}: {typeof p.value === 'number' ? p.value.toLocaleString() : p.value}
                    </p>
                ))}
            </div>
        );
    }
    return null;
};

export default function RotaryOverview() {
    return (
        <div className="flex flex-col gap-[14px] h-full">
            {/* KPI Row (5 Cards) */}
            <div className="grid grid-cols-5 gap-[14px]">
                <KPICard title="Total Sheets Processed" value="12,450" sub="Proximity Sensor Count" />
                <KPICard title="Hammer Stroke Count" value="8,920" />
                <KPICard title="Conveyor Belt Speed" value="45.0" unit="m/min" />
                <KPICard title="Total Power Consumption" value="3,280" unit="kWh" />
                <KPICard title="Machine Utilization" value="86%" progress={86} progressColor="#ff9100" />
            </div>

            {/* Charts Row: Sheet Count + Hourly Output */}
            <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-[14px]">
                {/* Sheet Count Over Time */}
                <div className="h-[280px]">
                    <ChartCard title="Sheet Count Over Time" height="100%">
                        <div className="w-full h-full pb-6 pt-2 pr-4">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={sheetCountData} margin={{ top: 0, right: 0, left: -10, bottom: 0 }}>
                                    <defs>
                                        <linearGradient id="sheetGradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#00e0ff" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#00e0ff" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.02)" vertical={false} />
                                    <XAxis dataKey="time" tick={{ fill: '#94a3b8', fontSize: 10 }} axisLine={false} tickLine={false} />
                                    <YAxis
                                        tick={{ fill: '#94a3b8', fontSize: 10 }}
                                        tickFormatter={(v) => v >= 1000 ? `${(v / 1000).toFixed(1)}k` : v}
                                        axisLine={false} tickLine={false}
                                        ticks={[500, 1000, 1500, 2000, 2500]}
                                    />
                                    <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'rgba(255,255,255,0.1)' }} />
                                    <Area
                                        type="monotone"
                                        dataKey="count"
                                        stroke="#00e0ff"
                                        strokeWidth={2}
                                        fillOpacity={1}
                                        fill="url(#sheetGradient)"
                                        name="Sheet Count"
                                        dot={false}
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </ChartCard>
                </div>

                {/* Hourly Production Output */}
                <div className="h-[280px]">
                    <ChartCard title="Hourly Production Output" rightLabel={
                        <span className="text-[10px] text-[#64748b]">Sheets</span>
                    } height="100%">
                        <div className="w-full h-full pb-6 pt-2 pr-4">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={hourlyOutputData} barSize={24} margin={{ top: 0, right: 0, left: -15, bottom: 0 }}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.02)" vertical={false} />
                                    <XAxis dataKey="hour" tick={{ fill: '#94a3b8', fontSize: 10 }} axisLine={false} tickLine={false} />
                                    <YAxis
                                        tick={{ fill: '#94a3b8', fontSize: 10 }}
                                        tickFormatter={(v) => v >= 1000 ? `${(v / 1000).toFixed(1)}k` : v}
                                        axisLine={false} tickLine={false}
                                        ticks={[0, 400, 800, 1000, 1200, 1400]}
                                    />
                                    <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
                                    <Bar dataKey="sheets" fill="#ff9100" radius={[0, 0, 0, 0]} name="Sheets" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </ChartCard>
                </div>
            </div>

            {/* Bottom Row: Shift Time + Power Consumption */}
            <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-[14px] flex-1 min-h-[160px]">
                {/* Shift Time */}
                <div className="dashboard-card p-5 flex flex-col justify-center">
                    <h3 className="text-[13px] font-bold text-white mb-6">Shift Time</h3>
                    <div className="flex items-center gap-3">
                        <Clock size={20} className="text-[#94a3b8]" strokeWidth={2.5} />
                        <span className="text-[22px] font-bold tracking-wide text-white">06:30 – 15:00</span>
                    </div>
                </div>

                {/* Power Consumption */}
                <ChartCard title="Power Consumption" height="100%">
                    <div className="absolute top-[14px] left-[14px] text-[10px] text-[#64748b]">kw</div>
                    <div className="w-full h-full pb-4 pt-6 px-2">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={powerConsumptionData} margin={{ top: 0, right: 0, left: -25, bottom: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} horizontalPoints={[20, 40, 60, 80]} />
                                <XAxis dataKey="time" tick={{ fill: '#94a3b8', fontSize: 10 }} interval={3} axisLine={false} tickLine={false} />
                                <YAxis tick={false} axisLine={false} tickLine={false} />
                                <Tooltip content={<CustomTooltip />} />
                                <Line
                                    type="monotone"
                                    dataKey="kw"
                                    stroke="#ff9100"
                                    strokeWidth={2}
                                    dot={false}
                                    name="Power (kW)"
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </ChartCard>
            </div>
        </div>
    );
}
