export default function ChartCard({ title, children, className = '', rightLabel, height }) {
    // If height is provided, we use flex to ensure children can fill the space.
    const containerStyle = height ? { height } : {};
    const useFlex = height ? 'flex flex-col' : '';
    const childWrapper = height ? 'flex-1 min-h-0' : 'w-full';

    return (
        <div
            className={`dashboard-card p-4 ${useFlex} ${className}`}
            style={containerStyle}
        >
            <div className="flex items-center justify-between mb-3 shrink-0">
                <h3 className="text-[13px] font-bold text-white tracking-wide">{title}</h3>
                {rightLabel && <span className="text-[11px] text-[#64748b]">{rightLabel}</span>}
            </div>
            <div className={`${childWrapper} w-full relative`}>
                {children}
            </div>
        </div>
    );
}
