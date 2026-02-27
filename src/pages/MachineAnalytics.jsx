import GaugeChart from '../components/charts/GaugeChart';
import ChartCard from '../components/cards/ChartCard';
import {
    conveyorSpeedData,
    scatterData,
    conveyorSpeedVariation,
} from '../data/mockData';
import {
    ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip,
    ResponsiveContainer, LineChart, Line, ZAxis, ReferenceLine,
} from 'recharts';
import { Lightbulb, CheckCircle2, Clock } from 'lucide-react';

export default function MachineAnalytics() {
    const minPower = Math.min(...scatterData.map((d) => d.power));
    const maxPower = Math.max(...scatterData.map((d) => d.power));

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-[#080d1a]/95 border border-[rgba(100,116,139,0.2)] rounded px-3 py-2 shadow-lg">
                    {payload.map((p, i) => (
                        <p key={i} className="text-[11px] font-medium" style={{ color: p.color || '#00e0ff' }}>
                            {p.name}: {typeof p.value === 'number' ? p.value.toLocaleString() : p.value}
                        </p>
                    ))}
                </div>
            );
        }
        return null;
    };

    return (
        <div className="flex flex-col gap-[14px] h-full">
            {/* Top Row: Gauges + KPI Stats */}
            <div className="grid grid-cols-5 gap-[14px] h-[210px]">
                <GaugeChart value={45.2} max={60} label="Conveyor Speed" unit="m/min" ticks={[0, 15, 30, 45, 60]} />

                <GaugeChart value={428} max={600} label="Real-time Power Load" unit="kw" ticks={[0, 150, 300, 450, 600]} colorStops={[{ offset: '0%', color: '#00d084' }, { offset: '40%', color: '#ffcc00' }, { offset: '100%', color: '#ff3b30' }]} />

                {/* Hammer Strokes */}
                <div className="kpi-card p-4 flex flex-col justify-center text-center relative overflow-hidden">
                    <h3 className="text-[13px] text-[#e2e8f0] font-medium tracking-wide mb-3">Hammer Strokes per Minute</h3>
                    <div className="flex flex-col items-center">
                        <span className="text-[44px] font-bold text-[#00e0ff] tracking-tight leading-none glow-cyan">94</span>
                        <p className="text-[10px] text-[#64748b] mt-3 uppercase tracking-wider font-semibold">HAMMER STROKES<br />PER MINUTE</p>
                    </div>
                </div>

                {/* Efficiency */}
                <div className="kpi-card p-4 flex flex-col justify-center text-center relative">
                    <h3 className="text-[13px] text-[#e2e8f0] font-medium tracking-wide mb-3">Efficiency</h3>
                    <div className="flex justify-center items-center gap-1">
                        <span className="text-[44px] font-bold text-[#00e0ff] tracking-tight leading-none glow-cyan">87.4</span>
                        <Lightbulb size={24} className="text-[#e2e8f0] shrink-0 translate-y-[-10px]" strokeWidth={2} />
                    </div>
                    <p className="text-[10px] text-[#64748b] mt-3 uppercase tracking-wider font-semibold">OUTPUT PER KWH</p>
                </div>

                {/* Downtime */}
                <div className="kpi-card p-4 flex flex-col justify-center">
                    <h3 className="text-[13px] text-[#e2e8f0] text-center font-medium tracking-wide mb-6">Downtime</h3>
                    <div className="flex justify-center w-full">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <CheckCircle2 size={18} strokeWidth={2.5} className="text-[#00d084]" />
                                <span className="text-[15px] font-bold text-[#00d084] tracking-wide">Running</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Clock size={18} strokeWidth={2.5} className="text-[#ff3b30]" />
                                <span className="text-[15px] font-medium text-[#94a3b8]">Idle</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Middle Row: Conveyor Speed + Scatter + Alerts */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr_300px] gap-[14px]">
                {/* Conveyor Speed Variation (small) */}
                <ChartCard title="Conveyor Speed Variation" height="180px">
                    <div className="w-full h-[150px] pb-5 pt-3 pr-2">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={conveyorSpeedData} margin={{ top: 0, right: 0, left: -25, bottom: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" vertical={false} />
                                <XAxis dataKey="time" tick={{ fill: '#94a3b8', fontSize: 10 }} interval={5} axisLine={false} tickLine={false} />
                                <YAxis tick={{ fill: '#94a3b8', fontSize: 10 }} domain={[20, 60]} axisLine={false} tickLine={false} ticks={[20, 30, 40, 50, 60]} />
                                <Tooltip content={<CustomTooltip />} />
                                <Line
                                    type="monotone"
                                    dataKey="speed"
                                    stroke="#00e0ff"
                                    strokeWidth={2}
                                    dot={false}
                                    name="Speed"
                                    style={{ filter: "drop-shadow(0 0 4px rgba(0, 224, 255, 0.4))" }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </ChartCard>

                {/* Hammer Strokes vs Power Consumption (Scatter) */}
                <ChartCard title="Hammer Strokes vs Power Consumption" height="180px">
                    <div className="w-full h-[150px] pb-4 pt-1 pr-4 pl-0 relative">
                        <ResponsiveContainer width="100%" height="100%">
                            <ScatterChart margin={{ top: 5, right: 10, left: -25, bottom: 10 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" vertical={false} horizontalPoints={[20, 40, 60, 80, 100, 120]} />
                                <XAxis
                                    type="number"
                                    dataKey="power"
                                    tick={{ fill: '#94a3b8', fontSize: 10 }}
                                    axisLine={false}
                                    tickLine={false}
                                    domain={[0, 800]}
                                />
                                <YAxis
                                    type="number"
                                    dataKey="strokes"
                                    tick={{ fill: '#94a3b8', fontSize: 10 }}
                                    domain={[0, 120]}
                                    axisLine={false}
                                    tickLine={false}
                                    ticks={[0, 20, 40, 60, 80, 100, 120]}
                                />
                                <ZAxis type="number" dataKey="power" range={[10, 30]} />
                                <Tooltip cursor={{ strokeDasharray: '3 3' }} content={<CustomTooltip />} />
                                {/* Real dot rendering mimicking glowing blue bubbles */}
                                <Scatter data={scatterData} fill="#00e0ff" fillOpacity={0.7} style={{ filter: "drop-shadow(0 0 5px rgba(0, 224, 255, 0.8))" }} />
                                <ReferenceLine
                                    segment={[{ x: minPower, y: minPower * 0.15 + 5 }, { x: maxPower, y: maxPower * 0.15 + 5 }]}
                                    stroke="#00e0ff"
                                    strokeWidth={1.5}
                                    ifOverflow="extendDomain"
                                />
                            </ScatterChart>
                        </ResponsiveContainer>
                        <div className="absolute bottom-[-10px] left-0 w-full text-center text-[10px] text-[#64748b]">Power Consumption (kW)</div>
                    </div>
                </ChartCard>

                {/* EXACT Alert Panel replication */}
                <div className="dashboard-card border border-[rgba(255,255,255,0.05)] rounded-md flex flex-col overflow-hidden h-full">
                    <div className="px-4 py-3 flex items-center justify-between border-b border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.01)]">
                        <h3 className="text-[13px] text-[#e2e8f0] font-medium">Alerts</h3>
                        <div className="flex gap-[3px]">
                            <span className="w-1 h-1 bg-[#64748b] rounded-full"></span>
                            <span className="w-1 h-1 bg-[#64748b] rounded-full"></span>
                            <span className="w-1 h-1 bg-[#64748b] rounded-full"></span>
                            <span className="w-1 h-1 bg-[#64748b] rounded-full"></span>
                        </div>
                    </div>

                    <div className="flex-1 p-4 flex flex-col gap-4">
                        {/* Alert 1 */}
                        <div className="flex gap-3 relative">
                            <span className="text-[#ff9100] mt-0.5 text-[14px]">⚠</span>
                            <div className="flex-1">
                                <p className="text-[12px] font-medium text-[#ff9100] mb-1">Overload Warning</p>
                                <p className="text-[11px] text-[#e2e8f0]">High power load detected.</p>
                                <p className="text-[11px] text-[#ff9100] mt-1">14:35</p>
                            </div>
                            <span className="text-[#64748b] text-[12px] absolute right-0 top-0">📌</span>
                        </div>

                        <div className="w-full h-px bg-[rgba(255,255,255,0.05)]" />

                        {/* Alert 2 */}
                        <div className="flex gap-3 relative">
                            <span className="text-[#ff9100] mt-0.5 text-[14px]">⚠</span>
                            <div className="flex-1">
                                <p className="text-[12px] font-medium text-[#ff9100] mb-1">Low Speed Alert</p>
                                <p className="text-[11px] text-[#e2e8f0]">Conveyor speed dropped<br />below 10 m/min.</p>
                                <p className="text-[11px] text-[#ff9100] mt-1">08:20</p>
                            </div>
                            <span className="text-[#64748b] text-[12px] absolute right-0 top-[2px]">...</span>
                        </div>
                    </div>

                    <div className="px-5 pb-5 mt-auto">
                        <button className="w-full flex items-center justify-center py-2.5 bg-transparent border border-[#00d084] text-[#00d084] rounded-[3px] text-[11px] font-bold tracking-wider hover:bg-[rgba(0,208,132,0.1)] transition-colors">
                            RESET
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom: Full Conveyor Speed Variation */}
            <div className="flex-1 min-h-[160px]">
                <ChartCard title="Conveyor Speed Variation" height="100%">
                    <div className="w-full h-full pb-4 pt-4 pr-3">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={conveyorSpeedVariation} margin={{ top: 0, right: 0, left: -25, bottom: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" vertical={false} />
                                <XAxis dataKey="time" tick={{ fill: '#94a3b8', fontSize: 10 }} interval={11} axisLine={false} tickLine={false} />
                                <YAxis tick={{ fill: '#94a3b8', fontSize: 10 }} domain={[20, 60]} axisLine={false} tickLine={false} ticks={[20, 30, 40, 50, 60]} />
                                <Tooltip content={<CustomTooltip />} />
                                <Line
                                    type="monotone"
                                    dataKey="speed"
                                    stroke="#00e0ff"
                                    strokeWidth={2}
                                    dot={<circle r={1.5} fill="rgba(0,224,255,0.5)" filter="drop-shadow(0 0 3px rgba(0, 224, 255, 1))" />}
                                    name="Speed"
                                    style={{ filter: "drop-shadow(0 0 5px rgba(0, 224, 255, 0.4))" }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </ChartCard>
            </div>
        </div>
    );
}
