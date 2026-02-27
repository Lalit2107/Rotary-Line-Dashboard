export default function GaugeChart({ value, max, label, unit, colorStops, ticks }) {
    const percentage = (value / max) * 100;
    // Sweep from -120 to +120 (240 degree coverage)
    const angle = (percentage / 100) * 240 - 120;

    const stops = colorStops || [
        { offset: '0%', color: '#00d084' },
        { offset: '50%', color: '#ffcc00' },
        { offset: '100%', color: '#ff3b30' },
    ];

    const id = `gauge-${label.replace(/\s/g, '-')}`;

    return (
        <div className="kpi-card p-4 flex flex-col justify-between items-center h-full">
            <p className="text-[12px] text-[#e2e8f0] font-medium tracking-wide mb-1 w-full text-center">{label}</p>

            <div className="flex-1 flex justify-center items-center w-full mt-2 relative">
                <svg viewBox="0 0 200 140" className="w-[180px] h-[126px] overflow-visible">
                    <defs>
                        <linearGradient id={`${id}-gradient`} x1="0%" y1="0%" x2="100%" y2="0%">
                            {stops.map((stop, i) => (
                                <stop key={i} offset={stop.offset} stopColor={stop.color} />
                            ))}
                        </linearGradient>
                        <filter id={`${id}-glow`} x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>

                        <filter id="gauge-bg-glow" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0   0 0 0 0 0.88   0 0 0 0 1   0 0 0 0.2 0" />
                        </filter>
                    </defs>

                    {/* Glowing background arc */}
                    <path
                        d="M 30 110 A 70 70 0 1 1 170 110"
                        fill="none"
                        stroke="url(#gauge-bg-glow)"
                        strokeWidth="18"
                        strokeLinecap="round"
                        filter="url(#gauge-bg-glow)"
                        opacity="0.2"
                    />

                    {/* Background dark arc */}
                    <path
                        d="M 30 110 A 70 70 0 1 1 170 110"
                        fill="none"
                        stroke="#1e293b"
                        strokeWidth="12"
                        strokeLinecap="round"
                    />

                    {/* Outer Tick lines like image */}
                    {ticks.map((tickVal) => {
                        const tickAngle = ((tickVal / max) * 240 - 120) * (Math.PI / 180);
                        const outerR = 86;
                        const innerR = 80;
                        const textR = 64; // Distance for numbers inside the arc
                        const cx = 100;
                        const cy = 110;

                        const x1 = cx + innerR * Math.cos(tickAngle - Math.PI / 2);
                        const y1 = cy + innerR * Math.sin(tickAngle - Math.PI / 2);
                        const x2 = cx + outerR * Math.cos(tickAngle - Math.PI / 2);
                        const y2 = cy + outerR * Math.sin(tickAngle - Math.PI / 2);

                        const tx = cx + textR * Math.cos(tickAngle - Math.PI / 2);
                        const ty = cy + textR * Math.sin(tickAngle - Math.PI / 2);

                        return (
                            <g key={tickVal}>
                                <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#334155" strokeWidth="1.5" />
                                <text
                                    x={tx}
                                    y={ty}
                                    textAnchor="middle"
                                    dominantBaseline="middle"
                                    fill="#94a3b8"
                                    fontSize="8"
                                    fontWeight="600"
                                >
                                    {tickVal}
                                </text>
                            </g>
                        );
                    })}

                    {/* Secondary smaller ticks */}
                    {Array.from({ length: 21 }).map((_, i) => {
                        const tickAngle = ((i / 20) * 240 - 120) * (Math.PI / 180);
                        const cx = 100;
                        const cy = 110;
                        const x1 = cx + 80 * Math.cos(tickAngle - Math.PI / 2);
                        const y1 = cy + 80 * Math.sin(tickAngle - Math.PI / 2);
                        const x2 = cx + 83 * Math.cos(tickAngle - Math.PI / 2);
                        const y2 = cy + 83 * Math.sin(tickAngle - Math.PI / 2);
                        return <line key={`sub-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#1e293b" strokeWidth="1" />;
                    })}

                    {/* Colored arc with gradient and glow */}
                    <path
                        d="M 30 110 A 70 70 0 1 1 170 110"
                        fill="none"
                        stroke={`url(#${id}-gradient)`}
                        strokeWidth="12"
                        strokeLinecap="round"
                        strokeDasharray={`${(percentage / 100) * 220} 220`}
                        filter={`url(#${id}-glow)`}
                    />

                    {/* Needle */}
                    <g transform={`rotate(${angle}, 100, 110)`}>
                        {/* The needle stem */}
                        <path
                            d="M 98 110 L 102 110 L 100 45 Z"
                            fill="rgba(255,255,255,0.9)"
                            filter={`url(#${id}-glow)`}
                        />
                    </g>
                    {/* Glowing center pivot (white inner, pulsing colored outer) */}
                    <circle cx="100" cy="110" r="10" fill="#0f141f" stroke="#00e0ff" strokeWidth="2" filter={`url(#${id}-glow)`} />
                    <circle cx="100" cy="110" r="3" fill="#ffffff" />
                </svg>
            </div>

            <div className="flex flex-col items-center mt-[-15px]">
                <div className="flex items-baseline gap-1">
                    <span className="text-[28px] font-bold text-[#00e0ff] tracking-tight glow-cyan">{value}</span>
                </div>
                <span className="text-[12px] text-[#00e0ff] font-medium opacity-80 mt-[-4px]">{unit}</span>
            </div>
        </div>
    );
}
