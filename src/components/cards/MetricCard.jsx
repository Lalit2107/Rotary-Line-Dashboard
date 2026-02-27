export default function MetricCard({ label, value, unit, sub, icon, iconNode, color = 'cyan', valueColor = 'white', showBar, barPercent, children }) {
    const colorMap = {
        cyan: 'text-[#00e0ff]',
        green: 'text-[#00d084]',
        orange: 'text-[#ff9100]',
        red: 'text-[#ff3b30]',
        yellow: 'text-[#ffcc00]',
        white: 'text-white',
    };

    const glowMap = {
        cyan: 'glow-cyan',
        green: 'glow-green',
        orange: 'glow-orange',
        white: '', // white usually doesn't have a colored glow in these designs
    };

    return (
        <div className="metric-card px-4 py-5 flex flex-col items-center justify-center min-w-[140px]">
            <p className="text-[11px] text-[#64748b] text-center mb-1.5 font-medium tracking-wider uppercase">{label}</p>
            <div className="flex items-baseline gap-1 justify-center relative">
                <span className={`text-[32px] font-bold tracking-tight ${colorMap[valueColor] || 'text-[#00e0ff]'} ${glowMap[valueColor] || ''}`}>
                    {value}
                </span>
                {unit && <span className="text-[11px] text-[#64748b] ml-1">{unit}</span>}
            </div>
            {sub && <p className="text-[10px] text-[#475569] mt-1 tracking-wide">{sub}</p>}

            {showBar && (
                <div className="w-full mt-3 h-1.5 rounded-full bg-[#1e293b] overflow-hidden">
                    <div
                        className="h-full rounded-full"
                        style={{
                            width: `${barPercent}%`,
                            background: 'linear-gradient(90deg, #00d084 0%, #ffcc00 100%)'
                        }}
                    />
                </div>
            )}

            {iconNode && <div className="mt-2 text-center">{iconNode}</div>}
            {children}
        </div>
    );
}
