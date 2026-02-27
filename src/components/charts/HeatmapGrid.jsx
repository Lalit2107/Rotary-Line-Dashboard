export default function HeatmapGrid({ data }) {
    const getColor = (val) => {
        if (val >= 6.7) return 'bg-cyan-500/80 text-white';
        if (val >= 6.4) return 'bg-cyan-600/60 text-white';
        if (val >= 6.2) return 'bg-cyan-700/50 text-cyan-200';
        return 'bg-cyan-800/40 text-cyan-300';
    };

    return (
        <div className="overflow-x-auto">
            <table className="w-full text-xs">
                <thead>
                    <tr>
                        <th className="text-left px-2 py-1.5 text-[10px] text-slate-400 font-medium"></th>
                        <th colSpan="2" className="px-2 py-1.5 text-[10px] text-slate-400 font-medium text-center">Shift 1</th>
                        <th colSpan="2" className="px-2 py-1.5 text-[10px] text-slate-400 font-medium text-center">Shift 2</th>
                        <th colSpan="2" className="px-2 py-1.5 text-[10px] text-slate-400 font-medium text-center">Shift 3</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, i) => (
                        <tr key={i}>
                            <td className="px-2 py-1 text-slate-300 font-medium">{row.line}</td>
                            {[
                                [row.s1v1, row.s1v2],
                                [row.s2v1, row.s2v2],
                                [row.s3v1, row.s3v2],
                            ].map((pair, j) => (
                                pair.map((val, k) => (
                                    <td key={`${j}-${k}`} className="px-1 py-1">
                                        <div className={`rounded px-2 py-1 text-center font-semibold text-[11px] ${getColor(val)}`}>
                                            {val.toFixed(1)}
                                        </div>
                                    </td>
                                ))
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
