import { Layers, Zap, Gauge, Hammer, Wind } from 'lucide-react';

export default function KPICard({ title, value, unit, sub, iconNode, progress, progressColor = '#00d084' }) {
    return (
        <div className="kpi-card p-4 flex flex-col items-center justify-center text-center">
            {/* Top Border Highlight embedded in CSS .kpi-card */}
            <h3 className="text-[11px] text-[#94a3b8] font-medium tracking-wide mb-2 uppercase">{title}</h3>

            <div className="flex items-baseline gap-1 justify-center mb-1">
                <span className="text-[34px] font-bold text-white tracking-tight leading-none glow-white">
                    {value}
                </span>
                {unit && <span className="text-[12px] text-[#94a3b8] ml-1">{unit}</span>}
            </div>

            {sub && <p className="text-[10px] text-[#64748b] mt-1">{sub}</p>}

            {progress !== undefined && (
                <div className="w-[80%] mt-3 h-1.5 rounded-full bg-[#1e293b] overflow-hidden">
                    <div
                        className="h-full rounded-full"
                        style={{
                            width: `${progress}%`,
                            background: `linear-gradient(90deg, ${progressColor} 0%, #ff9100 100%)`
                        }}
                    />
                </div>
            )}

            {iconNode && (
                <div className="mt-3 flex justify-center">
                    {iconNode}
                </div>
            )}
        </div>
    );
}
