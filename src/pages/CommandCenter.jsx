import KPICard from '../components/cards/KPICard';
import ChartCard from '../components/cards/ChartCard';
import ProductivityHeatmap from '../components/charts/ProductivityHeatmap';
import {
    shiftPerformance,
    powerConsumptionShifts,
} from '../data/mockData';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    AreaChart, Area, Cell,
} from 'recharts';
import { Layers, Zap, Gauge, Hammer, Wind } from 'lucide-react';

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

const heatColors = {
    blueDark: '#0a3a60',
    blue: '#006699',
    blueLight: '#00e0ff',
    yellow: '#ffcc00',
    orange: '#ff9100',
    green: '#00d084',
    greenDark: '#008a5e'
};

const productivityHeatmapData = [
    {
        line: 'Line 1',
        s1: [heatColors.blueDark, heatColors.blueDark, heatColors.blue, heatColors.blueLight],
        s2: [heatColors.blueLight, heatColors.blueLight, heatColors.blue, heatColors.blueDark],
        s3: [heatColors.orange, heatColors.yellow, heatColors.green, heatColors.greenDark]
    },
    {
        line: 'Line 2',
        s1: [heatColors.blueDark, heatColors.blue, heatColors.blueLight, heatColors.blue],
        s2: [heatColors.blue, heatColors.blue, heatColors.blueLight, heatColors.blueLight],
        s3: [heatColors.orange, heatColors.orange, heatColors.yellow, heatColors.green]
    },
    {
        line: 'Line 3',
        s1: [heatColors.blue, heatColors.blueLight, heatColors.blueDark, heatColors.blue],
        s2: [heatColors.blueLight, heatColors.blue, heatColors.blue, heatColors.blueLight],
        s3: [heatColors.yellow, heatColors.orange, heatColors.green, heatColors.greenDark]
    },
    {
        line: 'Line 4',
        s1: [heatColors.blueLight, heatColors.blue, heatColors.blue, heatColors.blueDark],
        s2: [heatColors.blueLight, heatColors.blueLight, heatColors.blue, heatColors.blueDark],
        s3: [heatColors.yellow, heatColors.green, heatColors.greenDark, heatColors.green]
    },
    {
        line: 'Line 5',
        s1: [heatColors.blue, heatColors.blueDark, heatColors.blueLight, heatColors.blue],
        s2: [heatColors.blueLight, heatColors.blue, heatColors.blueDark, heatColors.blueLight],
        s3: [heatColors.green, heatColors.yellow, heatColors.orange, heatColors.green]
    },
];

const efficiencyData1 = [
    { shift: 'Shift 1', v1: '6.88', v2: '6.84' },
    { shift: 'Shift 2', v1: '6.28', v2: '6.44' },
    { shift: 'Shift 3', v1: '6.28', v2: '6.44' },
];

const efficiencyData2 = [
    { shift: 'Shift 1', v1: '6.8', v2: '6.4' },
    { shift: 'Shift 2', v1: '6.2', v2: '6.4' },
];

