export default function SmallStatCard({ label, value, unit, icon }) {
    return (
        <div className="metric-card px-3 py-3 text-center">
            <p className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">{label}</p>
            <div className="flex items-baseline gap-1 justify-center">
                {icon && <span className="text-sm">{icon}</span>}
                <span className="text-xl font-bold text-cyan-400 text-glow-cyan">{value}</span>
                {unit && <span className="text-[10px] text-slate-400">{unit}</span>}
            </div>
        </div>
    );
}