export default function CommandCenter() {
    return (
        <div className="flex flex-col gap-[14px] h-full">
            {/* Top 5 KPI Cards */}
            <div className="grid grid-cols-5 gap-[14px]">
                <KPICard title="Total Sheets Produced" value="68,350" iconNode={<Layers size={14} className="text-[#00e0ff] glow-cyan" />} />
                <KPICard title="Total Power Consumption (kWh)" value="10,580" iconNode={<Zap size={14} className="text-[#00d084] glow-green" />} />
                <KPICard title="Overall Plant Utilization (%)" value="87%" progress={87} progressColor="#00d084" />
                <KPICard title="Total Hammer Strokes" value="48,260" iconNode={<Hammer size={14} className="text-[#ff9100] glow-orange" />} />
                <div className="kpi-card p-4 flex flex-col items-center justify-center text-center relative">
                    <h3 className="text-[11px] text-[#94a3b8] font-medium tracking-wide mb-2 uppercase">Average Conveyor Speed</h3>
                    <div className="flex items-baseline gap-1 justify-center mb-1">
                        <span className="text-[34px] font-bold text-white tracking-tight leading-none glow-white">45.8</span>
                        <span className="text-[12px] text-[#94a3b8] ml-1">m/min</span>
                    </div>
                    <div className="mt-3 flex justify-center items-center gap-2 relative">
                        <Wind size={14} className="text-[#00e0ff] glow-cyan" />
                        <span className="absolute -right-3 -top-1 text-[8px] text-[#ff3b30] font-bold">9</span>
                    </div>
                </div>
            </div>

            {/* Line Wise Table - Custom built for exact layout */}
            <div className="dashboard-card p-4">
                <h3 className="text-[14px] font-bold text-white mb-3 flex items-center gap-1.5 tracking-wide">
                    Line Wise <span className="text-pink-500 text-[10px]">📍</span>
                </h3>

                <div className="w-full">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="text-[10px] text-[#64748b] tracking-wider uppercase border-b border-[rgba(255,255,255,0.05)]">
                                <th className="font-medium pb-2">Lines</th>
                                <th className="font-medium pb-2">Current Shift</th>
                                <th className="font-medium pb-2">Sheets Produced</th>
                                <th className="font-medium pb-2">Hammer Stroke Count</th>
                                <th className="font-medium pb-2">Conveyor Speed (m/min)</th>
                                <th className="font-medium pb-2">Power Consumption</th>
                                <th className="font-medium pb-2">Status</th>
                                <th className="font-medium pb-2">Priority</th>
                                <th className="font-medium pb-2">Status</th>
                            </tr>
                        </thead>
                        <tbody className="text-[13px] text-[#e2e8f0]">
                            {/* Rows accurately mocked from image */}
                            {[
                                { l: 'Line 1', s: 'Shift 1', p1: '5,256', p2: '1,371', hs: '906', cs: '45.1', pc: '55.6', stIcon: 'run', pr: 'run', st2: 'Running', st2C: '#00d084' },
                                { l: 'Line 2', s: 'Shift 2', p1: '5,356', p2: '1,811', hs: '908', cs: '45.0', pc: '53.3', stIcon: 'run', pr: 'run', st2: 'Running', st2C: '#00d084' },
                                { l: 'Line 3', s: 'Shift 1', p1: '5,864', p2: '1,637', hs: '799', cs: '45.3', pc: '55.2', stIcon: 'run', pr: 'run', st2: 'Running', st2C: '#00d084' },
                                { l: 'Line 4', s: 'Shift 1', p1: '5,864', p2: '1,847', hs: '738', cs: '45.3', pc: '59.3', stIcon: 'run', pr: 'run', st2: 'Running', st2C: '#00d084' },
                                { l: 'Line 5', s: 'Shift 3', p1: '5,410', p2: '1,730', hs: '798', cs: '45.4', pc: '59.5', stIcon: 'run', pr: 'maint', st2: 'Maintenance', st2C: '#ffcc00' },
                                { l: 'Line 6', s: 'Shift 3', p1: '5,887', p2: '1,059', hs: '696', cs: '49.3', pc: '26.8', stIcon: 'run', pr: 'maint', st2: 'Maintenance', st2C: '#ffcc00' },
                                { l: 'Line 7', s: 'Shift 3', p1: '5,629', p2: '1,586', hs: '755', cs: '56.7', pc: '59.3', stIcon: 'run', pr: 'idle', st2: 'Idle', st2C: '#ff9100' },
                            ].map((row, i) => (
                                <tr key={i} className="border-b border-[rgba(255,255,255,0.03)] hover:bg-[rgba(255,255,255,0.02)] transition-colors">
                                    <td className="py-2.5 font-medium">{row.l}</td>
                                    <td className="py-2.5">
                                        <span className="bg-[#0a192f] border border-[rgba(0,224,255,0.3)] text-[#00e0ff] text-[11px] px-2 py-0.5 rounded-sm">
                                            {row.s}
                                        </span>
                                    </td>
                                    <td className="py-2.5">
                                        {row.p1} <span className="text-[#64748b] text-[11px] ml-1">{row.p2}</span>
                                    </td>
                                    <td className="py-2.5 text-[#cbd5e1]">{row.hs}</td>
                                    <td className="py-2.5">
                                        {row.cs} <span className="text-[#64748b] text-[10px]">m/min</span>
                                    </td>
                                    <td className="py-2.5">
                                        {row.pc} <span className="text-[#64748b] text-[10px]">kWh</span>
                                    </td>
                                    <td className="py-2.5">
                                        <div className="flex items-center gap-2">
                                            {row.stIcon === 'run' && <div className="w-[14px] h-[14px] rounded-full border-[2px] border-[#00d084] flex items-center justify-center">
                                                <div className="w-1.5 h-1.5 bg-[#00d084] rounded-full"></div>
                                            </div>}
                                            <span className="text-[12px] text-[#cbd5e1]">Running</span>
                                        </div>
                                    </td>
                                    <td className="py-2.5 pl-3">
                                        {row.pr === 'run' && <div className="w-1.5 h-1.5 bg-[#00d084] rounded-full"></div>}
                                        {row.pr === 'maint' && <span className="text-[#ffcc00] text-[10px] leading-none font-bold">⚠</span>}
                                        {row.pr === 'idle' && <div className="w-1.5 h-1.5 bg-[#ff3b30] rounded-full"></div>}
                                    </td>
                                    <td className="py-2.5">
                                        <span className="text-[12px] font-medium" style={{ color: row.st2C }}>{row.st2}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Grid of Charts - Bottom Half */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[14px] flex-1">
                {/* Production Output Comparison + Shift Production Performance */}
                <div className="flex flex-col gap-[14px]">
                    <ChartCard title="Production Output Comparison">
                        {/* Exact match of the horizontal bars in the picture */}
                        <div className="flex flex-col gap-3 py-2 px-1">
                            <div className="w-full flex items-center justify-between text-[11px] text-[#64748b]">
                                <span className="w-6">50</span>
                                <div className="flex-1 h-3.5 bg-[#00e0ff] rounded-r text-right pr-2 leading-[14px] text-black font-bold"></div>
                                <span className="ml-3 text-white text-[10px]">23.8k</span>
                            </div>
                            <div className="w-full flex items-center justify-between text-[11px] text-[#64748b]">
                                <span className="w-6">25</span>
                                <div className="flex-[0.9] h-3.5 bg-[#ff3b30] rounded-r text-right pr-2 leading-[14px] text-white font-bold"></div>
                                <span className="ml-3 text-white text-[10px]">21.4k</span>
                            </div>
                            <div className="w-full flex items-center justify-between text-[11px] text-[#64748b]">
                                <span className="w-6">55</span>
                                <div className="flex-[0.98] h-3.5 bg-[#00d084] rounded-r text-right pr-2 leading-[14px] text-white font-bold"></div>
                                <span className="ml-3 text-white text-[10px]">23.3k</span>
                            </div>
                        </div>
                    </ChartCard>

                    <ChartCard title="Shift Production Performance" rightLabel={
                        <div className="flex items-center gap-3 text-[10px] text-[#64748b] font-medium">
                            <span className="flex items-center gap-1"><span className="w-2 h-2 bg-[#00e0ff]"></span> Shift 1</span>
                            <span className="flex items-center gap-1"><span className="w-2 h-2 bg-[#00d084]"></span> Shift 3</span>
                        </div>
                    }>
                        <ResponsiveContainer width="100%" height={150}>
                            <BarChart data={shiftPerformance} barSize={20} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" vertical={false} />
                                <XAxis dataKey="name" tick={{ fill: '#64748b', fontSize: 10 }} axisLine={false} tickLine={false} />
                                <YAxis tick={{ fill: '#64748b', fontSize: 10 }} axisLine={false} tickLine={false} ticks={[0, 6000, 12000, 18000, 24000]} />
                                <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.05)' }} />
                                <Bar dataKey="value" radius={[2, 2, 0, 0]}>
                                    {shiftPerformance.map((_, i) => (
                                        <Cell key={i} fill={i === 0 ? '#00e0ff' : i === 1 ? '#ff9100' : '#00d084'} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </ChartCard>
                </div>

                {/* Power Consumption Across Shifts + Productivity Heatmap */}
                <div className="flex flex-col gap-[14px]">
                    <ChartCard title="Power Consumption Across Shifts">
                        <ResponsiveContainer width="100%" height={140}>
                            <AreaChart data={powerConsumptionShifts} margin={{ top: 10, right: 0, left: -25, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorOrange" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#ff9100" stopOpacity={0.2} />
                                        <stop offset="95%" stopColor="#ff9100" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" vertical={false} />
                                <XAxis dataKey="time" tick={{ fill: '#64748b', fontSize: 10 }} axisLine={false} tickLine={false} />
                                <YAxis tick={{ fill: '#64748b', fontSize: 10 }} axisLine={false} tickLine={false} ticks={[0, 10, 20, 30, 40]} />
                                <Tooltip content={<CustomTooltip />} />
                                <Area type="monotone" dataKey="value" stroke="#ff9100" strokeWidth={1.5} fillOpacity={1} fill="url(#colorOrange)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </ChartCard>

                    <ChartCard title="Productivity by Line and Shift">
                        <ProductivityHeatmap data={productivityHeatmapData} />
                    </ChartCard>
                </div>

                {/* Efficiency Panel x 2 */}
                <div className="flex flex-col gap-[14px]">
                    {/* Efficiency box 1 */}
                    <div className="dashboard-card p-4">
                        <h3 className="text-[13px] font-semibold text-white mb-4 tracking-wide">Efficiency (Output per kWh)</h3>
                        <div className="flex flex-col gap-2.5">
                            {efficiencyData1.map((row, i) => (
                                <div key={i} className="flex gap-2 w-full text-[12px]">
                                    <div className="flex-1 bg-[rgba(255,255,255,0.03)] text-[#94a3b8] py-1 px-3 border border-[rgba(255,255,255,0.03)]">{row.shift}</div>
                                    <div className={`flex-[1.5] text-center font-bold py-1 border border-[rgba(255,255,255,0.03)] bg-[rgba(255,255,255,0.02)] ${i === 0 ? 'text-[#00e0ff]' : i === 1 ? 'text-[#ff9100]' : 'text-[#00d084]'
                                        }`}>{row.v1}</div>
                                    <div className={`flex-[1.5] text-center font-bold py-1 border border-[rgba(255,255,255,0.03)] bg-[rgba(255,255,255,0.02)] ${i === 0 ? 'text-[#00d084]' : 'text-[#00d084]'
                                        }`}>{row.v2}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Efficiency box 2 */}
                    <div className="dashboard-card p-4">
                        <h3 className="text-[13px] font-semibold text-white mb-4 tracking-wide">Efficiency (Output per kWh)</h3>
                        <div className="flex flex-col gap-3">
                            {efficiencyData2.map((row, i) => (
                                <div key={i} className="flex gap-2 w-full text-[13px]">
                                    <div className="flex-1 bg-[rgba(255,255,255,0.03)] text-[#94a3b8] py-2 px-3 border border-[rgba(255,255,255,0.03)]">{row.shift}</div>
                                    <div className={`flex-[1.5] text-center font-bold text-[14px] py-2 border border-[rgba(255,255,255,0.03)] bg-[rgba(255,255,255,0.02)] ${i === 0 ? 'text-[#00e0ff]' : 'text-[#ff9100]'
                                        }`}>{row.v1}</div>
                                    <div className={`flex-[1.5] text-center font-bold text-[14px] py-2 border border-[rgba(255,255,255,0.03)] bg-[rgba(255,255,255,0.02)] ${'text-[#00d084]'
                                        }`}>{row.v2}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
